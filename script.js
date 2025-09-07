document.addEventListener("DOMContentLoaded", function () {
  const binInput = document.getElementById("binValue");
  const decValue = document.getElementById("decValue");
  const calculateBtn = document.getElementById("calculate");
  const clearBtn = document.getElementById("clearBtn");

  calculateBtn.addEventListener("click", function () {
    const binValue = binInput.value;

    if (!/^[01]+$/.test(binValue)) {
      decValue.textContent = "Invalid binary number! Only 0s and 1s allowed.";
      decValue.style.color = "#b21f1f";
      return;
    }

    const decimalValue = parseInt(binValue, 2);

    decValue.textContent = decimalValue;
    decValue.style.color = "#1a2a6c";
  });

  clearBtn.addEventListener("click", function () {
    binInput.value = "";
    decValue.textContent = "";
  });
});
