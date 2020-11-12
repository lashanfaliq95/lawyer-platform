import React from 'react';
import { shape, number, arrayOf } from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './styles.scss';
import LocationPin from './LocationPin';

const GoogleMaps = ({ mapLocation, locations, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
        defaultCenter={mapLocation}
        defaultZoom={zoomLevel}
      >
        {locations
          ? locations.map((location) => (
            <LocationPin
              key={location.id}
              id={location.id}
              address={location.address}
              isHovered={location.isHovered}
              lat={location.latitude}
              lng={location.longitude}
            />
          )) : null}
      </GoogleMapReact>
    </div>
  </div>
);

GoogleMaps.propTypes = {
  mapLocation: shape({}).isRequired,
  zoomLevel: number.isRequired,
  locations: arrayOf(shape({})).isRequired,
};

export default GoogleMaps;
