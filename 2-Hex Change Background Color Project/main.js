const hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const show = document.querySelector('h3');
const btn = document.querySelector('button');
const body = document.querySelector('body');

body.style.backgroundColor = '#6A7CCA';

const bgHexColor = btn.addEventListener('click', function(){
    let colorShow = ''

    for (i=0; i<6; i++){
        const rand = Math.floor(Math.random() * hexColor.length )
        colorShow += hexColor[rand]
    }

    body.style.backgroundColor = '#' + colorShow;
    show.innerText = 'HEX COLOR:#' + colorShow;
});