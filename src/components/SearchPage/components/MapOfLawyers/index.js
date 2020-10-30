import React, { memo } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import {
  arrayOf, number, string, shape,
} from 'prop-types';

import Marker from './MarkerComponent';

const MapOfLawyers = ({ position, bounds, locations }) => (
  <Map center={position} bounds={bounds}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {
      locations.map((location) => (
        <Marker
          id={location.id}
          position={location.position}
          address={location.address}
          isHovered={location.isHovered}
        />
      ))
}
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

export default memo(MapOfLawyers);
