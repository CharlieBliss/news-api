import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

import { Card } from '.'
import styles from './styles.css'

const CardList = ({ cardList }) => {
	const cards = () => cardList.map(card => (
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

	return (
		<div className={classnames(styles.cardList, 'layout-column layout-gt-sm-row layout-align-space-around layout-wrap')}>
			{cards()}
		</div>
	)
}

export default CardList

CardList.propTypes = {
	cardList: PropTypes.array,
}

CardList.defaultProps = {
	cardList: [],
}
