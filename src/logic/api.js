import 'isomorphic-fetch'
import qs from 'qs'
import { apiKey } from '../constants/constants'

export async function hitNewsApi(q, sortBy = 'publishedAt', page = 1) {
	// Temporary caching of results based on search/sort would probably be useful here
	// if the api took longer to respond, but I think it's quick enough that it's not really warranted

	// This is also probably overkill but it makes the querystring very easy to understand
	const queries = qs.stringify({
		language: 'en',
		apiKey,
		sortBy,
		q,
		page,
	})
	const requestUrl = `https://newsapi.org/v2/everything?${queries}`
	const response = await fetch(requestUrl)
	if (response.status === 200) {
		return response.json()
	}
	throw new Error('No Results Found')
}


// Handles Initial search
export const handleSearch = async (search, sort, page, setPage, setArticles, setActive, setLoading) => {
	// Set the app's state to dirty to handle initial message
	setActive(true)
	setLoading(true)
	// Set the page to one on search using the navbar
	setPage(1)
	const results = await hitNewsApi(search, sort, page)
	setArticles(results.articles)
	setLoading(false)
}
// Handles auto-scroll
export const onScroll = async (search, sort, page, setPage, articles, setArticles) => {
	if (
		window.innerHeight + document.documentElement.scrollTop
			=== document.documentElement.offsetHeight
	) {
		setPage(page + 1)
		const results = await hitNewsApi(search, sort, page + 1)
		setArticles(articles.concat(results.articles))
	}
}
