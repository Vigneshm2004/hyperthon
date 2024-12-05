// Add event listeners to links to open in new tab
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        window.open(link.href, '_blank');
    });
});

// Add hover effect to links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', event => {
        link.style.color = '#23527c'; // darker blue color on hover
    });
    link.addEventListener('mouseout', event => {
        link.style.color = '#337ab7'; // blue color
    });
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add toggle effect to sections
document.querySelectorAll('.gov-insurance, .access-insurance, .benefits, .related-info, .insurance-options').forEach(section => {
    section.addEventListener('click', event => {
        section.classList.toggle('expanded');
        // Add animation to the expanded section
        section.classList.add('animate');
        setTimeout(() => {
            section.classList.remove('animate');
        }, 500);
    });
});

// Add animation to the expanded section
document.querySelectorAll('.expanded').forEach(section => {
    section.addEventListener('transitionend', event => {
        if (event.propertyName === 'height') {
            section.classList.remove('animate');
        }
    });
});