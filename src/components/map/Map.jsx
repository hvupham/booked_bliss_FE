// eslint-disable-next-line no-unused-vars
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import Pin from '../pin/Pin';

function Map({ items }) {
    return (
        <MapContainer center={
            items.length === 1
                ? [items[0].latitude, items[0].longitude]
                : [52.5797, -1.90269]
        }
            zoom={7}
            scrollWheelZoom={false}
            className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {items.map(item => (
                <Pin item={item} key={item.id} />
            ))}

        </MapContainer>
    )
}

export default Map