const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const parar = document.querySelector('#zerar');
const tempo = document.querySelector('.spnCronometro');

iniciar.addEventListener('click', iniciarContagem);
pausar.addEventListener('click', pausarContagem);
parar.addEventListener('click', resetarContagem);

// contador
let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;
let timer;

function iniciarContagem(){
  timer = setInterval(()=>{
    cronometrar();    
  }, 10);
  // desabilita o botão iniciar
  iniciar.setAttribute('disabled', '');
}

function pausarContagem(){
  clearInterval(timer);
  // reativa o botão iniciar
  iniciar.removeAttribute('disabled');
}

function resetarContagem(){  
  // zera o contador
  hora = 0;
  minuto = 0;
  segundo = 0;  
  milisegundo = 0;
  document.getElementById('spnCronometro').innerText = '00:00:00:000';
}

function cronometrar() {
  milisegundo++;  
  //segundo++; 
  if(milisegundo == 100){
    milisegundo = 0;
    segundo++;
  
    if (segundo == 60) { 
      segundo = 0; 
      minuto++;
    }
      
      if (minuto == 60) { 
        minuto = 0;
        hora++;
      }
    }
    const format = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo) + ':' + (milisegundo < 100 ? '0' + milisegundo : milisegundo);    
    document.getElementById('spnCronometro').innerText = format;
    return format;
}