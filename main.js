// Esta função é acionada ao carregar a página
window.onload = function() {
    //definindo_parametros ----------------------------------------------------------
    window.canvas = document.getElementById('canvas');
    window.ctx = canvas.getContext('2d');

    window.canvas.width = 1000;
    window.canvas.height = 500;

    window.fps = 30;
    window.interval = 1000/fps;
    window.lastTime = 0;
    // --------------------------------------------------------------------------------
    
    //criando celulas -----------------------------------------------------------------
    //célula1
    let c1r = 20 // raio da célula
    let c1x = 0 + c1r // coordenada x do centro da célula
    let c1y = window.canvas.height / 2 // coordenada y do centro da célula
    let c1v = 5 // velocidade da célula
    let c1c = 'blue' // cor da célula
    //célula2
    let c2r = 20 // raio da célula
    let c2x = window.canvas.width - c2r // coordenada x do centro da célula
    let c2y = window.canvas.height / 2 // coordenada y do centro da célula
    let c2v = 5 // velocidade da célula
    let c2c = 'red' // cor da célula
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    function desenhar_celulas(){
        //célula1
        ctx.beginPath();
        ctx.arc(c1x, c1y, c1r, 0, Math.PI*2, false);
        ctx.fillStyle = c1c;
        ctx.fill();
        ctx.stroke();
        //célula2
        ctx.beginPath();
        ctx.arc(c2x, c2y, c2r, 0, Math.PI*2, false);
        ctx.fillStyle = c2c;
        ctx.fill();
        ctx.stroke();
    }
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    function atualizar_posicoes(){
        //célula1
        c1x += c1v
        //célula2
        c2x -= c2v
    }
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    function limpar_tela(){
        ctx.clearRect(0, 0, window.canvas.width, window.canvas.height);
    }
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    function verificar_colisao(){
        if ((c1x + c1r) >= (c2x - c2r)) {
            // iverte a direção quando colide
            c1v = c1v * -1 
            c2v = c2v * -1
            //let mensagem = "c1x: "+String(c1x) +" | Borda de c1: "+String(c1x+c1r)+"\n"+"c2x: "+String(c2x) +" | Borda de c2: "+String(c2x-c2r)
            //window.alert(mensagem)
        }
    }
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // obs: timestamp já é passado automaticamente pela função requestAnimationFrame
    function rodar_jogo(timestamp){
        if (timestamp - window.lastTime >= window.interval) {
            window.lastTime = timestamp;
            atualizar_posicoes();
            limpar_tela();
            desenhar_celulas();
            verificar_colisao();
        }
        requestAnimationFrame(rodar_jogo);
    }
    // --------------------------------------------------------------------------------

    desenhar_celulas();
    requestAnimationFrame(rodar_jogo);
}