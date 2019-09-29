// import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ChildComponent from './childComponent.jsx';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        // console.log('ParentComponent : state');
        this.state = {
            text: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    // componentWillMount() {
    //     console.log('ParentComponent : componentWillMount');
    // }
    // componentDidMount() {
    //     console.log('ParentComponent : componentDidMount');
    // }
    componentWillUnmount() {
        console.log('ParentComponent : componentWillUnmount');
    }
    onInputChange(e) {
        const text = e.target.value;
        this.setState({ text });
    }
    componentDidCatch(err, errorInfo) {
        console.log('componentDidCatch');
        console.log(err);
        console.log(errorInfo);
        this.setState(() => ({ err, errorInfo }));
    }
    render() {
        // console.log('ParentComponent: render');
        if (this.state.err) {
            return (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toStirng()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            );
        }
        return (  
            <div>
                <h2 key="h2">Learn about rendering and lifecycle methods!</h2>
                <input key="input" value={this.state.text} onChange={this.onInputChange} />
                <ChildComponent key="ChildComponent" name={this.state.text} />
            </div>
        );
    }
}

export default ParentComponent;