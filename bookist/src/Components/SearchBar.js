import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            userInput : ''
        }
    }
    handleChange(value){
        this.setState({userInput:value})
    }

    handleClick=()=>{
        this.props.filterBooks1(this.state.userInput)
    }
    clearInput = () =>{
        this.setState({userInput : ''})
        
    }
    

    render(){
        // console.log(this.state)
        return(
            <div>
                <div>
                    <input onChange = {(e)=> this.handleChange(e.target.value)}/>
                    <p>{this.state.userInput}</p>
                </div>
                <div>
                    <button onClick ={this.handleClick}>Search</button>
                    <button onClick = {this.clearInput}>Clear</button>
                </div>
            </div>
        )
    }
}

export default SearchBar