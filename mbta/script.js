// Red line stations and polyline
redStations = {}
redStations["Alewife"] = {lat:42.395428, lng:-71.142483};
redStations["Davis"] = {lat:42.39674, lng:-71.121815};
redStations["Porter Square"] = {lat:42.3884, lng:-71.11914899999999};
redStations["Harvard Square"] = {lat:42.373362, lng:-71.118956};
redStations["Central Square"] = {lat:42.365486, lng:-71.103802};
redStations["Kendall/MIT"] = {lat:42.36249079, lng:-71.08617653};
redStations["Charles/MGH"] = {lat:42.361166, lng:-71.070628};
redStations["Park Street"] = {lat:42.35639457, lng:-71.0624242};
redStations["Downtown Crossing"] = {lat:42.355518, lng:-71.060225};
redStations["South Station"] = {lat:42.352271, lng:-71.05524200000001};
redStations["Broadway"] = {lat:42.342622, lng:-71.056967};
redStations["Andrew"] = {lat:42.330154, lng:-71.057655};
redStations["JFK/UMass"] = {lat:42.320685, lng:-71.052391};
redStations["Savin Hill"] = {lat:42.31129, lng:-71.053331};
redStations["Fields Corner"] = {lat:42.300093, lng:-71.061667};
redStations["Shawmut"] = {lat:42.29312583, lng:-71.06573796000001};
redStations["Ashmont"] = {lat:42.284652, lng:-71.06448899999999};        
redStations["North Quincy"] = {lat:42.275275, lng:-71.029583};
redStations["Wollaston"] = {lat:42.2665139, lng:-71.0203369};
redStations["Quincy Center"] = {lat:42.251809, lng:-71.005409};
redStations["Quincy Adams"] = {lat:42.233391, lng:-71.007153};
redStations["Braintree"] = {lat:42.2078543, lng:-71.0011385};

redStationNames = Object.keys(redStations);

FirstRedSeg = [];
SecondRedSeg = [];

SecondRedSeg.push(redStations["JFK/UMass"]);

function redPolyline(map){
    FirstRedSegDone = 0;

    for(var i = 0; i < redStationNames.length; i++){
        if(FirstRedSegDone == 0){
            FirstRedSeg.push(redStations[redStationNames[i]]);
            if(redStationNames[i] == "Ashmont"){
                FirstRedSegDone += 1;
            }
        }
        else{
            SecondRedSeg.push(redStations[redStationNames[i]]);
        }
    }

    FirstRedLinePath = new google.maps.Polyline({
        path: FirstRedSeg,
        geodesic: true,
        strokeColor: '#FF3F4E',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    FirstRedLinePath.setMap(map);

    SecondRedLinePath = new google.maps.Polyline({
        path: SecondRedSeg,
        geodesic: true,
        strokeColor: '#FF3F4E',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    SecondRedLinePath.setMap(map);
}

// Orange line stations and polyline
orangeStations = {}
orangeStations["Oak Grove"] = {lat:42.436683, lng:-71.071097};
orangeStations["Malden Center"] = {lat:42.426847, lng:-71.074291};
orangeStations["Wellington"] = {lat:42.401665, lng:-71.077135};
orangeStations["Assembly"] = {lat:42.392739, lng:-71.077276};
orangeStations["Sullivan Sqaure"] = {lat:42.384264, lng:-71.077000};
orangeStations["Community College"] = {lat:42.373689, lng:-71.069685};
orangeStations["North Station"] = {lat:42.366413, lng:-71.062144};
orangeStations["Haymarket"] = {lat:42.362167, lng:-71.057792};
orangeStations["State"] = {lat:42.358211, lng:-71.057857};
orangeStations["Downtown Crossing"] = {lat:42.355518, lng:-71.060225};
orangeStations["Chinatown"] = {lat:42.352645, lng:-71.062398};
orangeStations["Tufts Medical Center"] = {lat:42.349664, lng:-71.063951};
orangeStations["Back Bay"] = {lat:42.347403, lng:-71.075565};
orangeStations["Massachusetts Avenue"] = {lat:42.341518, lng:-71.083553};
orangeStations["Ruggles"] = {lat:42.336646, lng:-71.089398};
orangeStations["Roxbury Crossing"] = {lat:42.331336, lng:-71.095472};
orangeStations["Jackson Square"] = {lat:42.323116, lng:-71.099783};
orangeStations["Stony Brook"] = {lat:42.317242, lng:-71.104203};
orangeStations["Green Street"] = {lat:42.310396, lng:-71.107549};
orangeStations["Forest Hills"] = {lat: 42.300815, lng:-71.113725};

orangeStationNames = Object.keys(orangeStations);

orangeLine = [];

function orangePolyline(map){
    for(var i = 0; i < orangeStationNames.length; i++){
        orangeLine.push(orangeStations[orangeStationNames[i]]);
    }

    orangeLinePath = new google.maps.Polyline({
        path: orangeLine,
        geodesic: true,
        strokeColor: '#FFA64F',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    orangeLinePath.setMap(map);
}

// Blue line stations and polyline
blueStations = {}
blueStations["Wonderland"] = {lat: 42.413648, lng:-70.991589};
blueStations["Revere Beach"] = {lat:42.407866, lng:-70.992523};
blueStations["Beachmont"] = {lat:42.397207, lng:-70.992536};
blueStations["Suffolk Downs"] = {lat:42.390503, lng:-70.997122};
blueStations["Orient Heights"] = {lat:42.386941, lng:-71.004868};
blueStations["Wood Island"] = {lat:42.379605, lng:-71.022931};
blueStations["Airport"] = {lat:42.374184, lng:-71.030457};
blueStations["Maverick"] = {lat:42.369135, lng:-71.039570};
blueStations["Aquarium"] = {lat:42.359798, lng:-71.051591};
blueStations["State"] = {lat:42.358211, lng:-71.057857};
blueStations["Government Center"] = {lat:42.359703, lng:-71.059228};
blueStations["Bowdoin"] = {lat:42.361368, lng:-71.062039};

blueStationNames = Object.keys(blueStations);

blueLine = [];

function bluePolyline(map){
    for(var i = 0; i < blueStationNames.length; i++){
        blueLine.push(blueStations[blueStationNames[i]]);
    }

    blueLinePath = new google.maps.Polyline({
        path: blueLine,
        geodesic: true,
        strokeColor: '#00008F',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    blueLinePath.setMap(map);
}

// Commuter Rail stations and polyline

// Creating the map
request = new XMLHttpRequest();
myLoc = new google.maps.LatLng(redStations["South Station"]);

options = {
    zoom: 13,
    center: myLoc,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

img = "tmarker.png";

infowindow = new google.maps.InfoWindow();
function init(){
    map = new google.maps.Map(document.getElementById("mbta_map"), options);
    markers(map, redStations, redStationNames);
    markers(map, orangeStations, orangeStationNames);
    markers(map, blueStations, blueStationNames);
    redPolyline(map);
    orangePolyline(map);
    bluePolyline(map);
}

function markers(map, stations, names){
    for(var i = 0; i < names.length; i++){
        var marker = new google.maps.Marker({
            position: stations[names[i]],
            title: names[i],
            icon: img
        });
        marker.setMap(map);
    }
}