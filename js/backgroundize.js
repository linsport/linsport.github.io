document.addEventListener('DOMContentLoaded', function() {
  const webBg = document.querySelector('#web_bg');
  const banner = document.querySelector('#banner');
  const bannerMask = document.querySelector('#banner .mask');
  
  if (webBg && banner && bannerMask) {
    // 直接指定图片路径（根据你的实际文件结构调整）
    webBg.setAttribute('style', 
      `background-image: url('img/theme picture/1.png');
       position: fixed;
       width: 100%;
       height: 100%;
       z-index: -1;
       background-size: cover;
       top: 0;
       left: 0;`);
    
    // 清除原banner背景
    banner.setAttribute('style', 'background-image: none !important;');
    
    // 设置蒙版透明
    bannerMask.setAttribute('style', 'background-color: transparent !important;');
  }
});