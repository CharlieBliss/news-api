import React, { useState } from 'react'
import 'react-material-layout/dist/react-material-class-layout.min.css'
import { CardList, AppBar } from './components'
import styles from './App.css'
// In general, in a bigger app I would use something like styled
// components or a different css-in-js solution, but it seemed like overkill here.


const App = React.memo(() => {

	// In an api call-heavy app (especially with CRUD), I would probably use redux
	// but I like the new react hooks syntax for simple stuff like this

	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(false)
	const [active, setActive] = useState(false)

	return (
		<div>
			<AppBar
				setArticles={setArticles}
				articles={articles}
				setActive={setActive}
				setLoading={setLoading}
			/>
			<div className={styles.content}>
				<CardList
					cardList={articles}
					active={active}
					loading={loading}
				/>
			</div>
		</div>
	)
})

export default App
