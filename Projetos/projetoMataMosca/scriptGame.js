function localizacaoX() {
    var $widthWindowGame = window.innerWidth - 100;
    var x = Math.floor(Math.random() * $widthWindowGame);
    return x
}
function localizacaoY() {
    var $heightWindowGame = window.innerHeight - 50;
    var y = Math.floor(Math.random() * $heightWindowGame);
    return y;
}

var tamanhos = [
    'img1',
    'img2',
    'img3'
];

function styles() {
    var stylesBug = Math.floor(Math.random() * 3);
    return stylesBug;
}

function addBug() {
    var bug = document.createElement("img");
    bug.setAttribute("src", "images/mosquito.png");
    bug.setAttribute("class", tamanhos[styles()]);
    bug.setAttribute("onclick", "killBug(this)");
    bug.setAttribute("style", "left:" + localizacaoX() + "px;top:" + localizacaoY() + "px;");
    document.body.appendChild(bug);
    count -= 1;
    console.log(bug);
    if ( count <= 0 ){
        var btn = document.createElement("a");
        btn.setAttribute("class", "btn btn-primary btn-lg btn-block reiniciard");
        btn.setAttribute("href", "index.html" );
        btn.innerHTML = "Reiniciar";
        document.body.appendChild(btn);
        clearInterval( timer );
    }
}

function killBug(element) {
    document.body.removeChild(element);
}

var count = 10;

var timer = setInterval( addBug, 1000 )