(() => {
  const cv=document.createElement('canvas');cv.width=cv.height=1;const ctx=cv.getContext('2d',{willReadFrequently:true});
  function toRGB(str){ctx.clearRect(0,0,1,1);ctx.fillStyle='#000';ctx.fillStyle=str;ctx.fillRect(0,0,1,1);const d=ctx.getImageData(0,0,1,1).data;return {r:d[0],g:d[1],b:d[2],a:d[3]/255};}
  function lum({r,g,b}){const f=x=>{x/=255;return x<=0.03928?x/12.92:Math.pow((x+0.055)/1.055,2.4)};return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b);}
  function isPurple(c){return c.r>30&&c.r<115&&c.g<65&&c.b>55&&c.b<150&&c.b>c.g;}
  function effBg(el){let n=el;while(n){const cs=getComputedStyle(n);const c=toRGB(cs.backgroundColor);if(c.a>0.5)return c;if(cs.backgroundImage&&cs.backgroundImage!=='none')return null;n=n.parentElement;}return {r:255,g:255,b:255,a:1};}
  const out=[];
  document.querySelectorAll('a,button').forEach(el=>{
    const t=(el.textContent||'').trim();if(!t)return;
    const rect=el.getBoundingClientRect();if(rect.width===0||rect.height===0)return;
    const col=toRGB(getComputedStyle(el).color);
    const bg=effBg(el);if(!bg)return;
    if(!isPurple(bg))return;
    const L1=lum(col)+0.05,L2=lum(bg)+0.05;const ratio=Math.max(L1,L2)/Math.min(L1,L2);
    if(ratio<4.5){out.push({t:t.slice(0,35),color:col.r+','+col.g+','+col.b,bg:bg.r+','+bg.g+','+bg.b,ratio:+ratio.toFixed(2)});}
  });
  return JSON.stringify(out);
})()
