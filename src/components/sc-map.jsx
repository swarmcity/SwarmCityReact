import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class ScMap extends Component<{}, State> {
  

  render() {
    const position = [this.props.lat, this.props.lng]
    return (
      <div>
      <Map 
        attributionControl={false}
				zoomControl={false}
				doubleClickZoom={true}
				scrollWheelZoom={true}
				dragging={true}
				animate={true}
                easeLinearity={0.35}
                center={position} 
                zoom={this.props.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </Map>
      </div>
    )
  }
}