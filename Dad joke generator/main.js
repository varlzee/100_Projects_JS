document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");
    const generateBtn = document.getElementById("generateBtn");

    // Function to fetch and display a new quote
    async function fetchQuote() {
        try {
            quoteText.textContent = "Loading...";
            authorText.textContent = "";

            let response = await fetch("https://api.quotable.io/random");
            let data = await response.json();

            quoteText.textContent = `"${data.content}"`;
            authorText.textContent = `- ${data.author}`;
        } catch (error) {
            quoteText.textContent = "Failed to fetch quote.";
            authorText.textContent = "";
            console.error("Error fetching quote:", error);
        }
    }

    generateBtn.addEventListener("click", fetchQuote);

    // Fetch a quote on page load
    fetchQuote();
});
