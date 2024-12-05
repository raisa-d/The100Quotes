const updateBtn = document.querySelector('#update-button');
const deleteBtn = document.querySelector('#delete-btn');
const messageP = document.querySelector('#message');

updateBtn.addEventListener('click', fetchQuote);
deleteBtn.addEventListener('click', deleteQuote);

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
        };

    } catch(err) {
        console.error(err);
    };
};

async function deleteQuote() {
    try {
        const res = await fetch('/quotes', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Indra Kom Trikru'
            })
        })
        if(res.ok) {
            const response = await res.json();
            if(response === 'No quote to delete') {
                messageP.textContent = response;
            } else {
                window.location.reload(true);
            };
        } else {console.log('Delete failed')};
    } catch(err) {
        console.error(err);
    };
};