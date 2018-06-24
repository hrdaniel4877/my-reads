import React, {Component} from 'react'

class SearchBooks extends Component {
	state = {
		books: []
	}

	render() {

        const {onChangeShelf} = this.props;
        const {books} = this.state;

		return (
			<div className='search-books'>
				Search...
			</div>
		)
	}
}

export default SearchBooks
