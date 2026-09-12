import fs from 'node:fs';
import path from 'node:path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const requested = slug.join('/');
  const assetsDir = path.join(process.cwd(), 'public', 'assets');

  // Candidate file names to check
  const candidates = [
    requested,
    decodeURIComponent(requested),
    encodeURIComponent(requested),
    requested.replace(/%20/g, '_').replace(/ /g, '_'),
    requested.replace(/_/g, '%20'),
    requested.replace(/_/g, ' '),
  ];

  for (const cand of candidates) {
    const fullPath = path.join(assetsDir, cand);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      const buffer = fs.readFileSync(fullPath);
      const ext = path.extname(cand).toLowerCase();
      let contentType = 'application/octet-stream';
      if (ext === '.avif') contentType = 'image/avif';
      else if (ext === '.webp') contentType = 'image/webp';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.svg') contentType = 'image/svg+xml';
      else if (ext === '.webm') contentType = 'video/webm';
      else if (ext === '.mp4') contentType = 'video/mp4';

      return new Response(buffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }
  }

  return new Response('Not found: ' + requested, { status: 404 });
}
