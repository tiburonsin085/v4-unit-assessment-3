import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './Components/data'
import SearchBar from './Components/SearchBar'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:data,
      shelf : [],
      books: data
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }

  addToShelf(value){
    
    this.setState({shelf: [...this.state.shelf,value]})
    console.log(this.state.shelf)
  }

  clearShelf(){
    this.setState({shelf:[]})
  }

  filterBooks=(value)=>{
    if(value === ''){
      this.setState({data:data})
    }
    else{
      const filterBooks = this.state.data.filter((e,i) => this.state.data[i].title.includes(value))
      this.setState({data:filterBooks})
      console.log(value)
      console.log(this.state.data[0].title)
    }

  //   console.log(value)
  }
    // console.log(value)




  render(){
    
    
    return (
      <div className = "App">
        <header>
          <Header/>
        </header>
        <section>
          <SearchBar filterBooks1 = {this.filterBooks}/>
        </section>
        <section className = 'bookAndShelf'>
          <div className ='booklist'>
            <BookList 
            books = {this.state.data} className = 'bookListInside'
            addToShelf = {this.addToShelf}/>
          </div>
          <div>
            <Shelf shelfArr = {this.state.shelf}  className='shelf'  clearShelf= {this.clearShelf}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
