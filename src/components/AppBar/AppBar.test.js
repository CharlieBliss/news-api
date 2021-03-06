import React from 'react'
import { render } from 'react-testing-library'
import AppBar from './AppBar'

test('Renders with expected children', () => {
	const { container } = render(<AppBar />)
	expect(container.textContent).toContain('Select...Search')
})
