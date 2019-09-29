import PropTypes from 'prop-types';
import React, {Component} from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        // console.log('ChildComponent: state');
        this.state = {
            name: 'Mark'
        };
        this.oops = this.oops.bind(this);
    }

    oops() {
        this.setState(() => ({ oops: true }));
    }
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('ChildComponent : componentWillReceiveProps');
    //     console.log('nextProps: ', nextProps);
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('<ChildComponent /> - shouldComponentUpdate()');
    //     console.log('nextProps: ', nextProps);
    //     console.log('nextState: ', nextState);
    //     return true;
    // }
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('<ChildComponent /> - componentWillUpdate()');
    //     console.log('nextProps: ', nextProps);
    //     console.log('nextState: ', nextState);
    // }
    // componentDidUpdate(previousProps, previousState) {
    //     console.log('ChildComponent : componentDidUpdate');
    //     console.log('previousProps: ', previousProps);
    //     console.log('previousState: ', previousState);
    // }
    // componentWillMount() {
    //     console.log('ChildComponent : componentWillMount');
    // }
    // componentDidMount() {
    //     console.log('ChildComponent : componentDidMount');
    // }
    componentWillUnmount() {
        console.log('ChildComponent : componentWillUnmount');
    }
    render() {
        if (this.state.oops) {
            throw new Error('Something went wrong');
        }
        // console.log('ChildComponent: render');
        return (
            <div>
                <div key="name">Name: {this.props.name}</div>
                <button key="error" onClick={this.oops}>
                    Create error
                </button>
            </div>
        );
    }
};

ChildComponent.propTypes = {
    name: PropTypes.string
}

export default ChildComponent;
