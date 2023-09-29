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