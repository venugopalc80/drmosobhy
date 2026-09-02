import {image1,image2,image3} from './heroImages.js';

const apply=()=>{
  document.querySelectorAll('.heroFrame img').forEach(img=>{img.src=image1; img.alt='Dr Mo Sobhy — Academy founder';});
  document.querySelectorAll('.miniFrame img').forEach(img=>{img.src=image2; img.alt='PLAB 2 practice with Dr Mo Sobhy';});
  const avatars=document.querySelectorAll('.avatars img');
  if(avatars[0]) avatars[0].src=image1;
  if(avatars[1]) avatars[1].src=image3;
  const visual=document.querySelector('.heroVisual');
  if(visual && !visual.querySelector('.realPhotoCard')){
    const card=document.createElement('div');
    card.className='realPhotoCard';
    card.innerHTML='<img alt="Dr Mo Sobhy with Academy candidates"><div><b>Academy community</b><span>Learn, practise and grow together.</span></div>';
    card.querySelector('img').src=image3;
    visual.appendChild(card);
  }
};

const style=document.createElement('style');
style.textContent=`.realPhotoCard{position:absolute;right:-28px;top:255px;width:190px;background:#fff;border:5px solid #fff;border-radius:16px;overflow:hidden;box-shadow:0 18px 42px #23352d2c;z-index:4}.realPhotoCard img{width:100%;height:115px;object-fit:cover;display:block}.realPhotoCard div{padding:10px 12px 12px}.realPhotoCard b,.realPhotoCard span{display:block}.realPhotoCard b{font-size:11px;color:#6f8d3a;margin-bottom:4px}.realPhotoCard span{font-size:10px;line-height:1.35;color:#68736f}@media(max-width:900px){.realPhotoCard{right:0;top:245px}}@media(max-width:560px){.realPhotoCard{width:145px;top:220px;right:0}.realPhotoCard img{height:85px}}`;
document.head.appendChild(style);

const observer=new MutationObserver(apply);
observer.observe(document.documentElement,{childList:true,subtree:true});
apply();
