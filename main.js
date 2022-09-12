let h2 = document.createElement('h2'); 
window.addEventListener('load',()=>{
    const form = document.querySelector("#form") ;
    const rock=document.querySelector("#rock") ;
    const paper=document.querySelector("#paper") ;
    const scissors=document.querySelector("#scissors") ;

    form.addEventListener('click',(e)=>{
    e.preventDefault();

        

})
rock.addEventListener('click',()=>{
    if (h2.isConnected){
        h2.remove() ;
    }
    const computerChoice=getComputerChoice() ;
    createResult(oneRound("rock",computerChoice)) ;
});

paper.addEventListener('click',()=>{
    if (h2.isConnected){
        h2.remove() ;
    }
    const computerChoice=getComputerChoice() ;
    createResult(oneRound("paper",computerChoice)) ;


});

scissors.addEventListener('click',()=>{
    if (h2.isConnected){
        h2.remove() ;
    }
    const computerChoice=getComputerChoice() ;
    createResult(oneRound("scissors",computerChoice)) ;


});
})


function createResult(result) {

   

    h2.innerText=result ; 
    h2.setAttribute('class',"text") ;
    form.appendChild(h2) ;

}



function getComputerChoice () {

    possibilities =["rock","paper","scissors"];
    return possibilities[Math.floor(Math.random() * (3) + 1)-1];
}    
function oneRound(playerSelection,computerChoice){
    if (playerSelection.toLowerCase()=="rock" && computerChoice=="paper")
        {return "You Lose! Paper beats Rock" ;}
    else if (playerSelection.toLowerCase()=="paper" && computerChoice=="rock")
        {return "You win! Paper beats Rock";}
    if (playerSelection.toLowerCase()=="scissors" && computerChoice=="rock")
        { return "You Lose! rock beats scissors"}
    else if (playerSelection.toLowerCase()=="rock" && computerChoice=="scissors")
        { return "You win! rock beats scissors"}
    if (playerSelection.toLowerCase()=="paper" && computerChoice=="scissors")
        { return "You lose! scissors beats paper"}
    else if (playerSelection.toLowerCase()=="scissors" && computerChoice=="paper")
        { return "You win! scissors beats paper"}
    else 
        {return "it's a draw";}

}
function game() {
    

    for(i=0;i<5;i++)
        {   let playerSelection = prompt("choose rock paper or scissors") ;
            const computerChoice=getComputerChoice() ;
            console.log(computerChoice) ;
            console.log(oneRound(playerSelection,computerChoice));
            
        }
}

