document.querySelector('button').addEventListener('click', Poleteli);

function Poleteli() {
    let ufo = document.getElementById('ufo');
    let rock = document.getElementById('rock');
    let ast = document.getElementById('ast');

    setInterval(() => {
        let tempSrc1 = ufo.src;
        let tempSrc2 = rock.src;
        ufo.src = ast.src;
        rock.src = tempSrc1;
        ast.src = tempSrc2; 
    },700);
}