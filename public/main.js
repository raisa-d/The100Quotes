const update = document.querySelector('#update-button');

update.addEventListener('click', fetchQuote);

async function fetchQuote() {
    try {
        // send put request
        const res = await fetch('/quotes', {
            method: 'put',
            // tell server we're sending JSON data
            headers: { 'Content-Type': 'application/json' },
            // convert data we send into JSON
            body: JSON.stringify({
                name: 'Indra Kom Trikru',
                quote: 'A warrior does not mourn those she\'s lost until after the war is won.'
            })
        });

        if(res.ok) {
            const response = await res.json();
            console.log(response);
        }

    } catch(err) {
        console.error(err);
    }
}