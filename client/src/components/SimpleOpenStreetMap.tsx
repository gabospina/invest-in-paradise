import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { AnimatePresence } from "framer-motion";
import { Navigation, Loader2 } from "lucide-react";
import MapLoader from "./MapLoader";

interface Location {
    name: string;
    lat: number;
    lng: number;
    type: 'golf' | 'attraction' | 'villa';
    description?: string;
    website?: string;
    [key: string]: any;
}

interface SimpleOpenStreetMapProps {
    className?: string;
    locations?: Location[];
    center?: [number, number];
    zoom?: number;
    onLocationClick?: (location: Location) => void; // Add this line
    zoomControl?: boolean; // Add zoomControl prop
}

export function SimpleOpenStreetMap({
    locations = [],
    center = [18.5601, -68.3725],
    zoom = 15,
    className = "",
    onLocationClick, // Add this
    zoomControl = true // Default to true
}: SimpleOpenStreetMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);
    const markers = useRef<L.Marker[]>([]);

    // Create custom icons - UPDATED for villa type
    const createCustomIcon = (type: 'golf' | 'attraction' | 'villa'): L.Icon => {
        const colors = {
            golf: '#10B981',    // Green for golf
            attraction: '#3B82F6', // Blue for attractions
            villa: '#8B5CF6'    // Purple for villas
        };

        const letters = {
            golf: 'G',
            attraction: 'A',
            villa: 'Villas'
        };

        const color = colors[type];
        const letter = letters[type];

        // Create SVG as data URL
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 16 16 24 16 24s16-8 16-24c0-8.837-7.163-16-16-16z" 
            fill="${color}" stroke="white" stroke-width="2"/>
      <text x="16" y="24" text-anchor="middle" fill="white" font-size="12" font-weight="bold">
        ${letter}
      </text>
    </svg>`;

        // Convert to base64 data URL
        const dataUrl = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`;

        return L.icon({
            iconUrl: dataUrl,
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40],
            className: 'custom-marker'
        });
    };

    // Initialize map
    useEffect(() => {
        if (!mapRef.current || mapInstance.current) return;

        // Create map with zoomControl option
        mapInstance.current = L.map(mapRef.current, {
            center,
            zoom,
            zoomControl: zoomControl,
            attributionControl: true
        });

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 14,
        }).addTo(mapInstance.current);

        // Add markers
        addMarkers();

        // Cleanup
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    // Add markers function with click handler
    const addMarkers = () => {
        if (!mapInstance.current) return;

        // Clear existing markers
        markers.current.forEach(marker => marker.removeFrom(mapInstance.current!));
        markers.current = [];

        // Add new markers
        locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng], {
                icon: createCustomIcon(location.type)
            }).addTo(mapInstance.current!);

            // Add click event handler
            marker.on('click', () => {
                if (onLocationClick) {
                    onLocationClick(location);
                }
            });

            // Add popup with basic info
            const popupContent = `
        <div style="min-width: 200px; padding: 8px;">
          <h3 style="margin: 0 0 8px 0; color: #111827; font-size: 16px; font-weight: bold;">
            ${location.name}
          </h3>
          ${location.description ? `
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
              ${location.description.substring(0, 100)}${location.description.length > 100 ? '...' : ''}
            </p>
          ` : ''}
          <div style="font-size: 12px; color: #9ca3af; margin-bottom: 8px;">
            ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}
          </div>
          ${location.price ? `
            <div style="font-size: 14px; font-weight: bold; color: #059669;">
              ${location.price}
            </div>
          ` : ''}
          ${location.website ? `
            <a href="${location.website}" target="_blank" 
               style="display: block; margin-top: 8px; color: #3b82f6; text-decoration: none; font-size: 14px;">
              Visit Website →
            </a>
          ` : ''}
        </div>
      `;

            marker.bindPopup(popupContent);

            markers.current.push(marker);
        });

        // Fit bounds to show all markers if there are any
        if (locations.length > 0) {
            const group = new L.FeatureGroup(markers.current);
            mapInstance.current.fitBounds(group.getBounds().pad(0.1));
        }
    };

    // Update markers when locations change
    useEffect(() => {
        if (mapInstance.current && locations.length > 0) {
            addMarkers();
        }
    }, [locations]);

    return (
        <div className={`relative rounded-xl border border-gray-200 shadow-lg overflow-hidden ${className}`}>
            <div
                ref={mapRef}
                className="w-full h-[500px]"
                style={{ borderRadius: '11px' }}
            />

            {/* Legend */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow p-3">
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-medium text-gray-700">Golf</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="font-medium text-gray-700">Attractions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="font-medium text-gray-700">Villas</span>
                    </div>
                </div>
            </div>

            {/* Attribution */}
            <div className="absolute bottom-2 right-2">
                <div className="text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                    © OpenStreetMap
                </div>
            </div>
        </div>
    );
}