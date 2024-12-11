const quoteElement = document.getElementById('quote-text');
const quoteNumber = document.getElementById('quote-number');
const fetchQuoteBtn = document.getElementById('cta');


fetchQuoteBtn.addEventListener('click', getQuotes)

async function getQuotes() {
    let apiUrl = `https://api.adviceslip.com/advice`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        quoteNumber.textContent = data.slip.id
        quoteElement.textContent = `"${data.slip.advice}"`
    } catch (error) {
        console.log(error) 
    }
}