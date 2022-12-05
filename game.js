let userInput=document.getElementById("userinput");
let gameResult=document.getElementById("Userresult");
let RandomNumber=Math.ceil(Math.random()*100);
console.log(RandomNumber);

function click(){


    let GuessNumber=parseInt(userInput.value);



    if(GuessNumber < RandomNumber){
        gameResult.textContent=`TOO high ! try another number`;
        gameResult.style.backgroundColor= "blue"
        console.log('high')
        
    }
    else if(GuessNumber > RandomNumber){
        gameResult.textContent=`TOO low!try another number`;
        gameResult.style.backgroundColor= "blue"
        console.log('low')
        
    }
    else if(GuessNumber === RandomNumber){
        gameResult.textContent=`CONGRAGULATIONS! YOUR GUESS FOR ACCURATE`;
        gameResult.style.backgroundColor= "green"
        console.log('equal')
        
    }
    else{
        gameResult.textContent=`PLEASE ENTER VALID INPUT! try another number`;
        gameResult.style.backgroundColor= "red"
        
    }

}