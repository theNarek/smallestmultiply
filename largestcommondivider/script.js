function solve() {
    var firstNum = Number(document.getElementById('firstNum').value),
        secondNum = Number(document.getElementById('secondNum').value),
        resultBox = document.getElementById('resultBox');

    for (var i = 0; i <= firstNum && i <= secondNum; i++) {
        if (firstNum % i == 0 && secondNum % i == 0) {
            var lastNum = i;
            resultBox.innerHTML = '<p style="color: green;"> The largest common divider of numbers ' + firstNum + ' and ' + secondNum + ' is ' + lastNum + '. </p>';
        }
    }
}
