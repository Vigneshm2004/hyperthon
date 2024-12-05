// Get the remainder elements
const remainder1 = document.getElementById('remainder-1');
const remainder2 = document.getElementById('remainder-2');
const remainder3 = document.getElementById('remainder-3');
const remainderMessage1 = document.getElementById('remainder-message-1');
const remainderMessage2 = document.getElementById('remainder-message-2');
const remainderMessage3 = document.getElementById('remainder-message-3');
const setRemainder1 = document.getElementById('set-remainder-1');
const setRemainder2 = document.getElementById('set-remainder-2');
const setRemainder3 = document.getElementById('set-remainder-3');
const addRemainder = document.getElementById('add-remainder');
const alerts = document.getElementById('alerts');

// Set event listeners for the set remainder buttons
setRemainder1.addEventListener('click', () => {
    const time = remainder1.value;
    const message = remainderMessage1.value;
    setReminder(time, message);
});

setRemainder2.addEventListener('click', () => {
    const time = remainder2.value;
    const message = remainderMessage2.value;
    setReminder(time, message);
});

setRemainder3.addEventListener('click', () => {
    const time = remainder3.value;
    const message = remainderMessage3.value;
    setReminder(time, message);
});

// Function to set a reminder
function setReminder(time, message) {
    const reminderTime = new Date();
    const timeParts = time.split(':');
    reminderTime.setHours(timeParts[0]);
    reminderTime.setMinutes(timeParts[1]);
    reminderTime.setSeconds(0);

    const currentTime = new Date();
    const timeDiff = reminderTime.getTime() - currentTime.getTime();

    setTimeout(() => {
        alert(message);
        speak(message);
    }, timeDiff);
}

// Function to speak a message
function speak(message) {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = 'en-US';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Event listener for the add remainder button
addRemainder.addEventListener('click', () => {
    const newRemainder = document.createElement('div');
    newRemainder.classList.add('remainder');
    newRemainder.innerHTML = `
        <label for="remainder-${remainderCount}">Remainder ${remainderCount}:</label>
        <input type="time" id="remainder-${remainderCount}" name="remainder-${remainderCount}">
        <input type="text" id="remainder-message-${remainderCount}" name="remainder-message-${remainderCount}" placeholder="Enter remainder message">
        <button id="set-remainder-${remainderCount}">Set</button>
    `;

    document.querySelector('.remainder-container').appendChild(newRemainder);

    const newSetRemainder = document.getElementById(`set-remainder-${remainderCount}`);
    newSetRemainder.addEventListener('click', () => {
        const time = document.getElementById(`remainder-${remainderCount}`).value;
        const message = document.getElementById(`remainder-message-${remainderCount}`).value;
        setReminder(time, message);
    });

    remainderCount++;
});

let remainderCount = 4;