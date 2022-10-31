export interface GmapApi {
    Animation: google.maps.Animation;
    BicyclingLayer: google.maps.BicyclingLayer;
    Circle: google.maps.Circle;
    ControlPosition: google.maps.ControlPosition;
    Data: google.maps.Data;
    DirectionsRenderer: google.maps.DirectionsRenderer;
    DirectionsService: google.maps.DirectionsService;
    DirectionsStatus: google.maps.DirectionsStatus;
    DirectionsTravelMode: google.maps.DirectionsTravelMode;
    DirectionsUnitSystem: google.maps.DirectionsUnitSystem;
    DistanceMatrixElementStatus: google.maps.DistanceMatrixElementStatus;
    DistanceMatrixService: google.maps.DistanceMatrixService;
    DistanceMatrixStatus: google.maps.DistanceMatrixStatus;
    ElevationService: google.maps.ElevationService;
    ElevationStatus: google.maps.ElevationStatus;
    FusionTablesLayer: any;
    // create signature for the google.maps.Geocoder constructor
    Geocoder: new () => google.maps.Geocoder;
    GeocoderLocationType: google.maps.GeocoderLocationType;
    GeocoderStatus: google.maps.GeocoderStatus;
    GroundOverlay: google.maps.GroundOverlay;
    ImageMapType: google.maps.ImageMapType;
    InfoWindow: google.maps.InfoWindow;
    KmlLayer: google.maps.KmlLayer;
    KmlLayerStatus: google.maps.KmlLayerStatus;
    LatLng: google.maps.LatLng;
    LatLngAltitude: google.maps.LatLngAltitude;
    LatLngBounds: google.maps.LatLngBounds;
    MVCArray: google.maps.MVCArray;
    MVCObject: google.maps.MVCObject;
    Map: google.maps.Map;
    MapTypeControlStyle: google.maps.MapTypeControlStyle;
    MapTypeId: google.maps.MapTypeId;
    MapTypeRegistry: google.maps.MapTypeRegistry;
    MapNetworkError: (a: any, b: any, c: any) => void;
    MapsNetworkErrorEndpoint: google.maps.MapsNetworkErrorEndpoint;
    MapsRequestError: google.maps.MapsRequestError;
    MapsServerError: google.maps.MapsServerError;

    Marker: google.maps.Marker;

    MarkerImage: MarkerImage;
    MaxZoomService: google.maps.MaxZoomService;
    MaxZoomStatus: google.maps.MaxZoomStatus;
    NavigationControlStyle: NavigationControlStyle;
    OverlayView: google.maps.OverlayView;
    Point: google.maps.Point;
    Polygon: google.maps.Polygon;
    Polyline: google.maps.Polyline;
    Rectangle: google.maps.Rectangle;
    RenderingType: google.maps.RenderingType;
    SaveWidget: (container: Element, opts?: SaveWidgetOptions) => void;
    ScaleControlStyle: google.maps.ScaleControlStyle;
    Size: google.maps.Size;
    StreetViewCoverageLayer: google.maps.StreetViewCoverageLayer;
    StreetViewPanorama: google.maps.StreetViewPanorama;
    StreetViewPreference: google.maps.StreetViewPreference;
    StreetViewService: google.maps.StreetViewService;
    StreetViewStatus: google.maps.StreetViewStatus;
    StreetViewSource: google.maps.StreetViewSource;
    StrokePosition: google.maps.StrokePosition;
    StyledMapType: google.maps.StyledMapType;
    SymbolPath: google.maps.SymbolPath;
    TrafficLayer: google.maps.TrafficLayer;
    TrafficModel: google.maps.TrafficModel;
    TransitLayer: google.maps.TransitLayer;
    TransitMode: google.maps.TransitMode;
    TransitRoutePreference: google.maps.TransitRoutePreference;
    TravelMode: google.maps.TravelMode;
    UnitSystem: google.maps.UnitSystem;
    VehicleType: google.maps.VehicleType;
    ZoomControlStyle: ZoomControlStyle;
    event: any;
    places: {
        Autocomplete: new (inputField: HTMLInputElement,
            opts?: google.maps.places.AutocompleteOptions | null) => google.maps.places.Autocomplete;
        AutocompleteService: new () => google.maps.places.AutocompleteService;
        AutocompleteSessionToken: new () => google.maps.places.AutocompleteSessionToken;
        BusinessStatus: google.maps.places.BusinessStatus;
        PlacesService: new (attrContainer: HTMLDivElement | google.maps.Map) => google.maps.places.PlacesService;
        PlacesServiceStatus: google.maps.places.PlacesServiceStatus;
        RankBy: google.maps.places.RankBy;
        SearchBox: new (
            inputField: HTMLInputElement,
            opts?: google.maps.places.SearchBoxOptions | null) => google.maps.places.SearchBox;
        SearchBoxOptions: google.maps.places.SearchBoxOptions;
    }
    version: string
}

export interface NavigationControlStyle {
    DEFAULT: number
    SMALL: number
    ANDROID: number
    ZOOM_PAN: number
    OA: number
    Gu: number
}

export interface ZoomControlStyle {
    DEFAULT: number
    SMALL: number
    LARGE: number
    Gu: number
}

export interface SaveWidgetOptions {
    placeId: string
    query: string
    position: google.maps.ControlPosition
    attribution: SaveWidgetAttribution
}

export interface SaveWidgetAttribution {
    source: string
    webUrl: string
}

export interface MarkerImage {
    url: string
    size?: google.maps.Size
    origin?: google.maps.Point
    anchor?: google.maps.Point
    scaledSize?: google.maps.Size
}