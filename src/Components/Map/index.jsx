import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([0, 0], 2);
        // Inicializamos el mapa en una ubicación y nivel de zoom específicos [0, 0], 2
        //const mymap = L.map(mapRef.current).setView([51.505, -0.09], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Añadimos un marcador en una ubicación específica
        let marker = L.marker([51.5, -0.09]).addTo(map);

        // Añadimos un círculo en otra ubicación
        let circle = L.circle([51.508, -0.11], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 500
        }).addTo(map);

        // Añadimos un polígono con coordenadas específicas
        let polygon = L.polygon([
          [51.509, -0.08],
          [51.503, -0.06],
          [51.51, -0.047]
        ]).addTo(map);

        // Añadimos un popup a los marcadores y al polígono
        marker.bindPopup("¡Hola! Soy un marcador.").openPopup();
        circle.bindPopup("¡Hola! Soy un círculo.");
        polygon.bindPopup("¡Hola! Soy un polígono.");
    
        // Agrega aquí el código para obtener y actualizar las coordenadas del satélite
    
        return () => {
          map.remove();
        };
      }, []);

      return <div ref={mapRef} className="w-screen h-screen" />;

}

export default Map;