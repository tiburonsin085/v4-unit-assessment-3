import React, {Component} from 'react'



class Shelf extends Component {
    constructor(){
        super()
        this.state = {
            shelfToShow:[]
        }
    }
    
    
    
    render(){

        const shelfArr = this.props.shelfArr.map((e)=> e)

        const shelfFilter = [... new Set(shelfArr)]
        
        const shelfShow = shelfFilter.map(e => <p className='titlesInTheShelf'>{e}</p>)
        
        return(
            <div className='shelf'>
                <p>Shelf</p>
                <button onClick = {this.props.clearShelf}>Clean Shelf</button>
                <p>{shelfShow}</p>

            </div>
        )
    }
}
export default Shelf