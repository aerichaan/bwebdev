function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value) || 0;
    let num2 = parseFloat(document.getElementById("num2").value) || 0;
    document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "";
}

function exitApp() {
    window.close();
}