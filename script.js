    fetch('https://fakestoreapi.com/products?limit=10')
        .then(response => response.json())
        .then(data => createCards(data))

    function createCards(users) {
        const container = document.getElementById('user-cards-container');
        users.forEach((user) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const id = document.createElement('h2')
            id.textContent = `Id: ${user.id}`;
            id.classList.add('text')

            const title = document.createElement('h4')
            title.textContent = `Title: ${user.title}`;
            title.classList.add('text')

            const price = document.createElement('p');
            price.textContent = `Price: ${user.price}`;
            price.classList.add('text')

            const description = document.createElement('p')
            description.textContent = `Description: ${user.description}`;
            description.classList.add('text')

            card.appendChild(id);
            card.appendChild(title);
            card.appendChild(price)
            card.appendChild(description);

            container.appendChild(card)
        })
    }