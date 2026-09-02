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
.realPhotoCard{position:absolute;right:-24px;bottom:18px;width:245px;background:#fff;border:5px solid #fff;border-radius:16px;overflow:hidden;box-shadow:0 20px 45px #23352d2c;z-index:5}.realPhotoImage{height:145px;background-size:cover;background-position:center;background-repeat:no-repeat}.realPhotoCopy{padding:12px 14px 14px}.realPhotoCopy b,.realPhotoCopy span{display:block}.realPhotoCopy b{font-size:12px;color:#6f8d3a;margin-bottom:5px}.realPhotoCopy span{font-size:11px;line-height:1.4;color:#68736f}
.heroFrame,.miniFrame{background-repeat:no-repeat;background-size:cover}.heroFrame > img,.miniFrame > img{opacity:0!important}
@media(max-width:900px){.realPhotoCard{right:-2px;bottom:12px;width:215px}.realPhotoImage{height:125px}}
@media(max-width:560px){.realPhotoCard{width:170px;bottom:8px}.realPhotoImage{height:95px}.realPhotoCopy{padding:9px 10px}.realPhotoCopy b{font-size:10px}.realPhotoCopy span{font-size:9px}}
`;
document.head.appendChild(style);

const observer=new MutationObserver(apply);
observer.observe(document.documentElement,{childList:true,subtree:true});
apply();
