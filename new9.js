// Array of doctors offering video consultations
const doctors = [
    { name: "Dr. John Smith", specialty: "Cardiologist", hospital: "City Hospital", consultationTime: "9 AM - 5 PM" },
    { name: "Dr. Jane Doe", specialty: "Pediatrician", hospital: "Children's Health", consultationTime: "10 AM - 6 PM" },
    { name: "Dr. Emily Johnson", specialty: "Orthopedic", hospital: "Health Center", consultationTime: "8 AM - 4 PM" },
    { name: "Dr. Michael Brown", specialty: "Dermatologist", hospital: "Skin Clinic", consultationTime: "11 AM - 7 PM" },
    { name: "Dr. Sarah Davis", specialty: "Neurologist", hospital: "Brain Care", consultationTime: "12 PM - 8 PM" },
    { name: "Dr. David Wilson", specialty: "General Practitioner", hospital: "Town Clinic", consultationTime: "9 AM - 3 PM" },
    { name: "Dr. Lisa Miller", specialty: "Gynecologist", hospital: "Women's Health", consultationTime: "10 AM - 5 PM" },
    { name: "Dr. James Garcia", specialty: "Oncologist", hospital: "Cancer Center", consultationTime: "1 PM - 6 PM" },
    { name: "Dr. Patricia Martinez", specialty: "ENT Specialist", hospital: "Ear Nose Throat Clinic", consultationTime: "9 AM - 5 PM" },
    { name: "Dr. Robert Rodriguez", specialty: "Endocrinologist", hospital: "Diabetes Care", consultationTime: "10 AM - 4 PM" },
];

// Function to populate doctor cards
function populateDoctors() {
    const doctorContainer = document.getElementById('doctor-container');

    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        
        doctorCard.innerHTML = `
            <h3>${doctor.name}</h3>
            <p><strong>Specialty:</strong> ${doctor.specialty}</p>
            <p><strong>Hospital:</strong> ${doctor.hospital}</p>
            <p><strong>Consultation Time:</strong> ${doctor.consultationTime}</p>
        `;
        
        doctorContainer.appendChild(doctorCard);
    });
}

// Call the function to populate doctors on page load
window.onload = populateDoctors;