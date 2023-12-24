document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault()

    const enteredUsername = document.getElementById('loginUsername').value;
    const enteredPassword = document.getElementById('loginPassword').value;

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        window.location.href = 'blog.html'
    } else {
        alert('kullanıcı adı veya şifre hatalı!')
    }

})