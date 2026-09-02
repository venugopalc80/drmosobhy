const photos={image1:'/hero1.webp',image2:'/hero2.webp',image3:'/hero3.webp'};

const setImage=(el,src,position='center')=>{
  if(!el)return;
  const img=el.querySelector(':scope > img');
  if(img){
    img.src=src;
    img.removeAttribute('srcset');
    img.alt='';
    img.style.opacity='1';
    img.style.display='block';
    img.style.visibility='visible';
    img.style.objectFit='cover';
    img.style.objectPosition=position;
  }
  el.style.backgroundImage='none';
};

const makeCard=(className,src,title,text)=>{
  const card=document.createElement('div');
  card.className=className;
  card.innerHTML=`<div class="refCardImage"></div><div class="refCardCopy"><strong>${title}</strong><span>${text}</span></div>`;
  card.querySelector('.refCardImage').style.backgroundImage=`url("${src}")`;
  return card;
};

const apply=()=>{
  const visual=document.querySelector('.heroVisual');
  if(!visual)return;

  const frame=visual.querySelector('.heroFrame');
  setImage(frame,photos.image1,'center top');
  frame?.querySelector('.imageShade')?.remove();
  frame?.querySelector('.heroPlay')?.remove();
  frame?.querySelector('.heroCaption')?.remove();

  const mini=visual.querySelector('.miniFrame');
  if(mini){
    setImage(mini,photos.image2,'center center');
    mini.classList.add('referenceCard','referenceCardOne');
    const caption=mini.querySelector('.miniCaption');
    if(caption){
      caption.innerHTML='<b>PLAB 2 focused</b><span>Clinical, practical & communication preparation</span>';
      caption.style.display='block';
    }
    mini.querySelector('.miniShade')?.remove();
    mini.querySelector('a')?.remove();
  }

  visual.querySelector('.cardTop')?.remove();
  visual.querySelector('.cardBottom')?.remove();
  visual.querySelector('.referenceCardTwo')?.remove();
  visual.querySelector('.referenceCardThree')?.remove();
  visual.appendChild(makeCard('referenceCard referenceCardTwo',photos.image2,'Practise with confidence.','Realistic stations and expert feedback.'));
  visual.appendChild(makeCard('referenceCard referenceCardThree',photos.image3,'Academy community','Learn, practise and grow together.'));

  document.querySelectorAll('.avatars img').forEach((img,i)=>{
    const src=i===0?photos.image1:i===1?photos.image2:photos.image3;
    img.src=src;
    img.removeAttribute('srcset');
    img.alt='';
    img.style.opacity='1';
    img.style.display='block';
    img.style.visibility='visible';
    img.style.objectFit='cover';
  });
};

const style=document.createElement('style');
style.textContent=`
.heroVisual{overflow:visible!important;height:600px!important;display:block!important;position:relative!important;padding-right:330px!important}
.heroFrame{position:absolute!important;left:0!important;top:30px!important;width:500px!important;height:590px!important;margin:0!important;border-radius:20px!important;overflow:hidden!important;background:#d8d4c9!important}
.heroFrame>img{opacity:1!important;display:block!important;visibility:visible!important;width:100%!important;height:100%!important;object-fit:cover!important}
.referenceCard{position:absolute!important;width:285px!important;height:170px!important;right:0!important;background:#fff!important;border:5px solid #fff!important;border-radius:16px!important;overflow:hidden!important;box-shadow:0 16px 40px rgba(35,53,45,.14)!important;z-index:6!important}
.referenceCardOne{top:58px!important;bottom:auto!important}.referenceCardTwo{top:247px!important}.referenceCardThree{top:436px!important}
.referenceCard .refCardImage{height:112px!important;background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important}.referenceCard .refCardCopy{height:58px!important;padding:9px 12px!important;background:#fff!important}
.referenceCard .refCardCopy strong{display:block!important;font-size:12px!important;color:#17241f!important;margin-bottom:3px!important;font-weight:700!important}.referenceCard .refCardCopy span{display:block!important;font-size:10px!important;line-height:1.35!important;color:#68736f!important}
.referenceCardOne .miniCaption{position:absolute!important;left:0!important;right:0!important;bottom:0!important;height:58px!important;padding:9px 12px!important;background:#fff!important;color:#14221f!important}.referenceCardOne .miniCaption b{display:block!important;color:#17241f!important;font-size:12px!important;margin-bottom:3px!important}.referenceCardOne .miniCaption span{display:block!important;color:#68736f!important;font-size:10px!important;line-height:1.35!important}
.realPhotoCard,.cardTop,.cardBottom{display:none!important}
@media(max-width:1250px){.heroVisual{padding-right:255px!important}.heroFrame{width:430px!important;height:560px!important}.referenceCard{width:235px!important;height:155px!important}.referenceCard .refCardImage{height:100px!important}.referenceCard .refCardCopy{height:55px!important;padding:8px 10px!important}.referenceCardOne{top:65px!important}.referenceCardTwo{top:235px!important}.referenceCardThree{top:405px!important}}
@media(max-width:900px){.heroVisual{height:530px!important;padding-right:190px!important}.heroFrame{width:calc(100% - 160px)!important;height:500px!important;left:0!important;top:10px!important}.referenceCard{width:200px!important;height:145px!important}.referenceCard .refCardImage{height:91px!important}.referenceCard .refCardCopy{height:49px!important;padding:7px 9px!important}.referenceCardOne{right:0!important;top:20px!important}.referenceCardTwo{right:0!important;top:178px!important}.referenceCardThree{right:0!important;top:336px!important}}
@media(max-width:560px){.heroVisual{height:430px!important;padding-right:105px!important}.heroFrame{width:calc(100% - 88px)!important;height:400px!important}.referenceCard{width:140px!important;height:122px!important;border-width:3px!important}.referenceCard .refCardImage{height:74px!important}.referenceCard .refCardCopy{height:45px!important;padding:6px 7px!important}.referenceCard .refCardCopy strong{font-size:9px!important}.referenceCard .refCardCopy span{font-size:8px!important}.referenceCardOne{top:15px!important}.referenceCardTwo{top:145px!important}.referenceCardThree{top:275px!important}}
`;
document.head.appendChild(style);

const run=()=>{apply();setTimeout(apply,100);setTimeout(apply,500);setTimeout(apply,1500);};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
window.addEventListener('load',apply,{once:true});