const lampEl = document.getElementById('lamp');
const toggleLampBtnEL = document.getElementById('toggle-lamp-btn');

toggleLampBtnEL.addEventListener('click',() => {

  if(lampEl.src.includes('img/white_lamp.png')){
    lampEl.src = 'img/yellow_lamp.png';
    toggleLampBtnEL.innerHTML = 'Spegni'
  }else{
    lampEl.src = 'img/white_lamp.png';
    toggleLampBtnEL.innerHTML = 'Accendi'
  }
})




