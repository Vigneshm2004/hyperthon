// Function to show an alert when a diet plan is clicked
function showDietInfo(dietName) {
    alert("You clicked on the " + dietName + " diet plan!");
}

// Add event listeners to each diet plan
document.querySelectorAll('.diet-plan').forEach(function(plan) {
    plan.addEventListener('click', function() {
        const dietName = this.querySelector('h3').innerText;
        showDietInfo(dietName);
    });
});




function addDietImages() {
    const dietContainer = document.getElementById('diet-container');
    const diets = [
        {
            name: 'Diabetic Diet',
            image: 'dia.jpg'
        }
    ];



    diets.forEach(diet => {
        const dietItem = document.createElement('div');
        dietItem.className = 'diet-item';
        dietItem.innerHTML = `
            <img src="${diet.image}" alt="${diet.name}">
            <h3>${diet.name}</h3>
        `;
        dietContainer.appendChild(dietItem);
    });
}
