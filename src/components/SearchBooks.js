import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
	
    // search for books function
    searchBooks = (query) => {
        const{shelfBooks} = this.props

        if (query) {
            BooksAPI.search(query, 1000).then( (searchResp) => {
                if(searchResp.length > 0) {
                    const booksToShow = searchResp.map( (searchBook) => {
                        const found = shelfBooks.find( (shelfBook) => shelfBook.id === searchBook.id)
                        searchBook.shelf = found ? found.shelf : 'none'
                        return searchBook
                    })
                    this.setState({books:booksToShow})
                }else{
                    this.setState({books:[]})     
                }
            })
        } else {
            this.setState({books:[]})
        }
    }

	state = {
		books: []
	}

	render() {

        const {onChangeShelf} = this.props
        const {books} = this.state

		return (
			<div className='search-books'>
                
                <div className="search-books-bar">
                    
                    <Link 
                        to="/"
                        className="close-search"
                    >Close
                    </Link>
                    
                    <div className="search-books-input-wrapper">
                        <DebounceInput 
                            placeholder="Type a Book Title to Search..."
                            debounceTimeout={100}
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />
                    </div>

                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.length > 0 && books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onChangeShelf={onChangeShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>

			</div>
		)
	}
}

export default SearchBooks
