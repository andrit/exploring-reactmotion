import React, {Component} from 'react';
import {spring as Spring} from 'react-motion';
import './spring.css';

class SpringEgg extends Component{
    render(){
        return(
            <div className="row">
                <Spring defaultValue={0} endValue={360}>
                {val => {
                    
                    return <div classname="springexample">{val}</div>
                }}
                </Spring>
            </div>
        );
    }
}

export default SpringEgg;