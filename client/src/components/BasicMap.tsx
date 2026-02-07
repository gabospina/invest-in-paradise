/**
 * Basic Map Component - Minimal dependencies
 */

export function BasicMap() {
    return (
        <div className="rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <iframe
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-68.5,18.4,-68.3,18.8&layer=mapnik&marker=18.5601,-68.3725"
                className="border-0"
                title="Punta Cana Map"
            />
            <div className="p-4 bg-gray-50 text-center text-sm text-gray-600">
                Interactive map showing Punta Cana, Dominican Republic
            </div>
        </div>
    );
}