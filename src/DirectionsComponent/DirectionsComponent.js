/* eslint-disable no-undef */
import "./DirectionsComponent.css";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const DirectionsPage = () => {

    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    const originRef = useRef();
    const destinationRef = useRef()

    // const {isLoaded} = useJsApiLoader({
    //     googleMapsApiKey: "AIzaSyA9__B5jrMhOlHYFHJ3U0SVFXPvO1_WpxM",
    //     libraries: ['places']
    // })

    // if (!isLoaded) {
    //     return <p>Loading....</p>
    // }

    const center = {
        lat: 52.486244,
        lng: -1.890401
    }

    const calculateRoute = async () => {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return
        }

        const directionService = new google.maps.DirectionsService()

        const result = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING
        })

        console.log(result)

        setDirectionsResponse(result);
        setDistance(result.routes[0].legs[0].distance.text);
        setDuration(result.routes[0].legs[0].duration.text);
    }

    const clearRoute = () => {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = '';
        destinationRef.current.value = '';
    }

  return (
    <>
        <section className="directionsComponent">

            <h2>Route Planner <FontAwesomeIcon icon={faPaw} /></h2>

            <section className="googleMapDirections">
                <GoogleMap mapContainerClassName="google__direct" 
                            center={center} 
                            zoom={6} 
                            mapContainerStyle={{width: '500px', height: '500px'}}
                            options={{
                                mapTypeControl: false
                            }}
                            onLoad={(map => setMap(map))}
                            >
                    <Marker position={center}/>
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                </GoogleMap>
            </section>

            <section className="googleMapRoute">
                <input placeholder="Origin" ref={originRef}></input>
                <input placeholder="Destination" ref={destinationRef}></input>
                <button type="button" onClick={calculateRoute}>calculate route</button>
            </section>

            <section className="routeInfo">
                <span>Distance: {distance}</span>
                <span>Duration: {duration}</span>
            </section>

            <section className="clearReset">
                <button type="button" onClick={clearRoute}>clear route</button>
                <button type="button" onClick={() => map.panTo(center)}>Reset Map</button>
            </section>
        </section>
    </>
  )
}

export default DirectionsPage