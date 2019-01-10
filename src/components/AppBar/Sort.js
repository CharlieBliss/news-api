import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'

import { sortOptions } from '../../constants/constants'

const customStyles = {
	// I don't like the inconsistency in styling here but this was react-select's
	// recommended styling method
	control: provided => ({
		...provided,
		backgroundColor: '#313131',
	}),
	singleValue: provided => ({
		...provided,
		color: '#D9D9D9',
	}),
	menu: provided => ({
		...provided,
		backgroundColor: '#313131',
	}),
	option: (provided, state) => ({
		...provided,
		border: 'none',
		color: state.isSelected ? '#313131' : '#D9D9D9',
		backgroundColor: state.isSelected ? '#D9D9D9' : '#313131',
	}),
}


const Sort = ({ onChange }) => (
	<Select
		options={sortOptions}
		onChange={
			(sort) => {
				onChange(sort.value)
			}
		}
		styles={customStyles}
	/>
)

export default Sort

Sort.propTypes = {
	onChange: PropTypes.func.isRequired,
}

