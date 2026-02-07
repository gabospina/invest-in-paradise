import 'leaflet';

declare module 'leaflet' {
    namespace DivIcon {
        interface Options extends BaseIconOptions {
            html?: string | HTMLElement;
            bgPos?: PointExpression;
            iconSize?: PointExpression;
            iconAnchor?: PointExpression;
            popupAnchor?: PointExpression;
            className?: string;
        }
    }

    class DivIcon extends Icon<DivIcon.Options> {
        constructor(options?: DivIcon.Options);
    }

    function divIcon(options?: DivIcon.Options): DivIcon;
}