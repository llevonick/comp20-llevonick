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
orangeStations["North"] = {lat:42.366413, lng:-71.062144};
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
        strokeColor: '#E1981F',
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

// Top half of Commuter Rail stations and polyline
purpleStations = {}
purpleStations["North"] = {lat:42.366413, lng:-71.062144};
purpleStations["Porter Sqaure"] = {lat:42.3884, lng:-71.11914899999999};
purpleStations["Belmont"] = {lat:42.395906, lng:-71.176246};
purpleStations["Waverley"] = {lat:42.387486, lng:-71.190800};
purpleStations["Waltham"] = {lat:42.374362, lng:-71.235577};
purpleStations["Brandeis/Roberts"] = {lat:42.361869, lng:-71.260119};
purpleStations["Kendal Green"] = {lat:42.378959, lng:-71.282462};
purpleStations["Hastings"] = {lat:42.385758, lng:-71.289178};
purpleStations["Silver Hill"] = {lat:42.395616, lng:-71.302359};
purpleStations["Lincoln"] = {lat:42.414288, lng:-71.325388};
purpleStations["Concord"] = {lat:42.456635, lng:-71.357478};
purpleStations["West Concord"] = {lat:42.457079, lng:-71.392862};
purpleStations["South Acton"] = {lat:42.460498, lng:-71.457686};
purpleStations["Littleton/495"] = {lat:42.520624, lng:-71.502961};
purpleStations["Ayer"] = {lat:42.558995, lng:-71.589200};
purpleStations["Shirley"] = {lat:42.545069, lng:-71.648130};
purpleStations["North Leominster"] = {lat:42.539070, lng:-71.739167};
purpleStations["Fitchburg"] = {lat:42.580890, lng:-71.792758};
purpleStations["Wachusett"] = {lat:42.558480, lng:-71.845224};
//beginning of seg B (off of North)
purpleStations["West Medford"] = {lat:42.421825, lng:-71.133291};
purpleStations["Wedgemere"] = {lat:42.444662, lng:-71.140262};
purpleStations["Winchester Center"] = {lat:42.451296, lng:-71.137832};
purpleStations["Mishawum"] = {lat:42.502976, lng:-71.137035};
purpleStations["Anderson/Woburn"] = {lat:42.517362, lng:-71.144218};
purpleStations["Wilmington"] = {lat:42.546623, lng:-71.174355};
purpleStations["North Billerica"] = {lat:42.593169, lng:-71.281134};
purpleStations["Lowell"] = {lat:42.637100, lng:-71.315359};
//beginning of seg C (off of North)
purpleStations["Malden Center"] = {lat:42.426847, lng:-71.074291};
purpleStations["Wyoming Hill"] = {lat:42.451719, lng:-71.069379};
purpleStations["Melrose/Cedar Park"] = {lat:42.458728, lng:-71.069864};
purpleStations["Greenwood"] = {lat:42.483001, lng:-71.067248};
purpleStations["Wakefield"] = {lat:42.502180, lng:-71.075612};
purpleStations["Reading"] = {lat:42.521604, lng:-71.107477};
purpleStations["North Wilmington"] = {lat:42.569757, lng:-71.159791};
purpleStations["Ballardvale"] = {lat:42.627420, lng:-71.160029};
purpleStations["Andover"] = {lat:42.657930, lng:-71.144719};
purpleStations["Lawrence"] = {lat:42.701831, lng:-71.152251};
purpleStations["Bradford"] = {lat:42.766971, lng:-71.088404};
purpleStations["Haverhill"] = {lat:42.773438, lng:-71.086504};
//beginning of seg D (off of North)
purpleStations["Chelsea"] = {lat:42.395672, lng:-71.034306};
purpleStations["River Works"] = {lat:42.449945, lng:-70.969854};
purpleStations["Lynn"] = {lat:42.462381, lng:-70.945693};
purpleStations["Swampscott"] = {lat:42.473724, lng:-70.922580};
purpleStations["Salem"] = {lat:42.524761, lng:-70.896316};
purpleStations["Beverly"] = {lat:42.547276, lng:-70.885458};
purpleStations["Montserrat"] = {lat:42.562182, lng:-70.869225};
purpleStations["Prides Crossing"] = {lat:42.559447, lng:-70.825602};
purpleStations["Beverly Farms"] = {lat:42.561676, lng:-70.811375};
purpleStations["Manchester"] = {lat:42.573718, lng:-70.770112};
purpleStations["West Gloucester"] = {lat:42.611946, lng:-70.705396};
purpleStations["Gloucester"] = {lat:42.616810, lng:-70.668360};
purpleStations["Rockport"] = {lat:42.655485, lng:-70.627075};
//beginning of seg E (off of Beverly)
purpleStations["North Beverly"] = {lat:42.583774, lng:-70.883873};
purpleStations["Hamilton/Wenham"] = {lat:42.609300, lng:-70.874818};
purpleStations["Ipswich"] = {lat:42.676981, lng:-70.840571};
purpleStations["Rowley"] = {lat:42.726938, lng:-70.859111};
purpleStations["Newburyport"] = {lat:42.797263, lng:-70.877693};

