// Add event listeners to the report boxes
const reportBoxes = document.querySelectorAll('.report-box');

reportBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    // Add code here to handle the click event
    console.log('Report box clicked');
  });
});

// Add code to fetch and display report details
const reportDetailsBox = document.querySelector('.report-box:first-child');

// Sample data for report details
const reportDetails = [
  { name: 'Report 1', date: '2022-01-01' },
  { name: 'Report 2', date: '2022-01-15' },
  { name: 'Report 3', date: '2022-02-01' },
];

// Function to display report details
function displayReportDetails(details) {
  const reportList = document.createElement('ul');
  details.forEach((report) => {
    const reportListItem = document.createElement('li');
    reportListItem.textContent = `${report.name} - ${report.date}`;
    reportList.appendChild(reportListItem);
  });
  reportDetailsBox.appendChild(reportList);
}

// Display report details
displayReportDetails(reportDetails);

// Add code to fetch and display doctor details
const doctorDetailsBox = document.querySelector('.report-box:nth-child(2)');

// Sample data for doctor details
const doctorDetails = [
  { name: 'Doctor 1', specialty: 'Cardiology' },
  { name: 'Doctor 2', specialty: 'Neurology' },
  { name: 'Doctor 3', specialty: 'Oncology' },
];

// Function to display doctor details
function displayDoctorDetails(details) {
  const doctorList = document.createElement('ul');
  details.forEach((doctor) => {
    const doctorListItem = document.createElement('li');
    doctorListItem.textContent = `${doctor.name} - ${doctor.specialty}`;
    doctorList.appendChild(doctorListItem);
  });
  doctorDetailsBox.appendChild(doctorList);
}

// Display doctor details
displayDoctorDetails(doctorDetails);

// Add code to fetch and display activity details
const activityDetailsBox = document.querySelector('.report-box:nth-child(3)');

// Sample data for activity details
const activityDetails = [
  { name: 'Activity 1', date: '2022-01-01' },
  { name: 'Activity 2', date: '2022-01-15' },
  { name: 'Activity 3', date: '2022-02-01' },
];

// Function to display activity details
function displayActivityDetails(details) {
  const activityList = document.createElement('ul');
  details.forEach((activity) => {
    const activityListItem = document.createElement('li');
    activityListItem.textContent = `${activity.name} - ${activity.date}`;
    activityList.appendChild(activityListItem);
  });
  activityDetailsBox.appendChild(activityList);
}

// Display activity details
displayActivityDetails(activityDetails);

// Add code to fetch and display caretaker details
const caretakerDetailsBox = document.querySelector('.report-box:last-child');

// Sample data for caretaker details
const caretakerDetails = [
  { name: 'Caretaker 1', contact: '1234567890' },
  { name: 'Caretaker 2', contact: '9876543210' },
];

// Function to display caretaker details
function displayCaretakerDetails(details) {
  const caretakerList = document.createElement('ul');
  details.forEach((caretaker) => {
    const caretakerListItem = document.createElement('li');
    caretakerListItem.textContent = `${caretaker.name} - ${caretaker.contact}`;
    caretakerList.appendChild(caretakerListItem);
  });
  caretakerDetailsBox.appendChild(caretakerList);
}

// Display caretaker details
displayCaretakerDetails(caretakerDetails);