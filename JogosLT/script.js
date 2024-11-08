let personagem = document.getElementById("personagem");
let tela = document.getElementById("tela");
let esq = document.getElementById("esq");
let dir = document.getElementById("dir");
let posx = 50;
let posy = 500;

function moverdir() {
    posx = posx + 10;
    personagem.style.left = posx + "px"; // Corrigido de "usuario.posx"
    if (testarColisao()) {
        posx = posx - 10;
        personagem.style.left = posx + "px";
    }
}

function moveresq() {
    posx = posx - 10;
    personagem.style.left = posx + "px";
    if (testarColisao()) {
        posx = posx + 10;
        personagem.style.left = posx + "px";
    }
}

function pular()  {

    function subir() {
        movercima()
    }
    function pararSubir() {
        clearInterval(sobe); // Elimina o setInterval associada a variável sobe

        let desce = setInterval(descer, 10); // Executa a função descer a cada 10ms

        function pararDescer() {

            clearInterval(desce); // Elimina o setInterval associado a variável desce

        }
        setTimeout(pararDescer, 200); // Depois de 200ms chama a função paraDescer
    }

    function descer() {
        moverbaixo();
    }
    let sobe = setInterval(subir, 10); // Configura a função subir para ser executada a cada 10ms
    setTimeout(pararSubir, 200); // Executa a função pararSubir depois de 200ms
}

function movercima() {
    posy = posy - 10;
    personagem.style.top = posy + "px";
    if (testarColisao()) {
        posy = posy + 10;
        personagem.style.top = posy + "px";
    }
}

function moverbaixo() {
    posy = posy + 10;
    personagem.style.top = posy + "px";
    if (testarColisao()) {
        posy = posy - 10;
        personagem.style.top = posy + "px";
    }
}

function mover(event) {
    if (event.key == 'a' || event.key == 'A')
        { moveresq();} 
    
    else if (event.key == 'd' || event.key == 'D') 
        {moverdir();} 
    
    else if (event.key == 'w' || event.key == 'W') 
        { movercima();} 
    
    else if (event.key == 'e' || event.key == 'E')
        {movercima();
         moverdir();} 

    else if (event.key == 'S' || event.key == 's')
         {moverbaixo();}
        
    else if (event.key == 'q' || event.key == 'Q') 
            {movercima();
             moveresq();}

    else if (event.key == ' ') 
        {pular();}
}


tela.onkeydown = mover;