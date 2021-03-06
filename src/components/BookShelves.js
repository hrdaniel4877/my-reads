import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const BookShelves = (props) => {
	
    const {shelves, books, onChangeShelf} = props

	return (
		<div className='list-books'>
            
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
                    {shelves.map((shelf) => (
                        <div key={shelf.id}>
                            <BookShelf 
                                shelf={shelf}
                                books={books.filter( (book) => book.shelf === shelf.id )}
                                onChangeShelf={onChangeShelf}
                            />
                        </div>
                    ))}
            </div>

            <div className="open-search">
                <Link to="/search">
                    Add a book
                </Link>
            </div>

		</div>
	)
}

export default BookShelves
