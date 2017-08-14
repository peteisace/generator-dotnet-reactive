import React, {Component} from 'react';

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props == null || this.props.model == null) {
            return;
        }
        return (
            <div>
                <h1>Hello { this.props.model.name}</h1>
            </div>
        );
    }
}