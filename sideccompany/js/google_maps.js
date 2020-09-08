function initMap() {
  var marker_sidec = {lat: 50.459473, lng: 30.338255};
  var marker_Sidecsec = {lat: 50.459473, lng: 30.338255};
  var marker_center = {lat: 50.459473, lng: 30.338255};

  var map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 13,
    center: marker_center
  });

  var content_sidec = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">Sidec</h4>'+
            '<div id="bodyContent">'+
            '<p>офис Сидек <b><i></i></b>.<br />' +
            '<b>ул Н. Ушакова</b><br />'+
            '</div>'+
            '</div>';

  var infowindow_sidec = new google.maps.InfoWindow({
          content: content_sidec
        });

  var content_sidec = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">СИДЕК - КИЕВ</h4>'+
            '<div id="bodyContent">'+
            '<p>Офис СИДЕК <br /><b><i>Киев/i></b>.<br />' +
            '<b>ул Н. Ушакова</b><br />'+
            '</div>'+
            '</div>';

  var infowindow_sidec = new google.maps.InfoWindow({
          content: content_sidec
        });

  var marker_orbi = new google.maps.Marker({
    position: marker_sidec,
    map: map,
    title: 'СИДЕК'
  });
  marker_orbi.addListener('click', function() {
    infowindow_orbi.open(map, marker_orbi);
  });

  var marker_Sidecsec = new google.maps.Marker({
    position: marker_Sidecsec,
    map: map,
    title: 'СИДЕК'
  });
  marker_Sidecsec.addListener('click', function() {
    infowindow_sidec.open(map, marker_kupiec);
  });
}
