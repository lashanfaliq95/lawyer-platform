/* eslint-disable global-require */
import L from 'leaflet';

const hoverIcon = new L.Icon({
  iconUrl: require('../../../../assets/images/marker-icon-yellow.png'),
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(25, 41),
});

const icon = new L.Icon({
  iconUrl: require('../../../../assets/images/marker-icon.png'),
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(25, 41),
});

export { hoverIcon, icon };
