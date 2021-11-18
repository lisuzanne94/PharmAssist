import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router";

const Map = () => {
    const googleMapRef = useRef();
    
    useEffect(() => {
        let map;
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDdZPQk6y4-kxSHKi8pbNDPHlQ2K0CnXC4&libraries=places`
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);

        const createMap = () => {
            map = new window.google.maps.Map(googleMapRef.current, {
                center: {
                    lat: 40.7477, 
                    lng: -73.9869
                },
                zoom: 15,
            })
            
            // Query google place API
            const request = {
                query: 'pharmacy',
                fields: ['name', 'formatted_address', 'geometry']
            };
            
            let infoWindow;
            
            const createMarker = place => {
                let marker = new window.google.maps.Marker({
                    map,
                    position: place.geometry.location,
                    animation: window.google.maps.Animation.DROP,
                });

                const contentInfo =
                    '<div id="info-container"><h1>' + 
                    place.name + 
                    '</h1><div id="info-address">' +
                    place.formatted_address +
                    '</div></div>';

                infoWindow = new window.google.maps.InfoWindow();
                
                marker.addListener("click", (() => {
                    infoWindow.setContent(
                        contentInfo
                    );
                    infoWindow.open(map, marker);
                }))
            }
            
            const cb = (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        // let place = results[i];
                        createMarker(results[i]);
                    }
                }
            };

            const service = new window.google.maps.places.PlacesService(map);
            service.textSearch(request, cb);
    
            service.findPlaceFromQuery(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                    for (let i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                    map.setCenter(results[0].geometry.location);
                }
            })
        };

        googleMapScript.addEventListener("load", () => {
            createMap();
        })
    }, []);

    return (
        <div className="map-container">
            <div
                id="map"        
                ref={googleMapRef}
            />
        </div>
    )
}

export default withRouter(Map);