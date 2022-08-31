let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button')); //array.from метод,который создает массив


//метод .map используется для выполнения над каждым элементом итерируемого объекта 
//некую последовательность действий.
buttons.map (button => {
    button.addEventListener('click', function (e){
        let event = e.target.innerText;
        if (event === 'C') {
            display.innerText = '';
        }else if (event === '=') {
                display.innerText = eval(display.innerText);
        }else if (event = '←') {
            display.innerText = display.innerText.slice(0, -1);
        }else {event = display.innerText += e.target.innerText;
        }
    });
});
