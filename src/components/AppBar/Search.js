import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const Search = ({ value, onChange, enter }) => (
	<div className={styles.bar}>
		<input
			className={styles.search}
			type="text"
			onChange={(e) => {
				e.preventDefault()
				onChange(e.target.value)
			}}
			onKeyPress={(e) => {
				if (e.key === 'Enter') {
					e.preventDefault()
					enter()
				}
			}}
			value={value}
			placeholder="Search"
		/>
	</div>
)

export default Search

Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	enter: PropTypes.func.isRequired,
}

Search.defaultProps = {
	value: '',
}
