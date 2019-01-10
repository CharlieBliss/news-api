import PropTypes from 'prop-types'
import React, { useState } from 'react'
import classnames from 'classnames'
import { hitNewsApi } from '../../logic/api'


import { Search, Sort, Button } from '..'
import styles from './styles.css'

const AppBar = ({ getArticles }) => {
	const [search, setSearch] = useState('')
	const [sort, setSort] = useState('')

	const handleClick = async () => {
		const results = await hitNewsApi(search, sort, 1)
		getArticles(results)
	}

	return (
		<div
			className={classnames(
				styles.bar,
				'layout-row layout-xs-col layout-align-space-around-center flex-wrap',
			)}
		>
			<div className="flex-30">
				<Search
					value={search}
					onChange={setSearch}
					enter={handleClick}
				/>
			</div>
			<div className="flex-15">
				<Sort
					value={sort}
					onChange={setSort}
				/>
			</div>
			<div className="flex-15">
				<Button
					label="Search"
					onClick={handleClick}
					search
					disabled={!search}
				/>
			</div>
		</div>
	)
}

AppBar.propTypes = {
	getArticles: PropTypes.func.isRequired,
}

export default AppBar
