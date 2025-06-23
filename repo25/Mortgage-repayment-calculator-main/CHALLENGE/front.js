// front.js - Mortgage Calculator Logic (Compact Version)

document.addEventListener('DOMContentLoaded', () => {
    // Get references to all necessary DOM elements
    const inputs = {
        mortgageAmount: document.getElementById('mortgageAmount'),
        mortgageTerm: document.getElementById('mortgageTerm'),
        interestRate: document.getElementById('interestRate')
    };
    const radios = document.querySelectorAll('input[name="mortgageType"]');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearAllLink = document.querySelector('.clear-all-link');

    const resultStates = {
        initial: document.getElementById('initialState'),
        calculated: document.getElementById('calculatedState'),
        error: document.getElementById('errorState')
    };
    const monthlyRepaymentSpan = document.getElementById('monthlyRepayment');
    const totalRepaymentSpan = document.getElementById('totalRepayment');

    const errorDisplays = {
        mortgageAmount: document.getElementById('mortgageAmountError'),
        mortgageTerm: document.getElementById('mortgageTermError'),
        interestRate: document.getElementById('interestRateError'),
        mortgageType: document.getElementById('mortgageTypeError')
    };

    // Resets results display to initial state
    const resetResultsDisplay = () => {
        Object.values(resultStates).forEach(div => div.classList.add('hidden'));
        resultStates.initial.classList.remove('hidden');
    };

    // Shows specific error message for an input
    const showInputError = (inputElement, errorElement, isInvalid) => {
        if (isInvalid) {
            inputElement.classList.add('border-red-500');
            errorElement.classList.remove('hidden');
        } else {
            inputElement.classList.remove('border-red-500');
            errorElement.classList.add('hidden');
        }
    };

    // Validates a single number input
    const validateNumberInput = (inputName) => {
        const inputElement = inputs[inputName];
        const isValid = inputElement.value !== '' && !isNaN(parseFloat(inputElement.value)) && parseFloat(inputElement.value) >= 0;
        showInputError(inputElement, errorDisplays[inputName], !isValid);
        return isValid;
    };

    // Validates if a mortgage type is selected
    const validateMortgageType = () => {
        const isSelected = Array.from(radios).some(radio => radio.checked);
        showInputError(null, errorDisplays.mortgageType, !isSelected); // No input element for radio error
        return isSelected;
    };

    // Main calculation logic
    const calculateMortgage = () => {
        let isValid = true;

        isValid = validateNumberInput('mortgageAmount') && isValid;
        isValid = validateNumberInput('mortgageTerm') && isValid;
        isValid = validateNumberInput('interestRate') && isValid;
        isValid = validateMortgageType() && isValid;

        if (!isValid) {
            Object.values(resultStates).forEach(div => div.classList.add('hidden'));
            resultStates.error.classList.remove('hidden');
            return;
        }

        const P = parseFloat(inputs.mortgageAmount.value);
        const annualInterestRate = parseFloat(inputs.interestRate.value);
        const termYears = parseFloat(inputs.mortgageTerm.value);

        const i = (annualInterestRate / 100) / 12;
        const n = termYears * 12;

        let monthlyPayment = 0;
        let totalRepayment = 0;

        const selectedType = document.querySelector('input[name="mortgageType"]:checked').value;

        if (selectedType === 'repayment') {
            if (i === 0) {
                monthlyPayment = P / n;
            } else {
                monthlyPayment = P * (i * Math.pow((1 + i), n)) / (Math.pow((1 + i), n) - 1);
            }
            totalRepayment = monthlyPayment * n;
        } else if (selectedType === 'interestOnly') {
            monthlyPayment = P * i;
            totalRepayment = monthlyPayment * n + P;
        }

        if (isNaN(monthlyPayment) || !isFinite(monthlyPayment)) {
            Object.values(resultStates).forEach(div => div.classList.add('hidden'));
            resultStates.error.classList.remove('hidden');
            return;
        }

        monthlyRepaymentSpan.textContent = `£${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        totalRepaymentSpan.textContent = `£${totalRepayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        Object.values(resultStates).forEach(div => div.classList.add('hidden'));
        resultStates.calculated.classList.remove('hidden');
    };

    // Event Listeners
    calculateBtn.addEventListener('click', calculateMortgage);

    clearAllLink.addEventListener('click', (e) => {
        e.preventDefault();
        Object.values(inputs).forEach(input => {
            input.value = '';
            input.classList.remove('border-red-500');
        });
        radios.forEach(radio => radio.checked = false);
        Object.values(errorDisplays).forEach(err => err.classList.add('hidden'));
        resetResultsDisplay();
    });

    Object.keys(inputs).forEach(inputName => {
        inputs[inputName].addEventListener('input', () => {
            validateNumberInput(inputName);
            resetResultsDisplay();
        });
        inputs[inputName].addEventListener('focus', () => {
            validateNumberInput(inputName);
        });
    });

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            validateMortgageType();
            resetResultsDisplay();
        });
    });

    resetResultsDisplay(); // Initial setup on page load
});
