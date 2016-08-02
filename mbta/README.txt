All aspects of this assignment have been correctly implemented. The user's
location is determined and then marked on the map with a different icon than
the icons used for the Red Line stations.  Also, on the map is a mint
colored line connecting this marker to the closest Red Line station.  When the
location marker of the user is clicked the infowindow tells the user which
red line station is the closest to them and how many miles away it is. Also,
when one of the red line station markers is clicked on an infowindow appears 
that displays the upcoming trains for that station.  Finally, as a part of the
"Going Beyond" section of the assignment, there are markers on the map tha look
like mini trains which signify where the Red Line subway trains are on the map
based on the JSON data feed. Sometimes these train markers can slightly block
a Red Line station marker, making the Red Line station markers harder to click
on for infowindows; this can be fixed by simply zooming in on the map.  Also,
I figured out that the orange, blue, and commuter rail station markers could
block the red line station markers whenever the lines overlapped.  This was
causing the infowindows to not appear when the Red Line markers were clicked
on, so I commented out all marker creation other than the Red Line station's
and the Red Line train's but left all rail polylines.

I did not collaborate with anyone on this assignment.

In order to calculate the distace between 2 geopoints with the Haversine
formula for this assignment, the following link was used in order to implement
that formula in JavaScript: http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript

It took me over 7 hours to complete this assignment.