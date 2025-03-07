
document.getElementById('generateBtn').addEventListener('click', ()=>{
    function generatePassword() {
        const length = 14;
        const characters = [
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            '0','1','2','3','4','5','6','7','8','9',
            '$','!','@','#','%','^','&','*','(',')'
        ];

        let password = '';

        for (let i = 0; i < length; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        document.getElementById('password').value = password;
    }
    generatePassword();
});

document.getElementById('copyBtn').addEventListener('click', function copyPassword(){

    password.select();
    document.execCommand("copy");
    document.getElementById('notification').style.display = "none";

    setTimeout(() => {
        document.getElementById('notification').style.display = "block";
    }, 2000);

    });