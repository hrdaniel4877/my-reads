import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
	return (
		<div className='bookshelf'>
			<h2>Book Shelf</h2>
			<Book />
		</div>
	)
}

export default BookShelf