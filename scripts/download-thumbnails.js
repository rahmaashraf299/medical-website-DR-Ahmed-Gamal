import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Reconstruct __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import video list from static data file
import { VIDEOS_DATA } from '../src/data/videosData.js';

const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'video_thumbnails');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch image. Status: ${res.status}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.error(`Error downloading image from ${url}:`, err.message);
    return false;
  }
}

async function resolveAndDownloadThumbnail(video) {
  const mediaUrl = `https://www.instagram.com/p/${video.shortcode}/media/?size=m`;
  const destPath = path.join(OUTPUT_DIR, `${video.shortcode}.jpg`);

  // Skip if already downloaded
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
    console.log(`Thumbnail for ${video.shortcode} already exists locally. Skipping.`);
    return true;
  }

  console.log(`Resolving redirect for Reel: ${video.shortcode}...`);
  try {
    const res = await fetch(mediaUrl, {
      redirect: 'manual',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (res.status === 301 || res.status === 302) {
      const redirectUrl = res.headers.get('location');
      if (redirectUrl) {
        console.log(`Downloading direct CDN image: ${redirectUrl.substring(0, 80)}...`);
        const success = await downloadImage(redirectUrl, destPath);
        if (success) {
          console.log(`Successfully saved thumbnail for ${video.shortcode}.`);
          return true;
        }
      }
    } else if (res.status === 200) {
      // Sometimes it doesn't redirect but returns the image directly
      console.log(`Direct image response. Saving directly...`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
      console.log(`Successfully saved thumbnail for ${video.shortcode}.`);
      return true;
    } else {
      console.error(`⚠️ Failed to resolve redirect for Reel URL: https://www.instagram.com/reel/${video.shortcode}/ (Status: ${res.status})`);
    }
  } catch (err) {
    console.error(`⚠️ Network error fetching Reel URL: https://www.instagram.com/reel/${video.shortcode}/ - ${err.message}`);
  }

  return false;
}

async function run() {
  console.log(`Starting background download for all ${VIDEOS_DATA.length} video thumbnails...`);
  let successCount = 0;
  let failCount = 0;

  for (const video of VIDEOS_DATA) {
    const success = await resolveAndDownloadThumbnail(video);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    // Sleep briefly to avoid hitting rate limit
    await new Promise(r => setTimeout(r, 800));
  }

  console.log(`\nDownload completed. Success: ${successCount}, Failed/Fallback: ${failCount}`);
  process.exit(0);
}

run();
