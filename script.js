function press(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let display = document.getElementById("display");
    display.value = eval(display.value);
  } catch {
    document.getElementById("display").value = "Error";
  }
}
