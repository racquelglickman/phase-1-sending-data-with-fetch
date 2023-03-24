// Add your code here
function submitData (userName, userEmail) {
    let url = 'http://localhost:3000/users';
    
    const formData = {
        name: userName,
        email: userEmail,
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body: JSON.stringify(formData),
    }

    let body = document.querySelector('body');

    return fetch(url, configurationObject)
        .then((response) => response.json())
        .then((data) => {
            const userIdElement = document.createElement('h1')
            userIdElement.textContent = data.id;
            body.append(userIdElement);
        })
        .catch((error) => {
            const errorMessage = document.createElement('p')
            errorMessage.textContent = error.message;
            body.append(errorMessage);
        });
    
}

