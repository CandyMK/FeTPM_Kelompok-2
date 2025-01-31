document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const inputGroupName = document.querySelector('input[placeholder="Group Name..."]').value.trim();
        const inputPassword = document.querySelector('input[placeholder="Password..."]').value;

        try {
            const response = await fetch('http://127.0.0.1:5500/Login-Page.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ groupName: inputGroupName, password: inputPassword })
            });

            const data = await response.json();

            if (data.success) {
                alert('Login Successful!');
                localStorage.setItem('loggedInUser', JSON.stringify(data.user));
                window.location.href = 'userDashboard.html'; 
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    });
});
