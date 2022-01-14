import Grocery from './Components/Grocery';
import Grocerylist from './Components/Grocerylist';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
    constructor() {
      super()
      this.state= {
        groceries:[],
      }
    }
      getList=(list)=>{
        this.setState({groceries:[...this.state.groceries,list]})
      }
      
  render(){

        return(
          <div className="App">

          <Grocery getList={this.getList}/>
          <Grocerylist getgroceries={this.state.groceries}/>


          </div>
        );
        }
}
export default App;
