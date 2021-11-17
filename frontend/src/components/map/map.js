import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";

const Map = () => {
    // const [state, setState] = useState({ 
    //     map: {}, 
    //     infoWindow, 
    //     initPos: {
    //         lat: 40.7477, 
    //         lng: -73.9869
    //     }
    // })
    // gets element reference
    const googleMapRef = useRef();
    
    useEffect(() => {
        let initPos = {
            lat: 40.7477, 
            lng: -73.9869
        }
        let map;
        let infoWindow;
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDdZPQk6y4-kxSHKi8pbNDPHlQ2K0CnXC4&libraries=places`
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);

        const createMap = () => {
            infoWindow = new window.google.maps.InfoWindow();
    
            map = new window.google.maps.Map(googleMapRef.current, {
                center: initPos,
                zoom: 15,
            })
    
            const request = {
                query: 'pharmacy',
                fields: ['name', 'formatted_address', 'opening_hours', 'geometry']
            };
    
            const cb = (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        let place = results[i];
                        createMarker(results[i]);
                    }
                }
            };

            const createMarker = place => {
                let marker = new window.google.maps.Marker({
                    map,
                    position: place.geometry.location,
                    animation: window.google.maps.Animation.DROP
                });
                marker.addListener("click", (() => {
                    infoWindow.setContent(place.name);
                    infoWindow.open(map, marker);
                }))
            }
    
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


    // const createMarker = (place) => {
    //     if (!place.geometry || !place.geometry.location) return;

    //     const marker = new window.google.maps.Marker({
    //         map,
    //         position: place.geometry.location
    //     });

    //     marker.addEventListener("click", () => {
    //         infoWindow.setContent(place.name || '');
    //         infoWindow.open(map);
    //     });
    // }

    return (
        <div
            id="map"        
            ref={googleMapRef}
            style={{ height: '75vh', width: '80%' }}
        />
    )
}

export default withRouter(Map);