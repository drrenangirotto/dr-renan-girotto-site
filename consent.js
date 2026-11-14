/* Aviso de cookies (LGPD) + Google Consent Mode. O padrão é "negado" até o visitante aceitar. */
(function(){
  var KEY='rg_consent';
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  if(get())return;
  var css='#rg-cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:10000;max-width:560px;margin:0 auto;background:#071A33;color:#fff;border-radius:14px;padding:16px 18px;box-shadow:0 10px 30px rgba(0,0,0,.25);font:500 .88rem/1.45 "Plus Jakarta Sans",system-ui,sans-serif}'+
    '#rg-cc p{margin:0 0 12px;color:#E6ECF2}#rg-cc a{color:#fff;text-decoration:underline}'+
    '#rg-cc .rg-cc-b{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}'+
    '#rg-cc button{font:700 .85rem "Plus Jakarta Sans",system-ui,sans-serif;border-radius:999px;padding:9px 18px;cursor:pointer;border:1px solid rgba(255,255,255,.5)}'+
    '#rg-cc .rg-ok{background:#fff;color:#071A33;border-color:#fff}#rg-cc .rg-no{background:transparent;color:#fff}'+
    '@media(max-width:600px){#rg-cc{bottom:84px}}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var d=document.createElement('div');d.id='rg-cc';d.setAttribute('role','dialog');d.setAttribute('aria-label','Aviso de cookies');
  d.innerHTML='<p>Usamos cookies de medição (Google Analytics) para entender como o site é usado e melhorar o conteúdo. Você pode aceitar ou recusar. Saiba mais na <a href="/privacidade/">Política de Privacidade</a>.</p><div class="rg-cc-b"><button type="button" class="rg-no">Recusar</button><button type="button" class="rg-ok">Aceitar</button></div>';
  function close(v){set(v);if(v==='granted'&&typeof gtag==='function'){gtag('consent','update',{analytics_storage:'granted'})}d.remove()}
  d.querySelector('.rg-ok').addEventListener('click',function(){close('granted')});
  d.querySelector('.rg-no').addEventListener('click',function(){close('denied')});
  function show(){document.body.appendChild(d)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',show);else show();
})();
