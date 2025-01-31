document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const inputGroupName = document.querySelector('input[placeholder="Group Name..."]').value.trim();
        const inputPassword = document.querySelector('input[placeholder="Password..."]').value;

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ groupName: inputGroupName, password: inputPassword })
            });

            const data = await response.json();

            if (data.success) {
                alert('Login Successful!');
                window.location.href = 'http://localhost:8000/userDashboard';
            } else {
                showWarning('Wrong Group Name or Password!');
            }
        } catch (error) {
            console.error('Error:', error);
            showWarning('Server error! Please try again later.');
        }
    });
});
