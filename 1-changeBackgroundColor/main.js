const color = ['red', 'green', 'orange', 'pink', 'violet', 'purple'];

const btn = document.querySelector('button');
const body = document.querySelector('body');

body.style.backgroundColor = 'Indigo';

btn.addEventListener('click', function(){
    const colorIndex= parseInt(Math.floor(Math.random()*color.length))
    body.style.backgroundColor = color[colorIndex]
});

