const message = document.querySelector('input');
const btn = document.querySelector('button');
const text = document.querySelector('p')

btn.addEventListener('click', function(){
    console.log(message.value)
    text.innerText = message.value
});

// $("#msg").reset();