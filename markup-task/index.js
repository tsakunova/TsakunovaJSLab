const animateBlocks = document.querySelectorAll('.animate-block');

if(animateBlocks.length>0){
  window.addEventListener('scroll', animateScroll);
  function animateScroll(){
    for(let i = 0; i< animateBlocks.length; i++){
      const animItem = animateBlocks[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 8;

      let animItemPoint = window.innerHeight - animItemHeight / animStart+150;

      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight/animStart;
      }
    
    if((pageYOffset>animItemOffset - animItemPoint) && pageYOffset<(animItemOffset+animItemHeight)){
      animItem.classList.add('active')
    } else {
      if(!animItem.classList.contains('animate-block__no-hide')){
        animItem.classList.remove('active')
      }
      
    }
  }
}

function offset(el){
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left +scrollLeft
  }
}
  animateScroll();
}