import 'isomorphic-fetch'
import { apiKey } from '../constants/constants'

export async function hitNewsApi(search, sort, page = 1) {
	// Search terms are required while hitting the api
	const requestUrl = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${search}${sort ? `&sortBy=${sort}` : ''}${page ? `&page=${page}` : ''}`
	const response = await fetch(requestUrl)
	if (response.status === 200) {
		const json = await response.json()
		return json
	}
	throw new Error('No Results Found')
}

export const something = {}
