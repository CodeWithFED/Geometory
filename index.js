const searchbox = document.getElementById('input');
const btn = document.getElementById('btn');
const resultbox = document.getElementById('ReturnNum');
searchbox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') Calculatoin();
})
btn.addEventListener('click', () => Calculatoin())
function Calculatoin() {
    if (searchbox.value != '') {
        let R = Number(searchbox.value);
        const P = Math.PI;
        const circumferece = Math.round(2 * R * P);
        const surface = Math.round((R ** 2) * P);
        searchbox.value = '';
        resultbox.classList.add('result__com');
        resultbox.innerText = `Circumference= ${circumferece} 
        Surface = ${surface}`;
    }
    else {
        resultbox.classList.remove('result__com');
        resultbox.innerText = 'Nothing is Passed!'
    }
}

