import PropTypes from 'prop-types'
import React, { useState } from 'react'
import classnames from 'classnames'
import { onScroll, handleSearch } from '../../logic/api'


import { Search, Sort, Button } from '..'
import styles from './styles.css'

const AppBar = ({ articles, setArticles }) => {
	const [search, setSearch] = useState('')
	const [sort, setSort] = useState('')
	const [page, setPage] = useState(1)

	// Handles Initial search
	const handleClick = () => { handleSearch(search, sort, page, setPage, setArticles) }
	window.onscroll = () => { onScroll(search, sort, page, setPage, articles, setArticles) }

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
					onEnterKey={handleClick}
				/>
			</div>
			<div className="flex-15">
				<Sort
					value={sort}
					onChange={setSort}
				/>
			</div>
			<div className={classnames(styles.searchAction, 'flex-15')}>
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
	articles: PropTypes.array,
	setArticles: PropTypes.func.isRequired,
}

AppBar.defaultProps = {
	articles: [],
}

export default AppBar
