import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  // app is a parent compent here.
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* {moment().format('MMMM Do YYYY, hh:mm:ss a')} */}
          'Now This is just a test'
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of of JSX.
        </p>
        <ExampleComponent />

        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
