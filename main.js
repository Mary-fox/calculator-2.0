let buttons = document.querySelector('.buttons');
//возвращает первый элемент,который соответсвует селектору
let btn = document.getElementsByClassName('button');
//возвращает все елементы,которые соответствуют селектору
let value = document.getElementById('value');
 
//addEventListener позволяет добавить несколько обработчиков на одно событие ('click')
//this.innerHTML обработчик ссылается именно на текующий элемент,на котором висит обработчик
//eval вычисляет арифмитическое выражение

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
         if (this.innerHTML == "C") {
            value.innerHTML = "";
         }else {
             value.innerHTML = value.innerHTML + this.innerHTML;
        }
        }
    })
}