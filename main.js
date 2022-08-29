const area = document.querySelector (".area");
area.innerHTML = "";
const number = document.querySelector(".number");
let oneInput;
let twoInput;
let calledOperator;

const calc = () => {
    let result;
    switch ( operator) {
        case '+':
            result = parseInt(oneInput) + parseInt(twoInput)
            break
        case '-':
            result = parseInt(oneInput) - parseInt(twoInput)
            break    
        case '/':
            result = parseInt(oneInput) / parseInt(twoInput)
            break
        case '*':
            result = parseInt(oneInput) * parseInt(twoInput)
            break
        case '%':
            result = (parseInt(oneInput)/100)*parseInt(twoInput)    
            break
        default:
            return           
    }
    twoInput = result.toString()  
}