import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapboxgl.accessToken) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2
    });
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{width: "100%", height: "400px"}} />;
}

export default Map;
