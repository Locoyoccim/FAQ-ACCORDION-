(function () {
    // Utiliza un bucle para simplificar la repetición de código
    for (let i = 1; i <= 4; i++) {
        let plus = document.querySelector(`#bp${i}`);
        let articulo = document.querySelector(`#ar${i}`);
        let minus = document.querySelector(`#bm${i}`);

        plus.addEventListener('click', () => {
            articulo.classList.add('open');
            plus.style.display = 'none';
            minus.style.display = 'block';
        });
        minus.addEventListener('click', () => {
            articulo.classList.remove('open');
            plus.style.display = 'block';
            minus.style.display = 'none';
        });
    }
})();