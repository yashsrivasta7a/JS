    
function RandomColor(){
    const hex="123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  function bgcolorchange(){ 
    document.body.style.backgroundColor=RandomColor();}
      let IntervalID=null;
      const start=() => {
      if(!IntervalID){
      IntervalID=setInterval(bgcolorchange,500);
      }};
      
  const stop=()=>{
    clearInterval(IntervalID);
    IntervalID=null;
  };
  
  document.querySelector('#start').addEventListener('click',start);
  document.querySelector('#stop').addEventListener("click",stop);