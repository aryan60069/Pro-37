class Question {
  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Welcome to Today's Quiz Challenge !");
    this.title.position(200, 5);

    this.question.html("Question:- What comes in a minute, twice in a moment, but never in a thousand years? " );
    this.question.position(80, 80);
    this.option1.html("1: Thirty-one seconds " );
    this.option1.position(80, 100);
    this.option2.html("2: 1/1000 of a decade" );
    this.option2.position(80, 120);
    this.option3.html("3: One-Tenth of a century " );
    this.option3.position(80, 140);
    this.option4.html("4: The letter 'M' ");
    this.option4.position(80, 160);

    this.input1.position(150, 250);
    this.input2.position(350, 250);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
