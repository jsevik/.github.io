function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.3289463, lng: -76.6383832},
    zoom: 12,
    scrollwheel: false,
    disableDefaultUI: true,
    draggable: false,
    styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
  });
    
    
    var markerImage = 'images/location.svg';
    
    var marker = new google.maps.Marker({
    position: {lat: 39.3333706, lng: -76.632607},
    map: map,
    icon: markerImage,
    title: 'You found me!'
  });
}