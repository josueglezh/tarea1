class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Escribe tu nombre aquí...");
    this.input2 = createInput("Escribe el número de opción...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    //this.title.hide();
    //this.input1.hide();
   // this.button.hide();
    //this.input2.hide();
    //this.message.hide();
  }

  display(){
    this.title.html("Juego MiQuiz");
    this.title.position(350, 0);

    //this.question("Pregunta : Un señor gordito y muy coloradito, no toma café pues siempre toma té.");
    //this.html("Pregunta : Un señor gordito y muy coloradito, no toma café pues siempre toma té." );
    this.question.html("Pregunta : Un señor gordito y muy coloradito, no toma café pues siempre toma té." );
    //question.html("Pregunta : Un señor gordito y muy coloradito, no toma café pues siempre toma té." );

    this.question.position(150, 80);
    this.option1.html("1: Tapete" );
    this.option1.position(150, 100);
    this.option2.html("2: Tomate" );
    this.option2.position(150, 120);
    this.option3.html("3: Taquero" );
   this.option3.position(150, 140);
    this.option4.html("4: Tenedor" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
   this.input2.position(350, 230);
   this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
     this.message.html("Gracias, tu respuesta ha sido entregada.");
     this.message.position(350, 350);

    // this.message.html("Gracias, tu respuesta ha sido entregada.");
    // this.message.position();

     //this.message("Gracias, tu respuesta ha sido entregada.");
    // this.message(350, 350);

      //this.message.html("Gracias, tu respuesta ha sido entregada.");
      //this.message.position(350);


    });
  }
}
