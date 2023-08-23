var cores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900', '#9900ff', '#0099ff', '#ff0099'];
function mudarCor() {
    var corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}