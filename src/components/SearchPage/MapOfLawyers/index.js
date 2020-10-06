import React from 'react';
import {
  arrayOf, number, string, shape,
} from 'prop-types';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import L from 'leaflet';

// Fix https://github.com/PaulLeCam/react-leaflet/issues/453
L.Icon.Default.imagePath = 'leafletImages/';

const MapOfLawyers = ({ position, bounds, addressMap }) => (
  <Map center={position} bounds={bounds}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {addressMap.map(({ position: location, address }) => (
      <Marker position={location}>
        <Popup>
          {address}
        </Popup>
      </Marker>
    ))}
  </Map>
);

MapOfLawyers.propTypes = {
  position: arrayOf(number).isRequired,
  bounds: arrayOf(arrayOf(number)).isRequired,
  addressMap: arrayOf(shape({ position: arrayOf([number, number]), address: string })).isRequired,
};

export default MapOfLawyers;
