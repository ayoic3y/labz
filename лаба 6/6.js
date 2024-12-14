let div = document.getElementById('container');

div.onclick = function(event) {
    if(event.target.tagName == 'SPAN') {
        let block = event.target.closest('.block');
        if(block) 
            block.hidden = true;
    }  
}