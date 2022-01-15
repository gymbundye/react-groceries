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
        this.props.makeList(this.state)

    }

        render(){
            return(
                <div className="groceryDiv">
                    <h2><center>Stock Up!</center></h2>
                    <form onSubmit={this.submitButton}>

                        <label htmlFor="item">Item: </label>
                           <input id="item" placeholder="Make"
                            onChange={this.saveInfo}
                            value={this.state.item}/>
                            <br></br>

                        <label htmlFor="units">Units: </label>
                            <input id="units" placeholder="Your"
                            onChange={this.saveInfo}
                            value={this.state.units}/>
                            <br></br>

                        <label htmlFor="quanity">Quanity: </label>
                            <input id="quanity" placeholder="List!"
                            onChange={this.saveInfo}
                            value={this.state.quanity}/>
                            <br></br>
                            <br></br>
                       <center> <button type="submit">Add to cart</button></center>
                    </form>
                </div>
            )
        }




}

export default Grocery
