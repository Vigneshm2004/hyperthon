const patientForm = document.getElementById('patient-form');

patientForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const hospitalName = document.getElementById('hospital-name').value;
	const doctorName = document.getElementById('doctor-name').value;
	const patientId = document.getElementById('patient-id').value;
	const disease = document.getElementById('disease').value;
	const visitDate = document.getElementById('visit-date').value;
	const visitTime = document.getElementById('visit-time').value;
	const reports = document.getElementById('reports').files[0];
	const medicines = document.getElementById('medicines').files[0];
	const billReceipt = document.getElementById('bill-receipt').files[0];
	
	// TO DO: Add logic to handle file uploads and submit form data
	// For now, just alert the entered form data
	alert(`Hospital Name: ${hospitalName}\nDoctor Name: ${doctorName}\nPatient ID: ${patientId}\nDisease/Illness: ${disease}\nVisit Date: ${visitDate}\nVisit Time: ${visitTime}\nReports: ${reports.name}\nMedicines: ${medicines.name}\nBill Receipt: ${billReceipt.name}`);
});