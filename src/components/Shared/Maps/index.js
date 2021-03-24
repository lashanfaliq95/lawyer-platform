import React, { useState, useEffect } from 'react';
import { shape, number, arrayOf } from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './styles.scss';
import LocationPin from './LocationPin';

const GoogleMaps = ({ mapLocation, locations, zoomLevel }) => {
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);

  const bounds = [];

  useEffect(() => {
    if (map && maps) {
      const mapBounds = new maps.LatLngBounds();
      bounds.forEach((bound) => mapBounds.extend(bound));
      map.fitBounds(mapBounds);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations]);
  const renderLocations = () => {
    if (!locations) {
      return null;
    }
    const results = [];
    locations.forEach((location) => {
      results.push(
        <LocationPin
          key={location.id}
          id={location.id}
          address={location.address}
          isHovered={location.isHovered}
          lat={location.latitude}
          lng={location.longitude}
        />,
      );
      bounds.push({ lat: location.latitude, lng: location.longitude });
    });
    return results;
  };

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={mapLocation}
          defaultZoom={zoomLevel}
          options={(googleMaps) => ({
            zoomControl: true,
            fullscreenControl: false,
            zoomControlOptions: {
              position: googleMaps.ControlPosition.TOP_RIGHT,
            },
          })}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map: googleMap, maps: googleMaps }) => {
            setMap(googleMap);
            setMaps(googleMaps);
          }}
        >
          {renderLocations()}
        </GoogleMapReact>
      </div>
    </div>
  );
};

GoogleMaps.propTypes = {
  mapLocation: shape({}).isRequired,
  zoomLevel: number.isRequired,
  locations: arrayOf(shape({})).isRequired,
};

export default GoogleMaps;
