import React from 'react';

import "./css/MainContainer.scss";
import Map from "./components/Map";

class MainContainer extends React.Component {
    render() {
        return <div class="main-container">
            <div class="left-container">
                <Map/>
            </div>
            <div class="right-container">
                Right
            </div>
        </div>
    }
}

export default MainContainer;