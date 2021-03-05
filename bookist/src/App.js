import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './Components/data'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:data,
      shelf : []
    }
    this.addToShelf = this.addToShelf.bind(this)
  }

  addToShelf(value){
    this.state.shelf.push(value)
    console.log(this.state.shelf)
    
  }
  componentDidUpdate(){
    console.log(this.state.shelf)
  }
  render(){
    // console.log(this.state.data[0])
    return (
      <div className = "App">
        <header>
          <Header/>
        </header>
        <section className = 'bookAndShelf'>
          <div className ='booklist'>
            <BookList 
            books = {this.state.data} className = 'bookListInside'
            addToShelf = {this.addToShelf}/>
          </div>
          <div>
            <Shelf shelfArr = {this.state.shelf}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
