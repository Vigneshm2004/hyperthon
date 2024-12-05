document.addEventListener("DOMContentLoaded", function() {
    // Create a button and add it to the main section
    const button = document.createElement("button");
    button.textContent = "Learn More About Polio";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    
    // Add a click event listener to the button
    button.addEventListener("click", function() {
        alert("Polio is a preventable viral infection. Vaccination is the key to prevention!");
    });

    // Append the button to the main section
    const mainSection = document.querySelector("main");
    mainSection.appendChild(button);
});