const bookNowButton = document.getElementById('book-now');
const patientIdInput = document.getElementById('patient-id');
const doctorHospitalSelect = document.getElementById('doctor-hospital');
const appointmentDateInput = document.getElementById('appointment-date');
const appointmentTimeInput = document.getElementById('appointment-time');
const reasonTextarea = document.getElementById('reason');
const confirmationAlert = document.getElementById('confirmation-alert');
const confirmationMessage = document.getElementById('confirmation-message');

bookNowButton.addEventListener('click', (e) => {
    e.preventDefault();
    const patientId = patientIdInput.value;
    const doctorHospital = doctorHospitalSelect.value;
    const appointmentDate = appointmentDateInput.value;
    const appointmentTime = appointmentTimeInput.value;
    const reason = reasonTextarea.value;

    if (patientId && doctorHospital && appointmentDate && appointmentTime && reason) {
        const appointmentDetails = `Patient ID: ${patientId}\nDoctor/Hospital: ${doctorHospital}\nAppointment Date: ${appointmentDate}\nAppointment Time: ${appointmentTime}\nReason: ${reason}`;
        alert(`Appointment Confirmation:\n${appointmentDetails}`);
        confirmationAlert.style.display = 'block';
        confirmationMessage.innerText = appointmentDetails;
    } else {
        alert('Please fill in all the required fields!');
    }
});