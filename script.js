do{
    var a = +prompt('Введите мини число:')
}while (isNaN(a) || a == null || a == ''); 
  
do{
    var b = +prompt('Введите макс число:')
}while (isNaN(b) || b == null || b == '') ;

do{
    var g = +prompt('Сколько премеров вы хотели бы решить:')
}while (isNaN(g) || g == null || g == '') ;




function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
    
}

function rSym() {
    return Math.floor(Math.random() * (5 - 1) + 1)
    
}

for (let i = 0; i < g; i++) {

        let number1 = random(a, b),
            number2 = random(a, b),
            randSym = rSym(),
            correctAnswer = 0;

    if (randSym == 1) {
        correctAnswer = number1 + number2
        randSym = '+'
    }else if (randSym == 2) {
        correctAnswer = number1 - number2
        randSym = '-'
    }else if (randSym == 3) {
        correctAnswer = number1 * number2
        randSym = '*'
    }else if (randSym == 4) {
        correctAnswer = number1 / number2
        randSym = '/'
    }
     

    let pr = +prompt(number1 + randSym + number2);
    alert(correctAnswer == pr ? ' молодец умеешь решать: ' + pr : ' не повезло не фартанула: ' + pr + ' правильный ответ: ' + correctAnswer)
    console.log(correctAnswer == pr ? ' молодец умеешь решать ' + pr : ' не повезло не фартанула: ' + pr + ' правильный ответ: ' + correctAnswer);
}

// console.log(random(a, b));
