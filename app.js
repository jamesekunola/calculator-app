class Calculator {
  constructor(perviousOperendAndTextElement, currentOperendAndTextElement) {
    this.perviousOperendAndTextElement = perviousOperendAndTextElement;
    this.currentOperendAndTextElement = currentOperendAndTextElement;
    this.clear();
  }

  clear() {
    this.currentOperend = "";
    this.previousOperend = "";
    this.operation = undefined;
  }

  delete() {}

  apphendNumber(number) {
    if (number == "." && this.currentOperend.includes(number)) return;
    this.currentOperend = this.currentOperend.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.operation = operation;
    this.previousOperend = this.currentOperend;
    this.currentOperend = "";
  }

  updateDisplay() {
    this.currentOperendAndTextElement.innerText = this.currentOperend;
  }

  compute() {}
}
// selectors
const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const deleteBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");
const perviousOperendAndTextElement = document.querySelector(
  "[data-previous-operend]"
);
const currentOperendAndTextElement = document.querySelector(
  "[data-current-operend]"
);

const calculator = new Calculator(
  perviousOperendAndTextElement,
  currentOperendAndTextElement
);

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.apphendNumber(btn.innerText);
    calculator.updateDisplay();
  });
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
  });
});
