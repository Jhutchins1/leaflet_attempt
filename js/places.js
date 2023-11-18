
places = [{"placeName":"AmericanAirlines Arena","descrip":"The Miami Heat play here","latitude":25.7814,"longitude":-80.187},
 {"placeName":"Amway Center","descrip":"The Orlando Magic play here","latitude":28.5392,"longitude":-81.3839},
 {"placeName":"Yuengling Center","descrip":"The Tampa Bay Raptors play here","latitude":28.0596,"longitude":-82.4137},
 {"placeName":"Stephen C. O'Connell Center","descrip":"The Florida Gators play here","latitude":29.6516,"longitude":-82.3394},
 {"placeName":"Donald Tucker Civic Center","descrip":"The Florida State Seminoles play here","latitude":30.4374,"longitude":-84.3093},
 {"placeName":"Watsco Center","descrip":"The Miami Hurricanes play here","latitude":25.7195,"longitude":-80.2772},
 {"placeName":"Addition Financial Arena","descrip":"The UCF Knights play here","latitude":28.6019,"longitude":-81.2002},
 {"placeName":"Yuengling Center ","descrip":"The USF Bulls play here","latitude":28.0596,"longitude":-82.4137},
 {"placeName":"Swisher Gymnasium","descrip":"The Jacksonville Dolphins play here","latitude":30.3358,"longitude":-81.6035},
 {"placeName":"Jenkins Field House","descrip":"The Florida Southern Moccasins play here","latitude":28.0395,"longitude":-81.9516},
 {"placeName":"Theodore Gibson Health Center","descrip":"The Miami Dade College Sharks play here","latitude":25.6964,"longitude":-80.3546},
 {"placeName":"Billy Harrison Field House","descrip":"The Gulf Coast Commodores play here","latitude":30.1904,"longitude":-85.6845},
 {"placeName":"Al Lawson Center ","descrip":"The Florida A&M Rattlers play here ","latitude":30.4382,"longitude":-84.3115},
 {"placeName":"Alfond Sports Center ","descrip":"The Rollins College Tars play here","latitude":28.5961,"longitude":-81.3463},
 {"placeName":"Edmunds Center","descrip":"The Stetson Hatters play here","latitude":29.0273,"longitude":-81.3018},
 {"placeName":"Rubin Arena","descrip":"The Palm Beach Sailfish play here","latitude":26.7069,"longitude":-80.0493},
 {"placeName":"ICI Center","descrip":"The Embry-Riddle Eagles play here","latitude":29.1956,"longitude":-81.0419},
 {"placeName":"Bucky Dent Gymnasium ","descrip":"The Florida National Conquistadors play here","latitude":25.8616,"longitude":-80.3256},
 {"placeName":"Rick Case Arena ","descrip":"The Nova Southeastern Sharks play here ","latitude":26.0774,"longitude":-80.2426},
 {"placeName":"FAU Arena","descrip":"The Florida Atlantic Owls play here","latitude":26.3663,"longitude":-80.1002},
 {"placeName":"Ocean Bank Convocation Center ","descrip":"The Florida International Panthers play here","latitude":25.7576,"longitude":-80.3773}]


var map = L.map('map').setView([28.538538, -83.429899], 6.18);



L.tileLayer('https://api.mapbox.com/styles/v1/jhutchins1/cloykrfp500la01nw0fw7hykq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiamh1dGNoaW5zMSIsImEiOiJjbG95azdjaXcwNTU0MmlvcDZrNDlteXZ4In0.J1g_4kPzzP9NQiXEluxNYQ', {attribution: '© OpenStreetMap contributors'
}).addTo(map);


for ( let i = 0; i < places.length; i++ ) {
    L.marker( [ places[i].latitude, places[i].longitude ] ) .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>') .addTo( map );
 }
 
 
 
 