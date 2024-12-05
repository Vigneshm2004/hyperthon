// Add event listener to the schemes list
document.getElementById('schemes-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        // Add code to handle the click event on a scheme item
        console.log('Scheme item clicked:', event.target.textContent);
    }
});

// Add event listener to the latest news list
document.getElementById('latest-news-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        // Add code to handle the click event on a latest news item
        console.log('Latest news item clicked:', event.target.textContent);
    }
});