const https = require('https');

const options = {
  hostname: 'en.wikipedia.org',
  path: '/w/api.php?action=query&format=json&prop=pageimages&generator=images&gimlimit=30&titles=Solar_panel&pithumbsize=1600',
  headers: { 'User-Agent': 'Antigravity Demo/1.0 (test@example.com)' }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const pages = json.query.pages;
    const urls = [];
    for (let id in pages) {
      if (pages[id].thumbnail && pages[id].thumbnail.source) {
        const src = pages[id].thumbnail.source;
        if (!src.endsWith('.svg') && !src.endsWith('.png')) {
          urls.push(src);
        }
      }
    }
    console.log(urls.slice(0, 10));
  });
});
