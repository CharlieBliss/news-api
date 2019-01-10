import 'isomorphic-fetch'
import { apiKey } from '../constants/constants'

export async function hitNewsApi(search, sort, page = 1) {
	// Temporary caching of results based on search/sort would probably be useful here
	// if the api took longer to respond, but I think it's quick enough that it's not really warranted

	const requestUrl = `https://newsapi.org/v2/everything?language=en&pageSize=24&apiKey=${apiKey}&q=${search}${sort ? `&sortBy=${sort}` : ''}${page ? `&page=${page}` : ''}`
	const response = await fetch(requestUrl)
	if (response.status === 200) {
		const json = await response.json()
		return json
	}
	throw new Error('No Results Found')
}


// Handles Initial search
export const handleSearch = async (search, sort, page, setPage, setArticles) => {
	setPage(1)
	const results = await hitNewsApi(search, sort, page)
	setArticles(results.articles)
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
