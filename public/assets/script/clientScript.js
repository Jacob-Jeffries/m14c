// Client Side Script

function homeButton(event) {
    document.location.replace('/');
    return;
}

function dashboardButton(event) {
    document.location.replace('/dashboard')
    return;
}

function loginButton(event) {
    document.location.replace('/login')
    return;
}

const loginFormButton = async (event) => {
 
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email);
    console.log(password);
  
    // if (email && password) {
    //   const response = await fetch('/api/user/login', {
    //     method: 'POST',
    //     body: { email, password },
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert('Failed to log in.');
    //   }
    // }
  };