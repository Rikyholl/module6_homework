const num = prompt("Введите число от 1 до 1000");

function getSimlpe(value){

    if (value > 1000) {
        console.log('Данные неверны');
    } else if  (value == 1){

        return false;
    } else {

        for (let i = 2; i < value; i++){

            if (value % i == 0){

                return false;
            } 
        }

        return true;
    }
}



if (num > 1000) {
    console.log('Данные неверны');
} else if (getSimlpe(num)){
    console.log('Число простое');
} else {

    console.log('Число непростое');
}


