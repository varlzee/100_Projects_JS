const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getJoke() {
    try {
        // Show loading effect
        jokeText.textContent = "Loading...";
        jokeBtn.textContent = "Fetching...";
        jokeBtn.disabled = true;

        // Fetch joke from API
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
        });

        const data = await response.json();
        jokeText.textContent = data.joke; // Display joke

    } catch (error) {
        jokeText.textContent = "Oops! Something went wrong 😢";
    } finally {
        // Reset button after fetching
        jokeBtn.textContent = "Get a Joke";
        jokeBtn.disabled = false;
    }
}

jokeBtn.addEventListener("click", getJoke);