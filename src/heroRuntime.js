import {image1,image2,image3} from './heroImages.js';

const setBg=(el,url,position='center')=>{
  if(!el)return;
  el.style.backgroundImage=`url("${url}")`;
  el.style.backgroundSize='cover';
  el.style.backgroundPosition=position;
  el.style.backgroundRepeat='no-repeat';
  const img=el.querySelector(':scope > img');
  if(img){img.style.opacity='0';img.style.pointerEvents='none';}
};

const makeCard=(className,image,label,title,text)=>{
  const card=document.createElement('div');
  card.className=className;
  card.innerHTML=`<div class="refCardImage"></div><div class="refCardCopy"><b>${label}</b><strong>${title}</strong><span>${text}</span></div>`;
  const photo=card.querySelector('.refCardImage');
  photo.style.backgroundImage=`url("${image}")`;
  return card;
};

const apply=()=>{
  const visual=document.querySelector('.heroVisual');
  if(!visual)return;

  const frame=visual.querySelector('.heroFrame');
  setBg(frame,image1,'center top');

  // The reference hero uses three compact image-led cards stacked beside the founder image.
  const mini=visual.querySelector('.miniFrame');
  if(mini){
    setBg(mini,image2,'center center');
    mini.classList.add('referenceCard','referenceCardOne');
    const oldCaption=mini.querySelector('.miniCaption');
    if(oldCaption)oldCaption.innerHTML='<b>PLAB 2 focused</b><span>Clinical, practical & communication preparation</span>';
    const shade=mini.querySelector('.miniShade');
    if(shade)shade.style.display='none';
    const play=mini.querySelector('a');
    if(play)play.style.display='none';
  }

  const oldTop=visual.querySelector('.cardTop');
  if(oldTop)oldTop.style.display='none';
  const oldBottom=visual.querySelector('.cardBottom');
  if(oldBottom)oldBottom.style.display='none';

  if(!visual.querySelector('.referenceCardTwo')){
    const card=makeCard('referenceCard referenceCardTwo',image2,'','Practise with confidence.','Realistic stations and expert feedback.');
    visual.appendChild(card);
  }
  if(!visual.querySelector('.realPhotoCard')){
    const card=makeCard('realPhotoCard referenceCard referenceCardThree',image3,'','Academy community','Learn, practise and grow together.');
    visual.appendChild(card);
  }else{
    const card=visual.querySelector('.realPhotoCard');
    card.classList.add('referenceCard','referenceCardThree');
    const copy=card.querySelector('.realPhotoCopy');
    if(copy)copy.innerHTML='<b>Academy community</b><span>Learn, practise and grow together.</span>';
    const photo=card.querySelector('.realPhotoImage');
    if(photo)photo.style.backgroundImage=`url("${image3}")`;
  }

  document.querySelectorAll('.avatars img').forEach((img,i)=>{
    img.src=i===0?image1:(i===1?image2:image3);
    img.style.objectFit='cover';
  });
};

