import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

//defining CSS styles as an object
const style = {
  margin: 12,
};

/** 
JSX syntax
**/

//set STATE(where data comes from..getting data from JSON/Array) for App Component - constructor, render ...  + ECMAScript 2015
//iterating array (data), using properties(afterarray...properties er immutable)

class App extends React.Component {
   constructor() {
      super();
    
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
        
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
        
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],
         afterarray: "Hey text"
      }
   }
  
   render() {
      return (
         <div>
          <AppBar title="My AppBar" />
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
            <p>{this.state.afterarray}</p>
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
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

//export component
export default App;