function sum(num1, num2) { //without default parameter;

    result = num1 + num2;
    console.log(result);
}

sum(10, 20);

function sum(num1, num2 = 10) {//include default parameter;

    result = num1 + num2;
    console.log(result);
}

sum(20);