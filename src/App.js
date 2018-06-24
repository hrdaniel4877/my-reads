import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './components/BookShelves'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then( _=> {
      this.setState({books: this.state.books.filter( (b) => b.id !== book.id).concat([ book ])})
    })
  }

  render() {
    
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
