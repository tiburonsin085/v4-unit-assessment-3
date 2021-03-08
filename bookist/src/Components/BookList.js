import React ,{Component} from 'react'

class Booklist extends Component {
    constructor(){
        super()
        this.state = {
            arrayForShelf: [],
            imgUrl:0,
           
        }
    }
    // handleTheClick(value){
    //     this.setState({imgUrl:value})
    //     // console.log(prevProps.imgUrl)
        
    // }
    // componentDidUpdate(prevProps){
    //     // console.log(this.props.books)
    //     // console.log(this.state.imgUrl)
    //     if (this.state.arrayForShelf !== prevProps.arrayForShelf){ 
    //         const valueForIndex = this.state.imgUrl-1
    //         let tilteForFunctoin = this.props.books[valueForIndex].title
    //         // this.setState({arrayForShelf:[...this.state.arrayForShelf,tilteForFunctoin]})
    //         this.props.addToShelf(this.state.arrayForShelf)
            

    //     }
        
    // }
    

    render(){
        
        let mappedBooks = this.props.books.map((e,i) => {
            return(
                <div className = 'book'>
                    <img name = {this.props.books[i].title} src = {this.props.books[i].img} onClick={(e) => this.props.addToShelf(e.target.name)}/>
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