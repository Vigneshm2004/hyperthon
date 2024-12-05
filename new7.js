let map;
let markers = [];
let doctorList = document.getElementById('doctor-list');
let apiKey = 'YOUR_API_KEY_HERE'; // Replace with your Google Maps API key
let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7749,-122.4194&radius=10000&type=hospital&key=${apiKey}`;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
    });

    // Add a search box to the map
    const searchBox = new google.maps.places.SearchBox(document.getElementById('search-input'));
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('search-input'));

    // Bias the search box to the map's viewport
    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    });

    // Add a listener to the search box
    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear out the old markers
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry) {
                console.log('Returned place contains no geometry');
                return;
            }

            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place
            markers.push(new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);

        // Get the list of nearby hospitals
        getNearbyHospitals(places[0].geometry.location);
    });

    // Add a listener to the find button
    document.getElementById('find-button').addEventListener('click', () => {
        const searchInput = document.getElementById('search-input');
        const location = searchInput.value;

        if (location === '') {
            alert('Please enter a location');
            return;
        }

        // Get the list of nearby hospitals
        getNearbyHospitals(location);
    });
}

function getNearbyHospitals(location) {
    // Clear the doctor list
    doctorList.innerHTML = '';

    // Get the list of nearby hospitals
    const lat = location.lat || location.geometry.location.lat();
    const lng = location.lng || location.geometry.location.lng();
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=hospital&key=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const hospitals = data.results;

            // Create a list of hospitals
            hospitals.forEach((hospital) => {
                const name = hospital.name;
                const address = hospital.vicinity;
                const rating = hospital.rating;

                const hospitalElement = document.createElement('div');
                hospitalElement.innerHTML = `
                    <h3>${name}</h3>
                    <p>Address: ${address}</p>
                    <p>Rating: ${rating}</p>
                `;

                doctorList.appendChild(hospitalElement);
            });
        })
        .catch((error) => console.error(error));
}