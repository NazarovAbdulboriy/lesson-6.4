fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data:', error));

function createCards(users) {
    const container = document.getElementById('user-cards-container');
    users.forEach(user => {
        // Create the card element
        const card = document.createElement('div');
        card.className = 'user-card';
        // Add user information to the card
        const name = document.createElement('h2');
        name.textContent = user.name;
        const username = document.createElement('p');
        username.textContent = `Username: ${user.username}`;
        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;
        // Append elements to the card card.appendChild(name);
        card.appendChild(username);
        card.appendChild(email);
        // Append the card to the container
        container.appendChild(card);
    });
}










// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});

// // script.js
// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton');

//     // Saqlangan holatni yuklash
//     if (localStorage.getItem('darkMode') === 'enabled') {
//         document.body.classList.add('dark-mode');
//     }

//     toggleButton.addEventListener('click', function () {
//         document.body.classList.toggle('dark-mode');

//         // Holatni saqlash
//         if (document.body.classList.contains('dark-mode')) {
//             localStorage.setItem('darkMode', 'enabled');
//         } else {
//             localStorage.setItem('darkMode', 'disabled');
//         }
//     });
// });