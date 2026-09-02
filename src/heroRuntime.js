import {image1,image2,image3} from './heroImages.js';

const paint=(el,url,position='center')=>{
  if(!el)return;
  el.style.backgroundImage=`url("${url}")`;
  el.style.backgroundSize='cover';
  el.style.backgroundPosition=position;
  el.style.backgroundRepeat='no-repeat';
  const img=el.querySelector(':scope > img');
  if(img){img.style.opacity='0';img.style.pointerEvents='none';}
};

const apply=()=>{
  document.querySelectorAll('.heroFrame').forEach(el=>paint(el,image1,'center top'));
  document.querySelectorAll('.miniFrame').forEach(el=>paint(el,image2,'center center'));
  document.querySelectorAll('.avatars img').forEach((img,i)=>{img.src=i===0?image1:image3;img.style.objectFit='cover';});
  const visual=document.querySelector('.heroVisual');
  if(visual && !visual.querySelector('.realPhotoCard')){
    const card=document.createElement('div');
    card.className='realPhotoCard';
    card.innerHTML='<div class="realPhotoImage"></div><div class="realPhotoCopy"><b>Academy community</b><span>Learn, practise and grow together.</span></div>';
    card.querySelector('.realPhotoImage').style.backgroundImage=`url("${image3}")`;
    visual.appendChild(card);
  }
};

const style=document.createElement('style');
style.textContent=`
.heroVisual{overflow:visible}
.heroFrame{width:500px;height:540px;border-radius:22px;margin-right:70px}
.heroFrame img{object-position:center top}
.miniFrame{width:285px;height:215px;right:-105px;top:48px;bottom:auto;border-radius:16px;background-color:#fff;z-index:6}
.miniShade{display:none}
.miniCaption{left:0;right:0;bottom:0;background:#fff;color:#14221f;padding:12px 15px;height:72px}
.miniCaption b{color:#6f8d3a;font-size:12px}.miniCaption span{color:#68736f;font-size:10px}
.miniFrame>a{top:42%;width:48px;height:48px}
.cardTop{top:8px;right:-105px;max-width:285px;padding:15px 18px;border-radius:14px;z-index:7}
.cardBottom{display:none}
.realPhotoCard{position:absolute;right:-105px;bottom:20px;width:285px;background:#fff;border:5px solid #fff;border-radius:16px;overflow:hidden;box-shadow:0 20px 45px #23352d2c;z-index:6}.realPhotoImage{height:145px;background-size:cover;background-position:center;background-repeat:no-repeat}.realPhotoCopy{padding:12px 15px 15px}.realPhotoCopy b,.realPhotoCopy span{display:block}.realPhotoCopy b{font-size:12px;color:#6f8d3a;margin-bottom:5px}.realPhotoCopy span{font-size:11px;line-height:1.4;color:#68736f}
.heroFrame > img,.miniFrame > img{opacity:0!important}
@media(max-width:1100px){.heroFrame{margin-right:35px}.miniFrame,.cardTop,.realPhotoCard{right:-40px}}
@media(max-width:900px){.heroFrame{width:min(100%,600px);height:470px;margin-right:0}.miniFrame{right:-4px;top:auto;bottom:2px;width:220px;height:180px}.cardTop{right:0;top:20px}.realPhotoCard{right:0;bottom:12px;width:220px}.realPhotoImage{height:120px}}
@media(max-width:560px){.heroFrame{height:350px}.miniFrame{width:155px;height:145px}.miniCaption{height:58px;padding:8px 10px}.miniCaption b{font-size:9px}.miniCaption span{font-size:8px}.cardTop{display:none}.realPhotoCard{width:165px;bottom:8px}.realPhotoImage{height:85px}.realPhotoCopy{padding:8px 10px}.realPhotoCopy b{font-size:10px}.realPhotoCopy span{font-size:9px}}
`;
document.head.appendChild(style);

const observer=new MutationObserver(apply);
observer.observe(document.documentElement,{childList:true,subtree:true});
apply();
