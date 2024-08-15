window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key=document.querySelector(`.A[data-key="${e.keyCode}"]`); 
    console.log(key)
    if(!audio) return;  
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){
    if(e.propertyName!=='transform')
        this.classList.remove('playing')
}

const keylist=document.querySelectorAll('.A')
keylist.forEach(key => key.addEventListener('transitionend',removeTransition))