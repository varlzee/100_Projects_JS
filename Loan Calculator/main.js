document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculateLoan);
});

function calculateLoan() {
    let loanAmount = parseFloat(document.getElementById("loan_amount").value) || 0;
    let interestRate = parseFloat(document.getElementById("interest_rate").value) || 0;
    let loanTerm = parseFloat(document.getElementById("months").value) || 0;

    if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
        let monthlyInterest = (interestRate / 100) / 12;
        let numberOfPayments = loanTerm * 12;

        let monthlyPayment = (loanAmount * monthlyInterest) / 
            (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

        document.getElementById("result").textContent = `$${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById("result").textContent = "$0.00";
    }
}