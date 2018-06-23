import React, { Component } from 'react'

class Book extends Component {
	
	state = {
	    showInfo: false
    }

	render () {

		const {book} = this.props;		

		return (
			<div className='book'>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks &&book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : "none"}>
                            <option value="moveTo" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                <div className="book-info">
                    <a href="#" onClick={(event) => this.showBookDescription(event)}>Description</a>
                </div>
			</div>
		)
	}
}

export default Book
