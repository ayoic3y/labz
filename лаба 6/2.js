document.getElementById('bt').addEventListener('click', change);

function change() {
    for(let i = 0; i < 3; i++)
    document.querySelectorAll('.pr')[i].innerHTML = [i + 1];
}