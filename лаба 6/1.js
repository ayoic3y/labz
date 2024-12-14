const td = document.getElementsByTagName('td');
        for(let i = 0; i < td.length; i++){
            if(i % 6 === 0)
            td[i].style.backgroundColor = 'red';
        }