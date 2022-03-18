class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {   // dando nome a cada elemento para que sejam identificados no CSS
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {  // ocultar!! 
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();  // Para o input desaparecer
      this.playButton.hide(); // para botão desaparecer! 
      var message = `Olá, ${this.input.value()}  </br>espere o outro jogador entrar...`;  // mensagem que queremos que apareça
      this.greeting.html(message);  // pedindo para aparecer! 
     
      playerCount += 1; // aumenta a contagem dos jogadores
      player.name = this.input.value(); // pega a informaçao do nome do jogador e manda para o player
      player.index = playerCount; // cria indice do player
      player.addPlayer(); // criar o jogador
      player.updateCount(playerCount);  // atualiza contagem de jogadores no banco de dados
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
