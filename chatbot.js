document.getElementById('chat-icon').addEventListener('click', function() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'flex' : 'none';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'none';
});


document.getElementById('voiceAssistant').addEventListener('click', function() {
    console.log('Voice Assistant Activated!'); // Placeholder for voice assistant functionality
    // You can add your voice assistant logic here
});