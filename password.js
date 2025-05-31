const password = 'chuj2137';
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    if (input === password) {
        window.location.href = 'real_stats.html';
    } else {
        document.getElementById('errorMsg').style.display = 'block';
    }
}