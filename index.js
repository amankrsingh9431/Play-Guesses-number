let randomnumber=Math.floor((Math.random()*100)+1);
 const guessfield=document.querySelector(".guessfield");
 const submitguess=document.querySelector(".submitguess");
 const loworhi=document.querySelector(".loworhi");
 const guesses=document.querySelector(".guesses");
 const lastresult=document.querySelector(".lastresult");
 const resultparas=document.querySelector(".resultparas");
 const p=document.createElement('p');
 let stack=[];
 let remaining=1;
 let playgame=true;
 if(playgame){
    submitguess.addEventListener('click',function(e){
        e.preventDefault()
        let text=parseInt( guessfield.value)
        validategame(text)
    })
 }
 function validategame(text){
    if(isNaN(text)){
        alert("please give number")
    }
    else if(text<1){
        alert("please enetr number more than 1")
    }
    else if(text>100){
        alert("please enter number less than 100")
    }
    else{
        stack.push(text);
        if(remaining===11){
            loworhi.innerHTML=`sorry next time and guesses number is ${randomnumber}`
            endgame()
        }
        else{
            remaining++;
            lastresult.innerHTML=(`${11-remaining}`)
            guesses.innerHTML=(`${stack}`)
            checkguess(text)
        }
    }
 }
  function checkguess(text){
    guessfield.value="";
 if(text=== randomnumber){
    loworhi.innerHTML=`yeah you guess right in your ${remaining-1} attempts `
    endgame();
 }
 else if(text<randomnumber){
    loworhi.innerHTML="you are Tooo low"
 }
 else if(text>randomnumber){
    loworhi.innerHTML="you are Tooo high"
 }
  }
 
 function endgame(){
    guessfield.value="";
    guessfield.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML='<h2 id=newgame> Start new game</h2>'
    resultparas.appendChild(p);
    playgame=false;
    startgame()
 }
 function startgame(){
    const startgame=document.querySelector('#newgame')
    startgame.addEventListener('click',function(e){
     randomnumber=Math.floor((Math.random()*100)+1);
     remaining=1;
     stack=[];
     lastresult.innerHTML=(`${11-remaining}`)
     guesses.innerHTML=(`${stack}`)
     loworhi.innerHTML='';
     guessfield.removeAttribute('disabled','')
     resultparas.removeChild(p);
     playgame=true;
    })
    
 }