const compute = document.querySelector("#compute");
const gross_income = document.querySelector("#gross");
const initial = document.querySelector("#initial");
const tax_result = document.querySelector("#tax");
const tax_rate = document.querySelector("#tax_rate")
const monthly_result = document.querySelector("#monthly");
const annual_result = document.querySelector("#annual");

compute.addEventListener("click", function() {

    const gross = parseFloat(gross_income.value);
    const taxRates = [0, 0.15 , 0.20 , 0.25, 0.30 , 0.35];
    const limit = [250000, 400000, 800000, 2000000, 8000000, 2000000];
    const deductions = {
        bracket1: 0, 
        bracket2: 0, 
        bracket3: 22500, 
        bracket4: 102500, 
        bracket5: 402500, 
        bracket6: 2202500
    }

    function Deduct() {

        if (gross <= limit[0]) {
            let taxable = gross - deductions.bracket1;
            let result = gross - (taxable * taxRates[0]);
            return result;

        } else if (gross >= limit[0] + 1 && gross <= limit[1]) {
            let taxable = gross - limit[0] ;
            let result = gross - (taxable * taxRates[1]) - deductions.bracket2;
            return result;

        } else if (gross >= limit[1] + 1 && gross <= limit[2]) {
            let taxable =  gross - limit[1];
            let result = gross - (taxable * taxRates[2]) - deductions.bracket3;
            return result;
        } else if (gross >= limit[2] + 1 && gross <= limit[3]) {
            let taxable =  gross - limit[2];
            let result = gross - (taxable * taxRates[3]) - deductions.bracket4;
            return result;
        } else if (gross >= limit[3] + 1 && gross <= limit[4]) {
            let taxable =  gross - limit[3];
            let result = gross - (taxable * taxRates[4]) - deductions.bracket5;
            return result;
        } else if (gross >= limit[4] + 1 && gross <= limit[5]) {
            let taxable =  gross - limit[4];
            let result = gross - (taxable * taxRates[5]) - deductions.bracket6;
            return result;
        }
    }

    function TaxRate() {
            if (gross <= limit[0]) {
                return taxRates[0]; // 0%
            } else if (gross >= limit[0] + 1 && gross <= limit[1]) {
                return taxRates[1]; // 15%
            } else if (gross >= limit[1] + 1 && gross <= limit[2]) {
                return taxRates[2]; // 20%
            } else if (gross >= limit[2] + 1 && gross <= limit[3]) {
                return taxRates[3]; // 25%
            } else if (gross >= limit[3] + 1 && gross <= limit[4]) {
                return taxRates[4]; // 30%
            } else if (gross >= limit[4] + 1 && gross <= limit[5]) {
                return taxRates[5]; // 35%
            } 
    }

    function Deduction() {
        if (gross <= limit[0]) {
            return deductions.bracket1; // 0%
        } else if (gross >= limit[0] + 1 && gross <= limit[1]) {
            return deductions.bracket2; // 15%
        } else if (gross >= limit[1] + 1 && gross <= limit[2]) {
            return deductions.bracket3; // 20%
        } else if (gross >= limit[2] + 1 && gross <= limit[3]) {
            return deductions.bracket4; // 25%
        } else if (gross >= limit[3] + 1 && gross <= limit[4]) {
            return deductions.bracket5; // 30%
        } else if (gross >= limit[4] + 1 && gross <= limit[5]) {
            return deductions.bracket6; // 35%
        } 
}

    const rate = TaxRate();
    const annual_net = Deduct();
    const monthly_net =  annual_net / 12;
    const total_tax = gross - Deduct();
    const deducted = Deduction();

    initial.textContent = `Your Gross Income input is ${gross}.`
    tax_rate.textContent = `The Tax Rate based on the Annual Gross is ${rate * 100}%.`
    tax_result.textContent = `The Total Tax deducted is ${deducted} (Fixed) + ${total_tax}.`;
    annual_result.textContent = `The Annual Net Income is ${annual_net}.`;
    monthly_result.textContent = `The Monthly Net Income is ${monthly_net}.`;

    // Testing only
    console.log(rate);
    console.log(total_tax);
    console.log(annual_net);
    console.log(monthly_net);
    console.log("Let's go!");
});

