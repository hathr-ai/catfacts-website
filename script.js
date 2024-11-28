async function getCatFact() {
    // The API URL for random cat facts
    const apiURL = "https://catfact.ninja/fact";

    try {
        // Fetch data from the API
        const response = await fetch(apiURL);
        const data = await response.json();

        // Update the webpage with the cat fact
        document.getElementById("cat-fact").textContent = data.fact;
    } catch (error) {
        // If something goes wrong, show an error
        document.getElementById("cat-fact").textContent = "Oops! Couldn't get a cat fact.";
    }
}