purpleStationNames = Object.keys(purpleStations);

purpSegA = [];
purpSegB = [];
purpSegC = [];
purpSegD = [];
purpSegE = [];

purpSegB.push(purpleStations["North"]);
purpSegC.push(purpleStations["North"]);
purpSegD.push(purpleStations["North"]);
purpSegE.push(purpleStations["Beverly"]);

function purplePolyline(map){
    var SegDone = 0;

    for(var i = 0; i < purpleStationNames.length; i++){
        if(SegDone == 0){
            purpSegA.push(purpleStations[purpleStationNames[i]]);
            if(purpleStationNames[i] == "Wachusett"){
                SegDone += 1;
            }
        }
        else if(SegDone == 1){
            purpSegB.push(purpleStations[purpleStationNames[i]]);
            if(purpleStationNames[i] == "Lowell"){
                SegDone += 1;
            }
        }
        else if(SegDone == 2){
            purpSegC.push(purpleStations[purpleStationNames[i]]);
            if(purpleStationNames[i] == "Haverhill"){
                SegDone += 1;
            }
        }
        else if(SegDone == 3){
            purpSegD.push(purpleStations[purpleStationNames[i]]);
            if(purpleStationNames[i] == "Rockport"){
                SegDone += 1;
            }
        }
        else{
            purpSegE.push(purpleStations[purpleStationNames[i]]);
        }
    }

    PurplePathA = new google.maps.Polyline({
        path: purpSegA,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    PurplePathB = new google.maps.Polyline({
        path: purpSegB,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    PurplePathC = new google.maps.Polyline({
        path: purpSegC,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    PurplePathD = new google.maps.Polyline({
        path: purpSegD,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    PurplePathE = new google.maps.Polyline({
        path: purpSegE,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    PurplePathA.setMap(map);
    PurplePathB.setMap(map);
    PurplePathC.setMap(map);
    PurplePathD.setMap(map);
    PurplePathE.setMap(map);
}

// Bottom half of Commuter Rail stations and polyline
comRailStations = {}
comRailStations["South Station"] = {lat:42.352271, lng:-71.05524200000001};
comRailStations["Back Bay"] = {lat:42.347403, lng:-71.075565};
comRailStations["Yawkey"] = {lat:42.347512, lng:-71.099848};
comRailStations["Newtonville"] = {lat:42.351607, lng:-71.207333};
comRailStations["West Newton"] = {lat:42.347902, lng:-71.230628};
comRailStations["Auburndale"] = {lat:42.345935, lng:-71.250283};
comRailStations["Wellesley Farms"] = {lat:42.323253, lng:-71.271998};
comRailStations["Wellesley Hills"] = {lat:42.310305, lng:-71.276976};
comRailStations["Wellesley Sqaure"] = {lat:42.297562, lng:-71.294207};
comRailStations["Natick Center"] = {lat:42.285784, lng:-71.347079};
comRailStations["West Natick"] = {lat:42.283117, lng:-71.391753};
comRailStations["Framingham"] = {lat:42.276132, lng:-71.419648};
comRailStations["Ashland"] = {lat:42.261619, lng:-71.482477};
comRailStations["Southborough"] = {lat:42.267050, lng:-71.523933};
comRailStations["Westborough"] = {lat:42.269654, lng:-71.647057};
comRailStations["Grafton"] = {lat:42.246622, lng:-71.685322};
comRailStations["Worcester"] = {lat:42.261258, lng:-71.794917};
//beginning of seg B (off of Back Bay)
comRailStations["Ruggles"] = {lat:42.336646, lng:-71.089398};
comRailStations["Hyde Park"] = {lat:42.254762, lng:-71.125569};
comRailStations["Readville"] = {lat:42.238365, lng:-71.133256};
comRailStations["Endicott"] = {lat:42.233281, lng:-71.158447};
comRailStations["Dedham Corp Center"] = {lat:42.227037, lng:-71.174197};
comRailStations["Islington"] = {lat:42.221063, lng:-71.183939};
comRailStations["Norwood Depot"] = {lat:42.196403, lng:-71.196910};
comRailStations["Norwood Central"] = {lat:42.188741, lng:-71.199871};
comRailStations["Windsor Gardens"] = {lat:42.171957, lng:-71.219602};
comRailStations["Plimptonville"] = {lat:42.159154, lng:-71.236124};
comRailStations["Walpole"] = {lat:42.145298, lng:-71.257925};
comRailStations["Norfolk"] = {lat:42.120801, lng:-71.325141};
comRailStations["Franklin/Dean College"] = {lat:42.083339, lng:-71.396445};
comRailStations["Forge Park/495"] = {lat:42.089837, lng:-71.439103};
//beginning of seg C (off of Ruggles)
comRailStations["Forest Hills"] = {lat: 42.300815, lng:-71.113725};
comRailStations["Roslindale Village"] = {lat:42.287522, lng:-71.130271};
comRailStations["Bellevue"] = {lat:42.286637, lng:-71.145575};
comRailStations["Highland"] = {lat:42.285002, lng:-71.153998};
comRailStations["West Roxbury"] = {lat:42.281366, lng:-71.160113};
comRailStations["Hersey"] = {lat:42.275675, lng:-71.215517};
comRailStations["Needham Junction"] = {lat:42.273230, lng:-71.235601};
comRailStations["Needham Center"] = {lat:42.281061, lng:-71.237591};
comRailStations["Needham Heights"] = {lat:42.293439, lng:-71.235976};
//beginning of seg D (off of South Station)
comRailStations["Newmarket"] = {lat:42.326725, lng:-71.066303};
comRailStations["Uphams Corner"] = {lat:42.319137, lng:-71.068701};
comRailStations["Four Corners/Geneva"] = {lat:42.305045, lng:-71.076831};
comRailStations["Talbot Avenue"] = {lat:42.292255, lng:-71.078143};
comRailStations["Morton Street"] = {lat:42.280984, lng:-71.085470};
comRailStations["Fairmount"] = {lat:42.253660, lng:-71.119304};
comRailStations["Route 128"] = {lat:42.210308, lng:-71.147569};
comRailStations["Canton Center"] = {lat:42.157069, lng:-71.146310};
comRailStations["Stoughton"] = {lat:42.123910, lng:-71.103151};
//beginning of seg E (off of Canton Center)
comRailStations["Sharon"] = {lat:42.124703, lng:-71.184070};
comRailStations["Mansfield"] = {lat:42.032406, lng:-71.220027};
comRailStations["Attleboro"] = {lat:41.940768, lng:-71.285098};
comRailStations["South Attleboro"] = {lat:41.897938, lng:-71.354031};
comRailStations["Providence"] = {lat:41.829222, lng:-71.413116};
comRailStations["TF Green"] = {lat:41.725714, lng:-71.436812};
comRailStations["Wickford Junction"] = {lat:41.580886, lng:-71.491469};
//beginning of seg F (off of South Station)
comRailStations["JFK/UMass"] = {lat:42.320685, lng:-71.052391};
comRailStations["Quincy Center"] = {lat:42.251809, lng:-71.005409};
comRailStations["Braintree"] = {lat:42.2078543, lng:-71.0011385};
comRailStations["Holbrook/Randolph"] = {lat:42.156365, lng:-71.027333};
comRailStations["Montello"] = {lat:42.106539, lng:-71.021993};
comRailStations["Brockton"] = {lat:42.085737, lng:-71.016591};
comRailStations["Campello"] = {lat:42.060962, lng:-71.011095};
comRailStations["Bridgewater"] = {lat:41.984918, lng:-70.965393};
comRailStations["Middleborough/Lakeville"] = {lat:41.878219, lng:-70.918191};
//beginning of seg G (off of Braintree)
comRailStations["South Weymouth"] = {lat:42.154858, lng:-70.953259};
comRailStations["Abington"] = {lat:42.107158, lng:-70.934398};
comRailStations["Whitman"] = {lat:42.082765, lng:-70.923401};
comRailStations["Hanson"] = {lat:42.043975, lng:-70.882438};
comRailStations["Halifax"] = {lat:42.014751, lng:-70.824245};
comRailStations["Kingston"] = {lat:41.977627, lng:-70.721779};
//beginning of seg H (off of Halifax)
comRailStations["Plymouth"] = {lat:41.981232, lng:-70.690365};
//beginning of seg I (off of Quincy Center)
comRailStations["Weymouth Landing/East Braintree"] = {lat:42.221463, lng:-70.968119};
comRailStations["East Weymouth"] = {lat:42.219088, lng:-70.921403};
comRailStations["West Hingham"] = {lat:42.235835, lng:-70.902649};
comRailStations["Nantasket Junction"] = {lat:42.244986, lng:-70.869218};
comRailStations["Cohasset"] = {lat:42.243461, lng:-70.837461};
comRailStations["North Scituate"] = {lat:42.219597, lng:-70.788666};
comRailStations["Greenbush"] = {lat:42.178744, lng:-70.746459};

comRailStationNames = Object.keys(comRailStations);

comSegA = [];
comSegB = [];
comSegC = [];
comSegD = [];
comSegE = [];
comSegF = [];
comSegG = [];
comSegH = [];
comSegI = [];

comSegB.push(comRailStations["Back Bay"]);
comSegC.push(comRailStations["Ruggles"]);
comSegD.push(comRailStations["South Station"]);
comSegE.push(comRailStations["Canton Center"]);
comSegF.push(comRailStations["South Station"]);
comSegG.push(comRailStations["Braintree"]);
comSegH.push(comRailStations["Halifax"]);
comSegI.push(comRailStations["Quincy Center"]);

function comRailPolyline(map){
    var SegDone = 0;

    for(var i = 0; i < comRailStationNames.length; i++){
        if(SegDone == 0){
            comSegA.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Worcester"){
                SegDone += 1;
            }
        }
        else if(SegDone == 1){
            comSegB.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Forge Park/495"){
                SegDone += 1;
            }
        }
        else if(SegDone == 2){
            comSegC.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Needham Heights"){
                SegDone += 1;
            }
        }
        else if(SegDone == 3){
            comSegD.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Fairmount"){
                comSegD.push(comRailStations["Readville"]);
            }
            else if(comRailStationNames[i] == "Stoughton"){
                SegDone += 1;
            }
        }
        else if(SegDone == 4){
            comSegE.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Wickford Junction"){
                SegDone += 1;
            }
        }
        else if(SegDone == 5){
            comSegF.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Middleborough/Lakeville"){
                SegDone += 1;
            }
        }
        else if(SegDone == 6){
            comSegG.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Kingston"){
                SegDone += 1;
            }
        }
        else if(SegDone == 7){
            comSegH.push(comRailStations[comRailStationNames[i]]);
            if(comRailStationNames[i] == "Plymouth"){
                SegDone += 1;
            }
        }
        else{
            comSegI.push(comRailStations[comRailStationNames[i]]);
        }
    }

    comRailPathA = new google.maps.Polyline({
        path: comSegA,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathB = new google.maps.Polyline({
        path: comSegB,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathC = new google.maps.Polyline({
        path: comSegC,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathD = new google.maps.Polyline({
        path: comSegD,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathE = new google.maps.Polyline({
        path: comSegE,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathF = new google.maps.Polyline({
        path: comSegF,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathG = new google.maps.Polyline({
        path: comSegG,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathH = new google.maps.Polyline({
        path: comSegH,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathI = new google.maps.Polyline({
        path: comSegI,
        geodesic: true,
        strokeColor: '#C3A5CC',
        strokeOpactiy: 1,
        strokeWeight: 5
    });

    comRailPathA.setMap(map);
    comRailPathB.setMap(map);
    comRailPathC.setMap(map);
    comRailPathD.setMap(map);
    comRailPathE.setMap(map);
    comRailPathF.setMap(map);
    comRailPathG.setMap(map);
    comRailPathH.setMap(map);
    comRailPathI.setMap(map);
}

// Creating the map
request = new XMLHttpRequest();
myLoc = new google.maps.LatLng(redStations["South Station"]);

options = {
    zoom: 13,
    center: myLoc,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

img = {
    url: "tmarker.png",
    scaledSize: new google.maps.Size(15, 20)
}

infowindow = new google.maps.InfoWindow();

function init(){
    map = new google.maps.Map(document.getElementById("mbta_map"), options);
    markers(map, redStations, redStationNames);
    markers(map, orangeStations, orangeStationNames);
    markers(map, blueStations, blueStationNames);
    markers(map, purpleStations, purpleStationNames);
    markers(map, comRailStations, comRailStationNames);
    purplePolyline(map);
    comRailPolyline(map);
    orangePolyline(map);
    bluePolyline(map);
    redPolyline(map);
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