
document.addEventListener('DOMContentLoaded', function(){
    const binInput = document.getElementById("binValue");
    const decValue = document.getElementById("decValue");
    const calculateBtn = document.getElementById("calculate");
    const clearBtn = document.getElementById("clearBtn");
            
    calculateBtn.addEventListener('click', function() {
        // Get the binary value as a string
        const binValue = binInput.value;
                
        // Validate if it's a binary number (only 0s and 1s)
        if (!/^[01]+$/.test(binValue)) {
            decValue.textContent = 'Invalid binary number! Only 0s and 1s allowed.';
            decValue.style.color = '#b21f1f';
            return;
        }
                
        // Convert binary to decimal
        const decimalValue = parseInt(binValue, 2);
                
        // Display the result
        decValue.textContent = decimalValue;
        decValue.style.color = '#1a2a6c';
    });
            
    clearBtn.addEventListener('click', function() {
        binInput.value = '';
        decValue.textContent = '';
    });
});