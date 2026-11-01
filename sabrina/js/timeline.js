const ALBUNS=[
  [2015,'🌟',"Eyes Wide Open",'#f7c6d9',"O primeiro álbum de estúdio dela."],
  [2016,'🦋',"Evolution",'#f9d7a1',"O segundo álbum, com a faixa \"Thumbs\"."],
  [2018,'🎀',"Singular: Act I",'#c7d8f5',"Tem \"Sue Me\" e \"Why\"."],
  [2019,'💫',"Singular: Act II",'#e3c6f0',"A continuação do Act I."],
  [2022,'✉️',"emails i can't send",'#b8c4d6',"O álbum mais pessoal dela, como se fossem e-mails não enviados."],
  [2024,'☕',"Short n' Sweet",'#ffb3d1',"Tem \"Espresso\" e \"Please Please Please\"."],
  [2025,'💋',"Man's Best Friend",'#d8c0a0',"Tem \"Manchild\"."]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const lista=document.getElementById('lista');
ALBUNS.forEach(([ano,e,nome,cor,c])=>{
  const b=document.createElement('button');
  b.className='album';b.setAttribute('aria-expanded','false');
  b.style.setProperty('--c',cor);b.style.setProperty('--t',txt(cor));
  b.innerHTML=e+' <b>'+nome+'</b> ('+ano+')<small>'+c+'</small>';
  b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='false');
  lista.appendChild(b);
});
