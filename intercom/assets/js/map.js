function initMap() {
    var coordinates = {lat: 50.456261, lng: 30.405221},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 8
        });
}