const style=document.createElement('style');
style.textContent=`
/* Supplied-photo reference hero */
.hero{padding-bottom:42px}
.hero .wrap{width:min(1490px,calc(100% - 100px))}
.heroGrid{grid-template-columns:minmax(500px,.92fr) minmax(650px,1.08fr);gap:30px;min-height:650px}
.heroCopy{padding:52px 0 32px}
.hero h1{max-width:650px;font-size:clamp(58px,5.25vw,78px);line-height:.96}
.heroVisual{height:600px;position:relative;overflow:visible;display:block;padding-right:330px}
.heroFrame{position:absolute;left:0;top:30px;width:500px;height:590px;margin:0;border-radius:20px;overflow:hidden;background:#d8d4c9;box-shadow:0 28px 70px #23352d25;border:1px solid rgba(255,255,255,.9)}
.heroFrame img{object-position:center top}
.imageShade{background:linear-gradient(180deg,rgba(9,24,20,.02) 50%,rgba(9,24,20,.9) 100%)}
.heroPlay{width:72px;height:72px;top:48%;box-shadow:0 14px 30px #14221f2d}
.heroCaption{left:28px;right:28px;bottom:24px}
.heroCaption strong{font-size:25px}
.heroCaption small{font-size:12px}
.referenceCard{position:absolute;width:285px;height:170px;right:0;background:#fff;border:5px solid #fff;border-radius:16px;overflow:hidden;box-shadow:0 16px 40px #23352d22;z-index:6}
.referenceCardOne{top:58px;bottom:auto}
.referenceCardTwo{top:247px}
.referenceCardThree{top:436px;bottom:auto}
.referenceCard .refCardImage{height:112px;background-size:cover;background-position:center;background-repeat:no-repeat}
.referenceCard .refCardCopy{height:58px;padding:9px 12px;background:#fff}
.referenceCard .refCardCopy b{display:none}
.referenceCard .refCardCopy strong{display:block;font-size:12px;color:#17241f;margin-bottom:3px;font-weight:700}
.referenceCard .refCardCopy span{display:block;font-size:10px;line-height:1.35;color:#68736f}
.referenceCardOne .miniCaption{position:absolute;left:0;right:0;bottom:0;height:58px;padding:9px 12px;background:#fff;color:#14221f}
.referenceCardOne .miniCaption b{display:block;color:#14221f;font-size:12px;margin-bottom:3px}
.referenceCardOne .miniCaption span{display:block;color:#68736f;font-size:10px;line-height:1.35}
.referenceCardOne img{opacity:0!important}
.realPhotoCard{position:absolute;right:0;top:436px;bottom:auto;width:285px;height:170px;background:#fff;border:5px solid #fff;border-radius:16px;overflow:hidden;box-shadow:0 16px 40px #23352d22;z-index:6}
.realPhotoImage{height:112px;background-size:cover;background-position:center;background-repeat:no-repeat}
.realPhotoCopy{height:58px;padding:9px 12px;background:#fff}
.realPhotoCopy b{display:block;font-size:12px;color:#17241f;margin-bottom:3px}
.realPhotoCopy span{display:block;font-size:10px;line-height:1.35;color:#68736f}
.realPhotoCard.referenceCardThree{top:436px}
.heroBenefits{width:min(1490px,calc(100% - 100px));margin-top:0}
@media(max-width:1250px){
 .hero .wrap,.heroBenefits{width:min(1180px,calc(100% - 60px))}
 .heroGrid{grid-template-columns:1fr 1fr;gap:10px}
 .heroVisual{padding-right:255px}
 .heroFrame{width:430px;height:560px}
 .referenceCard{width:235px;height:155px}
 .referenceCard .refCardImage,.realPhotoImage{height:100px}
 .referenceCard .refCardCopy,.realPhotoCopy{height:55px;padding:8px 10px}
 .referenceCardOne{top:65px}.referenceCardTwo{top:235px}.referenceCardThree,.realPhotoCard.referenceCardThree{top:405px}
}
@media(max-width:900px){
 .hero .wrap,.heroBenefits{width:calc(100% - 40px)}
 .heroGrid{grid-template-columns:1fr;min-height:auto}
 .heroCopy{padding-bottom:10px}
 .heroVisual{height:530px;padding-right:190px}
 .heroFrame{width:calc(100% - 160px);height:500px;left:0;top:10px}
 .referenceCard{width:200px;height:145px}
 .referenceCard .refCardImage,.realPhotoImage{height:91px}
 .referenceCard .refCardCopy,.realPhotoCopy{height:49px;padding:7px 9px}
 .referenceCardOne{right:0;top:20px}.referenceCardTwo{right:0;top:178px}.referenceCardThree,.realPhotoCard.referenceCardThree{right:0;top:336px}
 .heroBenefits{grid-template-columns:1fr 1fr}
 .heroBenefits>div:nth-child(3){border-left:0}
}
@media(max-width:560px){
 .hero .wrap,.heroBenefits{width:calc(100% - 28px)}
 .hero h1{font-size:48px}
 .heroVisual{height:430px;padding-right:105px}
 .heroFrame{width:calc(100% - 88px);height:400px}
 .referenceCard{width:140px;height:122px;border-width:3px;border-radius:12px}
 .referenceCard .refCardImage,.realPhotoImage{height:74px}
 .referenceCard .refCardCopy,.realPhotoCopy{height:45px;padding:6px 7px}
 .referenceCard .refCardCopy strong,.referenceCardOne .miniCaption b,.realPhotoCopy b{font-size:9px}
 .referenceCard .refCardCopy span,.referenceCardOne .miniCaption span,.realPhotoCopy span{font-size:8px}
 .referenceCardOne{top:15px}.referenceCardTwo{top:145px}.referenceCardThree,.realPhotoCard.referenceCardThree{top:275px}
 .heroBenefits{grid-template-columns:1fr}
 .heroBenefits>div{border-left:0!important;border-top:1px solid #dfe2d8;padding:14px}
 .heroBenefits>div:first-child{border-top:0}
}
`;
document.head.appendChild(style);

const observer=new MutationObserver(apply);
observer.observe(document.documentElement,{childList:true,subtree:true});
apply();
