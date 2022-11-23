function init(){

  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.97156, -87.80753);
  var skool = new google.maps.LatLng(41.93575, -87.68052);
  var tan = new google.maps.LatLng(41.97899, -87.64970);
  var mapOptions = {
    center: myLocation,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
    position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);
	
  const fd = {
    url: "images/food.png",
		scaledSize: new google.maps.Size(50,40)
  };

  const yum = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: fd,
    title: "I went to this McDonalds once",
  });
	
  const school = {
    url: "images/book.jpg",
		scaledSize: new google.maps.Size(40,40)
  };

  const edu = new google.maps.Marker({
    position: skool,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: school,
    title: "Alcott College Prep",
  });
	
  const beach = {
    url: "images/sun.png",
		scaledSize: new google.maps.Size(40,40)
  };

  const hot = new google.maps.Marker({
    position: tan,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: beach,
    title: "Foster Beach",
  });

  var contentString = '<h1>Easter Island</h1><p>Literally the Fortnite Battle Pass</p>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
    });


}

google.maps.event.addDomListener(window, 'load', init);