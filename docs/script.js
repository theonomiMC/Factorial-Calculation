// -----Factorial Recursiv Function-----
function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//---call this function on click Calculate Button----
function calc() {
  let num = document.getElementById('factorial').value;
  let result = document.getElementById('result');
  if (isNaN(num)) {
    return false;
  }
  result.innerHTML = factorial(num);
}
document.getElementById('factorial').addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});