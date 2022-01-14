import React, {Component} from "react";

class Grocery extends Component{
    constructor(){
        super()
        this.state ={
            item:"",
            units:"",
            quanity:"",
            isPurchased:""
        }
    }
    saveInfo = addItems=>{
        this.setState({[addItems.target.id]:addItems.target.value})
console.log(this.saveInfo)

    }
    submitButton = event=>{
        event.preventDefault()
        console.log(this.state)
        this.props.getList(this.state)

    }

        render(){
            return(
                <div className="groceryDiv">
                    <h2>Grocery List</h2>
                    <form onSubmit={this.submitButton}>

                        <label htmlFor="item">Item</label>
                            <input id="item" placeholder="Type Here"
                            onChange={this.saveInfo}
                            value={this.state.item}/>

                        <label htmlFor="units">Units</label>
                            <input id="units" placeholder="Type Here"
                            onChange={this.saveInfo}
                            value={this.state.units}/>

                        <label htmlFor="quanity">Quanity</label>
                            <input id="quanity" placeholder="Type Here"
                            onChange={this.saveInfo}
                            value={this.state.quanity}/>
                            
                        <button type="submit">Add Item</button>
                    </form>
                </div>
            )
        }




}

export default Grocery
