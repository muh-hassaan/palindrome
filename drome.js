
let textInput = document.querySelector('#text-input');
let checkBtn = document.querySelector('#check-btn');
let result = document.querySelector('#result');

checkBtn.addEventListener('click', () => {
    let input = textInput.value.trim();

    
    if (input === '') {
        alert('Please input a value');
    } else {
 
        let cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reversedInput = cleanedInput.split('').reverse().join('');

        
        if (cleanedInput === reversedInput) {
            result.textContent = `${input} is a palindrome`;
        } else {
            result.textContent = `${input} is not a palindrome`;
        }
    }
});