window.dataLayer=window.dataLayer||[];
function trackEvent(eventName,params={}){window.dataLayer.push({event:eventName,...params});window.dispatchEvent(new CustomEvent('site:track',{detail:{event:eventName,...params}}));if(typeof gtag==='function')gtag('event',eventName,params)}
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')})}
document.querySelectorAll('.faq-q').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.faq-item');const open=item.classList.toggle('open');button.setAttribute('aria-expanded',open?'true':'false')}));
document.addEventListener('click',event=>{const link=event.target.closest('a');if(!link)return;const service=document.body.dataset.service||'site_institucional';if(link.href.includes('wa.me/')){if(!link.href.includes('?text=')){const message=`Olá! Vim pela página de ${service} no site do Dr. Renan Girotto e gostaria de mais informações.`;link.href=link.href+'?text='+encodeURIComponent(message)}trackEvent('whatsapp_click',{service,link_text:link.textContent.trim(),page_path:location.pathname})}else if(link.dataset.track){trackEvent(link.dataset.track,{service,link_text:link.textContent.trim(),page_path:location.pathname})}});
const waBtn=document.getElementById('waBtn');const waMenu=document.getElementById('waMenu');
if(waBtn&&waMenu){
  waBtn.addEventListener('click',()=>{const open=waMenu.classList.toggle('open');waBtn.setAttribute('aria-expanded',open?'true':'false')});
  document.addEventListener('click',e=>{if(!e.target.closest('.wa-float')){waMenu.classList.remove('open');waBtn.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){waMenu.classList.remove('open');waBtn.setAttribute('aria-expanded','false')}});
}
