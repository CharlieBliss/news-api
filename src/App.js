import React, { useState } from 'react'
import { get } from 'lodash'
import 'react-material-layout/dist/react-material-class-layout.min.css'
import { CardList, AppBar } from './components'
import styles from './App.css'
// In general, in a bigger app I would use something like styled
// components or a different css-in-js solution, but it seemed like overkill here.


const App = () => {

	const [articles, getArticles] = useState([])
	console.log(get(articles, 'articles'))
	return (
		<div>
			<AppBar
				getArticles={getArticles}
			/>
			<div className={styles.content}>
				<CardList
					cardList={get(articles, 'articles')}
				/>
			</div>
		</div>
	)
}

export default App
