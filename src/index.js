import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { database } from './firebase';
import  ParentComponent  from './components/parentComponent.jsx';

// page 129

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      // console.log('hello');
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    database.ref()
            .child('amazingnewdata')
            .set(this.state.newData);
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  render() {
    return (
      <div className="App">
        <pre className="App__data">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        <form className="App__form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <ParentComponent />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);