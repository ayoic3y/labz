document.querySelector('button').addEventListener('click', changeProgress);
document.querySelector('button').style.cssText = 'background-color: blue; color: white;'
let i = 0;

function changeProgress() {
    let progress = document.querySelector('progress');
    i += 5;
    progress.value = i;    
    document.querySelector('span').innerHTML = `${i}%`;
    if(i == 100) {
        document.querySelector('button').hidden = true;
        document.querySelector('span').innerHTML = '100% Максимум';
    }
}