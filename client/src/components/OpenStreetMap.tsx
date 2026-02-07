// client/src/components/OpenStreetMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

interface Location {
    name: string;
    lat: number;
    lng: number;
    type: 'golf' | 'attraction';
    description?: string;
    website?: string;
}

interface OpenStreetMapProps {
    locations: Location[];
    center?: [number, number];
    zoom?: number;
}

export function OpenStreetMap({
    locations = [],
    center = [18.5601, -68.3725],
    zoom = 12
}: OpenStreetMapProps) {
    const golfIcon = new Icon({
        iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" width="30" height="30">
        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="green"/>
        <text x="12" y="16" text-anchor="middle" fill="white" font-size="10">G</text>
      </svg>
    `),
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });

    const attractionIcon = new Icon({
        iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="30" height="30">
        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="blue"/>
        <text x="12" y="16" text-anchor="middle" fill="white" font-size="10">A</text>
      </svg>
    `),
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: '500px', width: '100%', borderRadius: '8px' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location, index) => (
                <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    icon={location.type === 'golf' ? golfIcon : attractionIcon}
                >
                    <Popup>
                        <div style={{ minWidth: '200px' }}>
                            <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
                                {location.name}
                            </h3>
                            {location.description && (
                                <p style={{ margin: '0 0 8px 0', color: '#666' }}>
                                    {location.description}
                                </p>
                            )}
                            <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>
                                Coordinates: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                            </div>
                            {location.website && (
                                <a
                                    href={location.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#0066cc', textDecoration: 'none' }}
                                >
                                    Visit Website →
                                </a>
                            )}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}