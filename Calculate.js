const compute = document.querySelector("#compute");

compute.addEventListener("click", function() {
    const gross_income = document.querySelector("#gross");
    const tax_result = document.querySelector("#tax");
    const tax_rate = document.querySelector("#tax_rate")
    const monthly_result = document.querySelector("#monthly");
    const annual_result = document.querySelector("#annual");
    const gross = parseFloat(gross_income.value);

    function Deduct() {

        const tax_bracket = [250000, 400000, 800000, 2000000, 8000000];
        const fixed_deductions = [0, 0, 22500, 102500, 402500, 2202500] 

        if (gross <= 250000) {
            return gross;
        } else if (gross > 250000 <= 400000) {
            const bracket_1 = 250000;
            const taxable = gross - bracket_1;
            const tax = taxable * 0.15
            return gross - tax;
        }
    }

    function TaxRate() {
        const taxRates = [0, 15 , 20 , 25, 30 , 35];
        if (gross <= 250000) {
            return taxRates[0];
        } else if ( gross > 250000) {
            return  taxRates[1]
        }
    }

    const rate = TaxRate();
    const annual_net = Deduct(annual_result);
    const monthly_net =  annual_net / 12;
    const total_tax = gross - Deduct(annual_result);

    tax_rate.textContent = `The Tax Tate based on the annual gross is ${rate}%.`
    tax_result.textContent = `The Total Tax deducted is ${total_tax}`;
    annual_result.textContent = `The Annual Net Income is ${annual_net}.`;
    monthly_result.textContent = `The Monthly Net Income is ${monthly_net}.`;
    // Testing only
    console.log(total_tax);
    console.log(annual_net);
    console.log(monthly_net);
    console.log("Orayt. Let's go!")
});