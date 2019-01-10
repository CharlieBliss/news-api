import PropTypes from 'prop-types'
import React from 'react'

import { Paper, Button } from '..'
import styles from './styles.css'

const handleClick = url => window.open(url)

const Card = ({
	title,
	image,
	body,
	buttonLabel,
	url,
}) => (
	<Paper
		white
		className={styles.card}
	>
		<div onClick={() => handleClick(url)}>
			<img className={styles.image} src={image} alt={title} />
		</div>
		<div className={styles.content}>
			<div className={styles.title}>
				{title}
			</div>
			<div className={styles.body}>
				{body}
			</div>
			<Button
				label={buttonLabel}
				onClick={() => handleClick(url)}
			/>
		</div>
	</Paper>
)

export default Card

Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	buttonLabel: PropTypes.string,
}

Card.defaultProps = {
	title: '',
	image: 'https://www.rd.com/wp-content/uploads/2018/02/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg',
	// ^^ Official backup image :)
	body: '',
	buttonLabel: 'Read More',
	url: '',
}

Card.propDoc = {
	title: 'Card Title',
	image: 'Url to display an image on the card',
	body: 'The main text content on the card',
	link: 'The card action, typically a link to a detail page',
}
