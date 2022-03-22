"use strict"

// получили кнопку из html
const btn = document.querySelector('button');

// вешаем обработчик событий 
btn.addEventListener('click', () =>{
    let hexColor =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; // создали массив из элементов  hex-colora 
    let randomColor = 0; // здесь будет находиться код цвета который мы создадим случайным образом
    let newColor= ''; // cюда мы сгенерируем новый цвет 
    let body = document.querySelectorAll('body');
    let codeColorInHtml = document.querySelector('span');

    //настраиваем цикл для шести элементов из массива hexColor. 
    for (let i = 0; i < 6; i++) {
        // генерируем случайные числа из массива hexColor методом Math.random * кол во элементов в массиве и округляем
        randomColor = Math.floor(Math.random() * hexColor.length);
        //в переменную newColor мы присваиваем randomColor из массива hexColor
        newColor += hexColor[randomColor];

        }
        body[0].style.background = '#' + newColor; // добавили newColor на фот body
        codeColorInHtml.innerHTML = `#${newColor}`; // spanу который на html странице добавляем новое значение а именно рандомное код цвет из newColor
});