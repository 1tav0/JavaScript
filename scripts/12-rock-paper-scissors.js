  /*
    const score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
  */

    let score = JSON.parse(localStorage.getItem('score')) ||  {
      wins: 0,
      losses: 0,
      ties: 0
    };

  //show the scores in the dom
  updateScoreElement();

  /*
  if(!score){
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
  }
  */

  let isAutoPlaying = false;
  let intervalId;
  
  // const autoPlay = () => {
      
  // };

  function autoPlay() {
    //will run the function every 1 second
    /*
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
        const playerMove = pickComputerMove();
        playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
      } else {
        clearInterval(intervalId); //to make it stop
        isAutoPlaying = false;
      }
    }
    */
    //USING ARROW FUNCTION
    if (!isAutoPlaying) {
      intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
      } else {
        clearInterval(intervalId); //to make it stop
        isAutoPlaying = false;
      }
  }
  
  //ADDING EVENT LISTENERS TO THE ROCK BUTTON
  const rockButtonElement = document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
  });

  const paperButtonElement = document.querySelector('.js-paper-button').addEventListener('click', () =>{
    playGame('paper');
  })

  const scissorsButtonElement = document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
  })

  //ADDING THE KEYDOWN EVENTLISTENER
  // document.body.addEventListener('keydown', () => {
  //   console.log('keydown');
  // })
  document.body.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === 'r') {
      playGame('rock');
    } else if (event.key === 'p') {
      playGame('paper');
    } else if (event.key === 's') {
      playGame('scissors');
    }
  });

  //this outputs the score stored in the local storage but as a Json string 
  console.log(localStorage.getItem('score'));
  //this outputs the score stored in the local storage but as an object 
  console.log(JSON.parse(localStorage.getItem('score')));

  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >=0 && randomNumber < 1/3){
      computerMove = 'rock';
    }else if(randomNumber>=1/3 && randomNumber<2/3){
      computerMove = 'paper';
    }else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'scissors';
    }

    return computerMove;
  }

  function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';
    if(playerMove==='rock'){
      if(computerMove === 'rock'){
      result = 'Tie';
      }else if(computerMove === 'paper'){
        result = 'You Loose';
      }else if(computerMove === 'scissors'){
        result = 'You Win';
      }
    }else if(playerMove==='paper'){
      if(computerMove === 'rock'){
        result = 'You Win';
      }else if(computerMove === 'paper'){
        result = 'Tie';
      }else if(computerMove === 'scissors'){
        result = 'You Loose';
      }
    }else if(playerMove==='scissors'){
      if(computerMove === 'rock'){
        result = 'You Loose';
      }else if(computerMove === 'paper'){
        result = 'You Win';
      }else if(computerMove === 'scissors'){
        result = 'Tie';
      }
    }

    if(result==='You Win'){
      score.wins += 1;
    }else if(result==='You Loose'){
      score.losses += 1;
    }else if(result==='Tie'){
      score.ties += 1;
    }

    //to store the item in local storage
    //local storage only supports strings so we use stringify
    localStorage.setItem('score',JSON.stringify(score));
    
    //update the score in the dom
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `${result}`;

    // document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`;
    document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
        
      }