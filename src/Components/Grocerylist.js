import React, {Component} from "react"

class Grocerylist extends Component{

    constructor(){
            super()
    }

    render(){
        return(
            <div className="listDiv">
                <h2>This Weeks' Grocery List</h2>
            <ul>
                
               {this.props.getGroceryList.map((item, index)=>{
                    return <div className="listDiv" key={index}>
                       <center><input type="checkbox"/></center>
                        <li>Item: {item.item}</li>
                        <li>Unit: {item.units}</li>
                        <li>Quanity: {item.quanity}</li>
                    
                    
                    </div>
                } 
                )}
            </ul>
            </div>
        )
    }

}
export default Grocerylist