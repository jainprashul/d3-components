import { GmapApi } from "../../types/GmapApi";

export function createOverlayClass(api: GmapApi, opts?: any) {
    const Overlay = api.OverlayView
    /**
    * The custom Overlay object contains the  image,
    * the bounds of the image, and a reference to the map.
    */
    return class CustomOverlay extends Overlay {
        bounds: google.maps.LatLngBounds;
        image: string;
        div?: HTMLElement;

        constructor(bounds: google.maps.LatLngBounds, image: string) {
            super();

            this.bounds = bounds;
            this.image = image;
        }

        /**
         * onAdd is called when the map's panes are ready and the overlay has been
         * added to the map.
         */
        onAdd() {
            this.div = document.createElement("div");
            this.div.id = "img-div";
            this.div.style.borderStyle = "none";
            this.div.style.borderWidth = "0px";
            this.div.style.position = "absolute";
            this.div.style.cursor = "move";
            // Create the img element and attach it to the div.
            const img = document.createElement("img");

            img.src = this.image;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.cursor = "move";

            // img.style.position = "absolute";
            this.div.appendChild(img);

            // Add the element to the "overlayLayer" pane.
            const panes = this.getPanes()!;

            panes.overlayLayer.appendChild(this.div);
        }

        updateBounds(bounds: google.maps.LatLngBounds) {
            if (this.bounds.equals(bounds)) return;
            this.bounds = bounds;
            this.draw();
        }

        draw() {
            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            const overlayProjection = this.getProjection();

            console.log("overlayProjection", this.bounds);

            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            const sw = overlayProjection.fromLatLngToDivPixel(
                this.bounds.getSouthWest()
            )!;
            const ne = overlayProjection.fromLatLngToDivPixel(
                this.bounds.getNorthEast()
            )!;

            console.log('dir', sw, ne)
            opts.setMarkerA({
                lat: this.bounds.getSouthWest().lat(),
                lng: this.bounds.getSouthWest().lng(),
                x: sw.x,
                y: sw.y,
            })

            opts.setMarkerB({
                lat: this.bounds.getNorthEast().lat(),
                lng: this.bounds.getNorthEast().lng(),
                x: ne.x,
                y: ne.y,
            })

            // Resize the image's div to fit the indicated dimensions.
            if (this.div) {
                this.div.style.left = sw.x + "px";
                this.div.style.top = ne.y + "px";
                this.div.style.width = ne.x - sw.x + "px";
                this.div.style.height = sw.y - ne.y + "px";
            }
        }

        /**
         * The onRemove() method will be called automatically from the API if
         * we ever set the overlay's map property to 'null'.
         */
        onRemove() {
            if (this.div) {
                (this.div.parentNode as HTMLElement).removeChild(this.div);
                delete this.div;
            }
        }

        /**
         *  Set the visibility to 'hidden' or 'visible'.
         */
        hide() {
            if (this.div) {
                this.div.style.visibility = "hidden";
            }
        }

        rotate(angle: number) {
            if (this.div) {
                this.div.style.transform = `rotate(${angle}deg)`;
            }
        }

        // toggle opacity between 0.3 ,  0.5 , 0.7 , 0.9, 1
        toggleOpacity() {
            if (this.div) {
                const img = this.div
                const opacity = parseFloat(img.style.opacity) || 0;
                img.style.opacity = (opacity + 0.2).toString()
                if (opacity >= 1) {
                    img.style.opacity = "0.2"
                }
            }
        }

        // change angle each time by 1 degrees
        changeAngle(direction = 1, delta = 1) {
            if (this.div) {
                const img = this.div
                const angle = parseFloat(img.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
                img.style.transform = `rotate(${angle + (delta * direction)}deg)`;
            }
        }


        opacity(opacity: number) {
            if (this.div) {
                let opacity = this.div.style.opacity;


                this.div.style.opacity = `${opacity}`;
            }
        }

        scale(scale: number) {
            if (this.div) {
                this.div.style.transform = `scale(${scale})`;
            }
        }

        show() {
            if (this.div) {
                this.div.style.visibility = "visible";
            }
        }

        toggle() {
            if (this.div) {
                if (this.div.style.visibility === "hidden") {
                    this.show();
                } else {
                    this.hide();
                }
            }
        }

        reset() {
            if (this.div) {
                this.div.style.transform = `rotate(0deg)`;
                // reset the projection to the center of the map 
                const overlayProjection = this.getProjection();

                const A = new api.Point(-150, 150);
                const B = new api.Point(150, -150);
                const locationA = overlayProjection.fromDivPixelToLatLng(A)!;
                const locationB = overlayProjection.fromDivPixelToLatLng(B)!;
                const bounds = new api.LatLngBounds(locationA, locationB);
                console.log('bounds', bounds)
                this.updateBounds(bounds);

                opts.setMarkerA({
                    lat: locationA.lat(),
                    lng: locationA.lng(),
                    x: A.x,
                    y: A.y,
                })

                opts.setMarkerB({
                    lat: locationB.lat(),
                    lng: locationB.lng(),
                    x: B.x,
                    y: B.y,
                })
            }
        }

        toggleDOM(map: google.maps.Map) {
            if (this.getMap()) {
                this.setMap(null);
            } else {
                this.setMap(map);
            }
        }
    }
}