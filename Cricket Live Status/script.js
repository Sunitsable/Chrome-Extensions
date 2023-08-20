fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json())
    .then(data => {
        const jokeText = data.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = "Failed to fetch a joke. Please try again later.";
    });
