import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

//defining CSS styles as an object
const style = {
  margin: 12,
};


/**
JS syntax
**/
//component
const App = () => (
  <div>
    <AppBar title="My AppBar" />
    <RaisedButton label="Default" />
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
    <p>hejsana</p>
  </div>
);


//export component
export default App;


/** 
DARK THEME
**/
// import React from 'react';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';

// const Main = () => (
//   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
//     <AppBar title="My AppBar" />
//   </MuiThemeProvider>
// );

// export default Main;