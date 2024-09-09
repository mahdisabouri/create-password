document.getElementById('generate').addEventListener('click', function() {  
    const length = document.getElementById('length').value;  
    const result = generatePassword(length);  
    document.getElementById('result').textContent = result;  
});  

function generatePassword(length) {  
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";  
    let password = '';  
    for (let i = 0; i < length; i++) {  
        const randomIndex = Math.floor(Math.random() * chars.length);  
        password += chars[randomIndex];  
    }  
    return password;  
}