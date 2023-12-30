function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

// To call the addingEventListener function to activate the event listener
addingEventListener();
