const R={
  sns:{e:'☕',n:"Short n' Sweet",cor:'#ffb3d1',t:"Divertida e cheia de charme: você adoça qualquer momento."},
  mbf:{e:'💋',n:"Man's Best Friend",cor:'#d8c0a0',t:"Ousada e brincalhona: você leva a vida com atitude e humor."},
  eics:{e:'✉️',n:"emails i can't send",cor:'#b8c4d6',t:"Sensível e sincera: você sente tudo com profundidade."},
  sing:{e:'🎀',n:"Singular",cor:'#c7d8f5',t:"Sonhadora e delicada: você é doce e cheia de esperança."}
};
const Q=[
  ["Qual é o seu clima?",[["Divertida e charmosa",'sns'],["Ousada e brincalhona",'mbf'],["Sensível e sincera",'eics'],["Sonhadora e delicada",'sing']]],
  ["Qual seria o seu programa ideal?",[["Café com as amigas",'sns'],["Festa e dança",'mbf'],["Escrever no quarto",'eics'],["Passeio ao ar livre",'sing']]],
  ["Qual cor você prefere?",[["Rosa",'sns'],["Vermelho",'mbf'],["Azul-acinzentado",'eics'],["Lilás",'sing']]],
  ["Qual palavra define você?",[["Doçura",'sns'],["Atitude",'mbf'],["Honestidade",'eics'],["Delicadeza",'sing']]],
  ["Qual roupa você escolhe?",[["Laços e brilho",'sns'],["Look de show",'mbf'],["Moletom confortável",'eics'],["Vestido leve",'sing']]]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const caixa=document.getElementById('caixa'),prog=document.getElementById('prog');
let i=0,pts={};
function mostrar(){
  if(i>=Q.length)return fim();
  prog.textContent='Pergunta '+(i+1)+' de '+Q.length;
  caixa.innerHTML='<h2>'+Q[i][0]+'</h2>';
  Q[i][1].forEach(([t,k])=>{
    const b=document.createElement('button');
    b.className='opcao';b.textContent=t;
    b.onclick=()=>{pts[k]=(pts[k]||0)+1;i++;mostrar();};
    caixa.appendChild(b);
  });
}
function fim(){
  const k=Object.keys(pts).sort((a,b)=>pts[b]-pts[a])[0],r=R[k];
  prog.textContent='';
  caixa.innerHTML='<div class="resultado" style="background:'+r.cor+';color:'+txt(r.cor)+'"><div class="grande">'+r.e+'</div><h2>'+r.n+'</h2><p>'+r.t+'</p></div><p><button class="btn" id="refazer">Refazer o quiz</button></p>';
  document.getElementById('refazer').onclick=()=>{i=0;pts={};mostrar();};
}
mostrar();
