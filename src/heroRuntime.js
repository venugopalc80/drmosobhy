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
    img.style.imageRendering='auto';
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
.heroVisual{overflow:visible!important;height:600px!important;display:block!important;position:relative!important;padding-right:315px!important}
.heroFrame{position:absolute!important;left:0!important;top:30px!important;width:390px!important;height:560px!important;margin:0!important;border-radius:20px!important;overflow:hidden!important;background:#d8d4c9!important}
.heroFrame>img{opacity:1!important;display:block!important;visibility:visible!important;width:100%!important;height:100%!important;object-fit:cover!important;image-rendering:auto!important}
.referenceCard{position:absolute!important;width:270px!important;height:165px!important;right:0!important;background:#fff!important;border:5px solid #fff!important;border-radius:16px!important;overflow:hidden!important;box-shadow:0 16px 40px rgba(35,53,45,.14)!important;z-index:6!important}
.referenceCardOne{top:58px!important;bottom:auto!important}.referenceCardTwo{top:242px!important}.referenceCardThree{top:426px!important}
.referenceCard .refCardImage{height:108px!important;background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important}.referenceCard .refCardCopy{height:57px!important;padding:9px 12px!important;background:#fff!important}
.referenceCard .refCardCopy strong{display:block!important;font-size:12px!important;color:#17241f!important;margin-bottom:3px!important;font-weight:700!important}.referenceCard .refCardCopy span{display:block!important;font-size:10px!important;line-height:1.35!important;color:#68736f!important}
.referenceCardOne .miniCaption{position:absolute!important;left:0!important;right:0!important;bottom:0!important;height:57px!important;padding:9px 12px!important;background:#fff!important;color:#14221f!important}.referenceCardOne .miniCaption b{display:block!important;color:#17241f!important;font-size:12px!important;margin-bottom:3px!important}.referenceCardOne .miniCaption span{display:block!important;color:#68736f!important;font-size:10px!important;line-height:1.35!important}
.realPhotoCard,.cardTop,.cardBottom{display:none!important}
@media(max-width:1250px){.heroVisual{padding-right:250px!important}.heroFrame{width:350px!important;height:520px!important}.referenceCard{width:220px!important;height:150px!important}.referenceCard .refCardImage{height:96px!important}.referenceCard .refCardCopy{height:54px!important;padding:8px 10px!important}.referenceCardOne{top:65px!important}.referenceCardTwo{top:230px!important}.referenceCardThree{top:395px!important}}
@media(max-width:900px){.heroVisual{height:510px!important;padding-right:185px!important}.heroFrame{width:300px!important;height:480px!important;left:0!important;top:10px!important}.referenceCard{width:190px!important;height:140px!important}.referenceCard .refCardImage{height:88px!important}.referenceCard .refCardCopy{height:47px!important;padding:7px 9px!important}.referenceCardOne{right:0!important;top:20px!important}.referenceCardTwo{right:0!important;top:170px!important}.referenceCardThree{right:0!important;top:320px!important}}
@media(max-width:560px){.heroVisual{height:390px!important;padding-right:96px!important}.heroFrame{width:220px!important;height:365px!important}.referenceCard{width:128px!important;height:112px!important;border-width:3px!important}.referenceCard .refCardImage{height:68px!important}.referenceCard .refCardCopy{height:41px!important;padding:5px 6px!important}.referenceCard .refCardCopy strong{font-size:9px!important}.referenceCard .refCardCopy span{font-size:8px!important}.referenceCardOne{top:12px!important}.referenceCardTwo{top:130px!important}.referenceCardThree{top:248px!important}}
`;
document.head.appendChild(style);

const run=()=>{apply();setTimeout(apply,100);setTimeout(apply,500);setTimeout(apply,1500);};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
window.addEventListener('load',apply,{once:true});