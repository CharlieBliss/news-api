import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { RingLoader } from 'react-spinners'

import { Card } from '.'
import styles from './styles.css'

const CardList = React.memo(({ cardList, active, loading  }) => {
	const cards = () => {
		if (cardList.length) {
			return cardList.map(card => (
				<div className={classnames(styles.cardListItem, 'flex-shrink')}>
					<Card
						title={card.title}
						body={card.description}
						url={card.url}
						// The image prop will only use the default if undefined -- otherwise passing
						// null creates a broken image link
						image={card.urlToImage || undefined}
					/>
				</div>
			))
		}
		if (loading) {
			// This is DEFINITELY overkill but I like the loading icon
			return <RingLoader size={100}/>
		}
		return (
			<div className={styles.noResults}>
				{
					active ? 'No Results Found'
						: 'Please enter a search term'
				}
			</div>
		)
	}

	return (
		<div className={classnames(styles.cardList, 'layout-column layout-gt-sm-row layout-align-space-around layout-wrap')}>
			{cards()}
		</div>
	)
})

export default CardList

CardList.propTypes = {
	cardList: PropTypes.array,
	active: PropTypes.bool,
	loading: PropTypes.bool,
}

CardList.defaultProps = {
	cardList: [],
	active: false,
	loading: false,
}
