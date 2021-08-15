class Quiz {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    push();
    textSize(30);
    stroke("red")
    text("Result of the Quiz !",250, 35);
    text("---------------------------",240, 50);
    pop();

    //call getContestantInfo( ) here
    Contestant.getContestantInfo();

    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){
      var display_position = 270;

      for(var plr in allContestants){  
        var correctAns = "4";
        if(allContestants[plr].answer === correctAns ){
          fill("green");
        } else {
          fill("red")
        }

        display_position+=20;
        textSize(15);
        text(allContestants[plr].name+": "+ allContestants[plr].answer, 120,display_position);
      }
    }
    //write code to add a note here
    fill("darkblue");
    textSize(20);
    text("Note: Contestant who answered correct is highlighted in green",130,250);
    
    //write code to highlight contest who answered correctly
    
  }

}
