console.log('fixFirefox.js loaded');

const fs = require('fs')

const manifest = require('./dist/manifest.json')
// web_accessible_resources 已在 manifest.json 中配置，这里只做兜底补全
if (!manifest.web_accessible_resources) {
  manifest.web_accessible_resources = [{
    resources: ['index.html'],
    matches: ['https://www.bilibili.com/*'],
  }]
}
// 写回文件
fs.writeFileSync('./dist/manifest.json', JSON.stringify(manifest, null, 2))

console.log('fixFirefox.js done');
