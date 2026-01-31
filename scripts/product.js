document.addEventListener('DOMContentLoaded',()=>{
  const thumbs = document.querySelectorAll('.thumb');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');

  // smooth scroll for header nav anchors
  document.querySelectorAll('header .nav a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // simple hero carousel (rotates a few Huawei hero assets)
  const heroImg = document.querySelector('.hero-media .laptop-shell img');
  const heroSlides = [
    'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-ultra-premium-edition/images/hero/huawei-matebook-x-pro-kv-2x.webp',
    'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-ultra-premium-edition/images/hero/huawei-matebook-x-pro-6-things-to-love-01-2x.webp',
    'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-ultra-premium-edition/images/hero/huawei-matebook-x-pro-6-things-to-love-03-2x.webp'
  ];
  let heroIndex = 0;
  if(heroImg){
    setInterval(()=>{
      heroIndex = (heroIndex+1) % heroSlides.length;
      heroImg.src = heroSlides[heroIndex];
    },6000);
  }

  thumbs.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const src = btn.getAttribute('data-src');
      lbImage.src = src;
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    });
  });

  const close = ()=>{
    lightbox.setAttribute('aria-hidden','true');
    lbImage.src = '';
    document.body.style.overflow = '';
  };

  lbClose.addEventListener('click',close);
  lightbox.addEventListener('click',(e)=>{ if(e.target===lightbox) close(); });
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') close(); });
});