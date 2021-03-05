import React ,{Component} from 'react'

class Booklist extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            imgUrl:0
        }
    }
    handleTheClick(value){
        this.setState({imgUrl:value})    
    }
    componentDidUpdate(){
        // console.log(this.props.books)
        // console.log(this.state.imgUrl)
        const valueForIndex = this.state.imgUrl-1
        let tilteForFunctoin = this.props.books[valueForIndex].title
        // console.log(tilteForFunctoin)
        this.props.addToShelf(tilteForFunctoin)
    }

    render(){
        
        let mappedBooks = this.props.books.map((e,i) => {
            return(
                <div className = 'book'>
                    <img name = {this.props.books[i].id} src = {this.props.books[i].img} onClick={(e)=>this.handleTheClick( e.target.name)}/>
                    <p>{this.props.books[i].title}</p>
                    <p>{this.props.books[i].author}</p>
                </div>
            )
        })

        // console.log(this.props.books[0].title)
        // console.log(mappedBooks)
        return(
            <div className = 'eachbook'>
                <p className='books1' >{mappedBooks}</p>
            </div>
        )
    }
}
export default Booklist