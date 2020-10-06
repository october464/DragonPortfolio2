//Initial JS Code Sample
function AddTwoIntegers() {
    let int1 = 4;
    let int2 = 6;
    let result = int1 + int2;
    let spanEl = document.getElementById("result1");
    spanEl.innerHTML = `<b>${result}</b>`;
}

function AddTwoNumbers(num1, num2) {
    let result = num1 + num2;
    let spanEl = document.getElementById("result2");
    spanEl.innerHTML = `<b>${result}</b>`;
}
function AddTwoUserNumbersV1() {
    //How do I get the valye of input1
    let userNum1 = document.getElementById("userNum1")
    let userNum2 = document.getElementById("userNum2")

    let spanEl = document.getElementById("result3");
    spanEl.innerHTML = `<b>${Number(userNum1.value) + Number(userNum2.value)}</b>`;
}

function AddTwoInputs(num1, num2) {
    //The return statement means some variable somewhere is taking on this value
    return Number(num1) + Number(num2);
}



