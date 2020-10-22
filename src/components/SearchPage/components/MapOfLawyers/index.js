import React from 'react';
import {
  arrayOf, number, string, shape,
} from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';

import Marker from './MarkerComponent';

const MapOfLawyers = ({ position, bounds, locations }) => (
  <Map center={position} bounds={bounds}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {locations.map(({
      id,
      position: location,
      address,
      isHovered,
    }) => (
      <Marker
        id={id}
        position={location}
        address={address}
        isHovered={isHovered}
      />
    ))}
  </Map>
);

MapOfLawyers.propTypes = {
  position: arrayOf(number).isRequired,
  bounds: arrayOf(arrayOf(number)).isRequired,
  locations: arrayOf(shape(
    {
      position: arrayOf([number, number]),
      address: string,
      id: number,
    },
  )).isRequired,
};

export default MapOfLawyers;
