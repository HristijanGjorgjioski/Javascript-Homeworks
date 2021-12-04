let body = document.getElementById('root');

let createUserCard = (user) => {
  let card = document.createElement('div');
  card.className = 'card shadow cursor-pointer';
  card.style.width = "100%";

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let name = document.createElement('h5');
  name.innerText = user.name;
  name.className = 'card-title';

  let description = document.createElement('p')
  description.innerText = user.email
  description.className = "card-text"

  cardBody.appendChild(name);
  cardBody.appendChild(description);
  card.appendChild(cardBody);
  body.appendChild(card);
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => (
    users.map((user) => (
      createUserCard(user)
    )
  )
))
