import React, {Component} from 'react'



class Shelf extends Component {
    constructor(){
        super()
        this.state = {
            shelfToShow:[]
        }
    }
    
    componentDidUpdate(){
        const mappedTitles = this.props.shelfArr.map((e,i)=>e)

        const uniqueforShelf = [...new Set(mappedTitles)] 

        this.
    }
    
    render(){

        
        return(
            <div>
                <p>Shelf</p>
                <p>{mappedTitles}</p>

            </div>
        )
    }
}
export default Shelf