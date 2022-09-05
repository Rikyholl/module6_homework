const num = prompt("Введите число от 1 до 1000");

function getSimlpe(value){

    if (value > 1000) { 

        console.log('Данные неверны');
    } else if  (value == 1){

        return false;
    } else {

        for (let i = 2; i < value; i++){ // Перебираем числа начиная от 2 до введенного числа 

            if (value % i == 0){ // если введенное нами число разделилось без остатка, значит оно непростое, возрвщаем false, т.к. дальше можно не перебирать

                return false;
            } 
        }

        return true; // Если делителей без остатка не нашлось, значит число простое
    }
}



if (num > 1000) {
    console.log('Данные неверны');
} else if (getSimlpe(num)){
    console.log('Число простое');
} else {

    console.log('Число непростое');
}


