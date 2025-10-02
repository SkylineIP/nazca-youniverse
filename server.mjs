import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import fs from 'fs';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const heavyAssetsDir = path.join(process.cwd(), 'heavy-assets');

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Intercept requests for assets and serve them from heavy-assets
    const assetPath = path.join(heavyAssetsDir, pathname.substring(1));
    if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
      res.statusCode = 200;
      fs.createReadStream(assetPath).pipe(res);
      return;
    }

    // Let Next.js handle all other requests
    handle(req, res, parsedUrl);

  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});