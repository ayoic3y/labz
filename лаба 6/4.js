let slag1 = document.getElementById('slag1');
let slag2 = document.getElementById('slag2');

function countSumm() {
    let summ = Number(slag1.value) + Number(slag2.value);
    document.getElementById('p').innerHTML = summ;
}