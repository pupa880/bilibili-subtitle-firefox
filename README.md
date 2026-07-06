## ⚠️ 项目说明

> **本项目完全由AI完成，没有充分测试过，只是能用，可能会有bug，请谨慎使用。**

### 原项目地址

本项目基于 [IndieKKY/bilibili-subtitle](https://github.com/IndieKKY/bilibili-subtitle) 修改而来，感谢原作者的开源贡献。

### 版本信息

- **基于版本**: v1.10.6（最后一个支持 Firefox 的版本）
- **原版本修改日期**: 2025-03-23

### 修复内容

修复了字幕和总结不对应当前视频的问题：

- **问题原因**: B 站 API 更新，字幕获取接口从 `/x/player/v2` 改为 `/x/player/wbi/v2`，导致旧版本无法正确获取当前视频的字幕
- **修复方案**: 将 `src/chrome/content-script.cjs` 中的 3 处 API 调用从 `/x/player/v2` 更新为 `/x/player/wbi/v2`

### Firefox 安装方法

[Firefox商店](https://addons.mozilla.org/en-US/firefox/addon/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E5%AD%97%E5%B9%95%E5%88%97%E8%A1%A8-update/)
