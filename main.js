//imports
import React from 'react';
//plugin fix. Needed for onTouchTap. (temporary)
import injectTapEventPlugin from 'react-tap-event-plugin';


import ReactDOM from 'react-dom';
//for providing a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyButtons from './MyComponent.jsx';
//import MyButtons from './MyComponent.jsx';
//import MyMenu from './MyComponent2.jsx';

//plugin fix. Needed for onTouchTap. (temporary)
injectTapEventPlugin();

//theme object?
const App = () => (
  <MuiThemeProvider>
    <MyButtons />
  </MuiThemeProvider>
);

//Rendering to virtual DOM?
ReactDOM.render(<App />, document.getElementById('app'));
