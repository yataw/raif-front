import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Map extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <nav className="navbar navbar-light navbar-expand-md">
                            <div className="container-fluid">
                                <h3 className="text-dark mb-0">Партнеры Банка</h3><i className="fas fa-map" style={{fontSize: '37px'}} /></div>
                        </nav>
                    </div>
                </div>
                <div id="map" style={{width: '100%', height: '65vh'}}/>
            </div>
        );
    }

    componentDidMount() {
        var map = new window.H.Map(document.getElementById('map'),
            window.defaultLayers.vector.normal.map,{
                center: {lat:55.9320, lng:37.520},
                zoom: 15,
                pixelRatio: window.devicePixelRatio || 1
            });
// add a resize listener to make sure that the map occupies the whole container
        window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

// Create the default UI components
        var ui = window.H.ui.UI.createDefault(map, window.defaultLayers);

// Now use the map as required...
        window.addMarkersToMap(map);
    }
}

export default Map;