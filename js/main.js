var map = L.map('map').setView([27.991661, -81.945541], 13);



L.tileLayer('https://api.mapbox.com/styles/v1/jhutchins1/cloykrfp500la01nw0fw7hykq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiamh1dGNoaW5zMSIsImEiOiJjbG95azdjaXcwNTU0MmlvcDZrNDlteXZ4In0.J1g_4kPzzP9NQiXEluxNYQ', {attribution: '© OpenStreetMap contributors'
}).addTo(map);

let marker1 = L.marker([27.971750, -81.934940]).addTo(map);
marker1.bindPopup("<b>My home in Lakeland, Florida.</b>");

let marker2 = L.marker([27.981670, -81.948240]).addTo(map);
marker2.bindPopup("<b>The gas station my brother and I biked to for candy as kids.</b>");

let marker3 = L.marker([27.997930, -81.947540]).addTo(map);
marker3.bindPopup("<b>The YMCA I first started working out at.</b>");

let marker4 = L.marker([27.981371, -81.957603]).addTo(map);
marker4.bindPopup("<b>The Chick-Fil-A I worked at for four years.</b>");








