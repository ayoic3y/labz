let ul = document.getElementById('thumbs').addEventListener('click', changeImg);
let largeImg = document.getElementById('largeImg');

function changeImg(event) {
    let target = event.target;
    if(target.tagName == 'IMG') {
        largeImg.src = target.closest('a').href;
    }
    event.preventDefault();
}