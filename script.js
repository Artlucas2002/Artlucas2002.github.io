const $=s=>document.querySelector(s); const dlg=$('#lightbox'), big=dlg.querySelector('img'), cap=dlg.querySelector('figcaption'); let current=[],idx=0;
function card(a,isPainting=false){const el=document.createElement('article');el.className='card';el.innerHTML=`<img loading="lazy" src="${a.src}" alt="${isPainting?a.title:'Schets van Lucas Maes'}">${isPainting?`<div class="meta"><strong>${a.title}</strong><small>${a.medium} · ${a.size}</small></div>`:''}`;el.onclick=()=>open(current.indexOf(a));return el}
function render(){current=paintings;paintings.forEach(a=>$('#paintings').append(card(a,true))); sketches.forEach(a=>$('#sketches').append(cardSketch(a)))}
function cardSketch(a){const el=card(a,false);el.onclick=()=>{current=sketches;open(sketches.indexOf(a))};return el}
function open(i){idx=i;const a=current[idx];big.src=a.src;cap.textContent=a.medium?`${a.title} — ${a.medium} — ${a.size}`:'';dlg.showModal()}
function move(d){idx=(idx+d+current.length)%current.length;open(idx)}
dlg.querySelector('.close').onclick=()=>dlg.close();dlg.querySelector('.prev').onclick=()=>move(-1);dlg.querySelector('.next').onclick=()=>move(1);dlg.onclick=e=>{if(e.target===dlg)dlg.close()};document.onkeydown=e=>{if(!dlg.open)return;if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)};$('.menu').onclick=()=>$('.top nav').classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=e=>{
  $('.top nav').classList.remove('open');
  const target=document.querySelector(a.getAttribute('href'));
  if(!target)return;
  e.preventDefault();
  const go=()=>target.scrollIntoView({behavior:'smooth',block:'start'});
  go();
  [150,500,1000].forEach(ms=>setTimeout(go,ms));
  history.replaceState(null,'',a.getAttribute('href'));
});$('#year').textContent=new Date().getFullYear();render();

function renderBlog(){
  const host=document.querySelector('#blogPosts');
  if(!host || typeof blogPosts==='undefined') return;
  blogPosts.forEach(post=>{
    const article=document.createElement('article');
    article.className='blogPost';
    article.innerHTML=`${post.image?`<img loading="lazy" src="${post.image}" alt="${post.title}">`:''}<div class="blogBody"><time>${post.date}</time><h3>${post.title}</h3><p>${post.text}</p></div>`;
    host.append(article);
  });
}
renderBlog();

function renderContact(){
  const host=document.querySelector('#contactDetails');
  if(!host || typeof contact==='undefined') return;
  const rows=[];
  if(contact.email) rows.push(`<a href="mailto:${contact.email}">${contact.email}</a>`);
  if(contact.phone) rows.push(`<a href="tel:${contact.phone.replace(/\s+/g,'')}">${contact.phone}</a>`);
  if(contact.instagram) rows.push(`<a href="${contact.instagram}" target="_blank" rel="noopener">Instagram</a>`);
  if(contact.facebook) rows.push(`<a href="${contact.facebook}" target="_blank" rel="noopener">Facebook</a>`);
  host.innerHTML=rows.length ? rows.map(x=>`<div>${x}</div>`).join('') : '<p>Contactgegevens worden binnenkort toegevoegd.</p>';
}
renderContact();
