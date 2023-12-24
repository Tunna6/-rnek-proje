document.getElementById('registerForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);

    window.location.href = 'giriş.html'


})