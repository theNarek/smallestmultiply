// ! outdated script
function solve() {
    var firstNum = Number(document.getElementById('firstNum').value),
        secondNum = Number(document.getElementById('secondNum').value),
        resultBox = document.getElementById('result'),
        toNum = Number(document.getElementById('toNum').value);

    var firstArray = [],
        secondArray = [];

    if (firstNum != "" && secondNum != "") {
        if (toNum == "") {
            for (var i = firstNum; i <= 100; i += firstNum) {
                firstArray.push(i);
            }
            for (var j = secondNum; j <= 100; j += secondNum) {
                secondArray.push(j);
            }
        } else {
            for (var i = firstNum; i <= toNum; i += firstNum) {
                firstArray.push(i);
            }
            for (var j = secondNum; j <= toNum; j += secondNum) {
                secondArray.push(j);
            }
        }

        var resultsArray = [];
        for (firstKey in firstArray) {
            for (secondKey in secondArray) {
                if (firstArray[firstKey] == secondArray[secondKey]) {
                    resultsArray.push(firstArray[firstKey]);
                }
            }
        }

        resultBox.innerHTML = '<p style="color: green;"> The smallest common multiple of numbers ' + firstNum + ' and ' + secondNum + ' is ' + resultsArray[0] + '.</p>';
    } else {
        resultBox.innerHTML = "<p style='color: red;'>Fill in the fields!</p>";
    }
}
