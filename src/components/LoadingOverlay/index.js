import React, {Component} from 'react';
import './styles.css'
import LoadingIndicator from '../LoadingIndicator/index';

class LoadingOverlay extends Component {
    render() {
        return (
            <div className="overlay">
                <div className='indicator'>
                    <LoadingIndicator srLoadingText='Loading...'/>
                </div>
            </div>
        )
    }
}

export default LoadingOverlay;