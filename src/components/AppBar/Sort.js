import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'

import { sortOptions } from '../../constants/constants'
import styles from './styles.css'

const Sort = ({ value, onChange }) => (
	<Select
		options={sortOptions}
		className={styles.sort}
		placeholder="Sort By"
		value={value}
		onChange={
			(e) => {
				e.preventDefault()
				onChange(e.target.value)
			}
		}
	/>
)

export default Sort

Sort.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
}

Sort.defaultProps = {
	value: '',
}
