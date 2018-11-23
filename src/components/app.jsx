

import React, {Component} from 'react';

import { renderRoutes } from 'react-router-config'
class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const {route} = this.props
    return (
      <div>
        {renderRoutes(route.routes)}
      </div>
    )
    
    
  }
}
export default App;