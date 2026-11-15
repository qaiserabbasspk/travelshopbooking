(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/tour/card/route-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const START_COLOR = "#1a7a4a";
const END_COLOR = "#d23254";
const MID_COLOR = "#854ec9";
const coordKey = (lat, lng)=>`${lat.toFixed(5)},${lng.toFixed(5)}`;
// A circle split green (left) / red (right) — used when a stop is BOTH the
// start and the end of the tour (common round trips), so a single pin can
// carry both step numbers without one drawing over the other.
function splitStartEndIcon(size) {
    const r = size / 2;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'>` + `<defs><clipPath id='c'><circle cx='${r}' cy='${r}' r='${r - 2}'/></clipPath></defs>` + `<g clip-path='url(#c)'>` + `<rect x='0' y='0' width='${r}' height='${size}' fill='${START_COLOR}'/>` + `<rect x='${r}' y='0' width='${r}' height='${size}' fill='${END_COLOR}'/>` + `</g>` + `<circle cx='${r}' cy='${r}' r='${r - 1.5}' fill='none' stroke='#fff' stroke-width='2.5'/>` + `</svg>`;
    return {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg),
        scaledSize: new google.maps.Size(size, size),
        anchor: new google.maps.Point(r, r),
        labelOrigin: new google.maps.Point(r, r)
    };
}
// Same key the rest of the app already ships in the client bundle (see
// tour-detail-page/gmaps.tsx). Kept identical so @react-google-maps/api
// treats every map instance as the same singleton script load.
const GOOGLE_MAPS_API_KEY = "AIzaSyDtHux_pifjxDY6rJMVKkUdIz9AhS7pn8w";
// Module-level constant: a new array literal on every render makes
// useJsApiLoader think the script options changed and reload it.
const LIBRARIES = [
    "places"
];
const containerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "260px"
};
const statusBoxStyle = {
    width: "100%",
    height: "100%",
    minHeight: "260px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f1f7",
    color: "#8a8398",
    fontSize: 13,
    textAlign: "center",
    padding: "0 16px"
};
function MapUnavailable() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: statusBoxStyle,
        children: "Map couldn’t be loaded."
    }, void 0, false, {
        fileName: "[project]/src/components/tour/card/route-map.tsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
_c = MapUnavailable;
// The Google Maps library can throw from inside its own lifecycle when the API
// is unavailable / half-loaded (e.g. Polyline.setPath on an undefined instance,
// the IntersectionObserver observe error). Contain those so a flaky map never
// white-screens the surrounding modal/page — we just show MapUnavailable.
class MapErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    state = {
        hasError: false
    };
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error);
    }
    render() {
        return this.state.hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapUnavailable, {}, void 0, false, {
            fileName: "[project]/src/components/tour/card/route-map.tsx",
            lineNumber: 104,
            columnNumber: 34
        }, this) : this.props.children;
    }
}
function RouteMap({ points, focusIndex, active = true }) {
    _s();
    const { isLoaded, loadError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"])({
        id: "google-map-script",
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: LIBRARIES
    });
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapReady, setMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Group stops that share the exact same coordinate (e.g. a round trip whose
    // start and end are the same place) so we draw ONE pin carrying every step
    // number there, instead of stacking markers that hide each other.
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RouteMap.useMemo[groups]": ()=>{
            const byCoord = new Map();
            points.forEach({
                "RouteMap.useMemo[groups]": (p, i)=>{
                    const key = coordKey(p.lat, p.lng);
                    const arr = byCoord.get(key);
                    if (arr) arr.push(i);
                    else byCoord.set(key, [
                        i
                    ]);
                }
            }["RouteMap.useMemo[groups]"]);
            return Array.from(byCoord.values());
        }
    }["RouteMap.useMemo[groups]"], [
        points
    ]);
    // Stable reference for the Polyline path. The map now stays mounted while a
    // form covers it, so RouteMap re-renders on view changes; a fresh array each
    // render would make the gmaps Polyline re-run setPath on a hidden map and
    // crash ("Cannot read properties of undefined (reading 'setAt')").
    const pathCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RouteMap.useMemo[pathCoords]": ()=>points.map({
                "RouteMap.useMemo[pathCoords]": (p)=>({
                        lat: p.lat,
                        lng: p.lng
                    })
            }["RouteMap.useMemo[pathCoords]"])
    }["RouteMap.useMemo[pathCoords]"], [
        points
    ]);
    const fitToPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RouteMap.useCallback[fitToPoints]": (map)=>{
            if (points.length === 0) return;
            // Fit to the distinct locations; a route whose stops all share one
            // coordinate would otherwise zoom to street level.
            if (groups.length === 1) {
                map.setCenter({
                    lat: points[0].lat,
                    lng: points[0].lng
                });
                map.setZoom(9);
                return;
            }
            const bounds = new google.maps.LatLngBounds();
            points.forEach({
                "RouteMap.useCallback[fitToPoints]": (p)=>bounds.extend({
                        lat: p.lat,
                        lng: p.lng
                    })
            }["RouteMap.useCallback[fitToPoints]"]);
            // Padding keeps the start/end markers off the very edge.
            map.fitBounds(bounds, 56);
        }
    }["RouteMap.useCallback[fitToPoints]"], [
        points,
        groups
    ]);
    const onLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RouteMap.useCallback[onLoad]": (map)=>{
            mapRef.current = map;
            fitToPoints(map);
            setMapReady(true);
        }
    }["RouteMap.useCallback[onLoad]"], [
        fitToPoints
    ]);
    const onUnmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RouteMap.useCallback[onUnmount]": ()=>{
            mapRef.current = null;
            setMapReady(false);
        }
    }["RouteMap.useCallback[onUnmount]"], []);
    // A glowing dot that travels the route 1 → 2 → … → n → back to 1, forever.
    // Driven by requestAnimationFrame on a plain google.maps.Marker (no React
    // re-renders per frame). Speed is distance-weighted so it moves evenly.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteMap.useEffect": ()=>{
            if (!active || !mapReady || !mapRef.current || points.length < 2) return;
            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
                return; // respect users who opt out of motion
            }
            const map = mapRef.current;
            // No return leg: when the dot reaches the last stop it jumps straight back
            // to the start and replays. If the first and last stops share a coordinate
            // (a true round trip) that jump is zero-distance, so the loop still looks
            // seamless; when they differ, it restarts from the beginning as requested.
            const path = points.map({
                "RouteMap.useEffect.path": (p)=>({
                        lat: p.lat,
                        lng: p.lng
                    })
            }["RouteMap.useEffect.path"]);
            const segs = path.length - 1;
            const segLen = [];
            for(let i = 0; i < segs; i++){
                const dLat = path[i + 1].lat - path[i].lat;
                const dLng = path[i + 1].lng - path[i].lng;
                segLen.push(Math.hypot(dLat, dLng));
            }
            const total = segLen.reduce({
                "RouteMap.useEffect": (a, b)=>a + b
            }["RouteMap.useEffect"], 0) || 1;
            // Longer / busier routes take a little longer to traverse.
            const loopSeconds = Math.min(Math.max(points.length * 1.4, 7), 22);
            const speed = total / loopSeconds; // units per second
            const halo = new google.maps.Marker({
                map,
                position: path[0],
                clickable: false,
                zIndex: 1900,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 11,
                    fillColor: "#854ec9",
                    fillOpacity: 0.22,
                    strokeWeight: 0
                }
            });
            const head = new google.maps.Marker({
                map,
                position: path[0],
                clickable: false,
                zIndex: 2000,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 5.5,
                    fillColor: "#ffffff",
                    fillOpacity: 1,
                    strokeColor: "#854ec9",
                    strokeWeight: 3
                }
            });
            let raf = 0;
            let last = performance.now();
            let d = 0; // distance travelled along the loop
            const tick = {
                "RouteMap.useEffect.tick": (now)=>{
                    d += speed * ((now - last) / 1000);
                    last = now;
                    if (d >= total) d -= total;
                    let rem = d;
                    let i = 0;
                    while(i < segs - 1 && rem > segLen[i]){
                        rem -= segLen[i];
                        i++;
                    }
                    const f = segLen[i] ? rem / segLen[i] : 0;
                    const pos = {
                        lat: path[i].lat + (path[i + 1].lat - path[i].lat) * f,
                        lng: path[i].lng + (path[i + 1].lng - path[i].lng) * f
                    };
                    halo.setPosition(pos);
                    head.setPosition(pos);
                    raf = requestAnimationFrame(tick);
                }
            }["RouteMap.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "RouteMap.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    halo.setMap(null);
                    head.setMap(null);
                }
            })["RouteMap.useEffect"];
        }
    }["RouteMap.useEffect"], [
        active,
        mapReady,
        points
    ]);
    // When the map is shown again after being hidden behind a form, a container
    // that was display:none can come back grey/mis-sized — re-fit once visible.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteMap.useEffect": ()=>{
            if (active && mapReady && mapRef.current) {
                fitToPoints(mapRef.current);
            }
        }
    }["RouteMap.useEffect"], [
        active,
        mapReady,
        fitToPoints
    ]);
    // Pan to the destination the user tapped in the list, without re-fitting
    // the whole route (so the journey context stays on screen).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteMap.useEffect": ()=>{
            if (focusIndex == null || !mapRef.current) return;
            const p = points[focusIndex];
            if (!p) return;
            mapRef.current.panTo({
                lat: p.lat,
                lng: p.lng
            });
            if ((mapRef.current.getZoom() ?? 0) < 7) mapRef.current.setZoom(8);
        }
    }["RouteMap.useEffect"], [
        focusIndex,
        points
    ]);
    // Explicit script-load failure (bad key, referer/quota/billing, network).
    if (loadError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapUnavailable, {}, void 0, false, {
            fileName: "[project]/src/components/tour/card/route-map.tsx",
            lineNumber: 295,
            columnNumber: 12
        }, this);
    }
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: statusBoxStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tw-inline-block tw-w-4 tw-h-4 tw-mr-2 tw-rounded-full tw-border-2 tw-border-solid tw-border-current tw-border-r-transparent tw-animate-spin tw-align-[-0.125em]",
                    role: "status",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/tour/card/route-map.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                "Loading map…"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tour/card/route-map.tsx",
            lineNumber: 300,
            columnNumber: 7
        }, this);
    }
    const lastIndex = points.length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapErrorBoundary, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleMap"], {
            mapContainerStyle: containerStyle,
            onLoad: onLoad,
            onUnmount: onUnmount,
            options: {
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                gestureHandling: "greedy"
            },
            children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    points.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                        path: pathCoords,
                        options: {
                            strokeColor: "#854ec9",
                            strokeOpacity: 0.9,
                            strokeWeight: 4,
                            geodesic: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/tour/card/route-map.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    groups.map((indices)=>{
                        const p = points[indices[0]];
                        // Start/End (green/red) only apply to a real multi-stop route; a lone
                        // destination stays neutral purple.
                        const multi = points.length > 1;
                        const hasStart = multi && indices.includes(0);
                        const hasEnd = multi && indices.includes(lastIndex);
                        const isStartEnd = hasStart && hasEnd;
                        // Show every step number that lives at this coordinate, e.g. "1·6".
                        const labelText = indices.map((i)=>i + 1).join("·");
                        const icon = isStartEnd ? splitStartEndIcon(28) : {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 13,
                            fillColor: hasStart ? START_COLOR : hasEnd ? END_COLOR : MID_COLOR,
                            fillOpacity: 1,
                            strokeColor: "#ffffff",
                            strokeWeight: 2.5
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: {
                                lat: p.lat,
                                lng: p.lng
                            },
                            title: Array.from(new Set(indices.map((i)=>points[i].name))).join(" · "),
                            icon: icon,
                            label: {
                                text: labelText,
                                color: "#ffffff",
                                fontSize: labelText.length > 2 ? "10px" : "12px",
                                fontWeight: "700"
                            },
                            zIndex: hasStart || hasEnd ? 1000 : 1
                        }, coordKey(p.lat, p.lng), false, {
                            fileName: "[project]/src/components/tour/card/route-map.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tour/card/route-map.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/tour/card/route-map.tsx",
            lineNumber: 315,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/tour/card/route-map.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
_s(RouteMap, "U3n1GlHnGiJ7b0JmhY5aInkkhw8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"]
    ];
});
_c1 = RouteMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapUnavailable");
__turbopack_context__.k.register(_c1, "RouteMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tour/card/route-map.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/tour/card/route-map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_tour_card_route-map_tsx_1k59e0x8z_v30._.js.map