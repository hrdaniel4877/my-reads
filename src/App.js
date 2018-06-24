import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './components/BookShelves'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  
  // the component's state
  state = {
    books: []
  }

  // load the books after the components mounted
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // function to handle the books' shelf change
  changeShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then( _=> {
      this.setState({books: this.state.books.filter( (b) => b.id !== book.id).concat([ book ])})
    })
  }

  render() {
    
    // the shelves's IDs
    const shelves = [
      {id: 'currentlyReading', title: 'Currently Reading'},
      {id: 'wantToRead', title: 'Want to Read'},
      {id: 'read', title: 'Read'}
    ]

    const{books} = this.state

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <BookShelves 
            shelves={shelves}
            books={books}   
            onChangeShelf={ this.changeShelf }    
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            onChangeShelf={ this.changeShelf }
            shelfBooks={books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
