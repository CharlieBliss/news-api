import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Search from './Search'

// I don't think that extensive testing is really in scope for this assignment,
// But I figured I would include a few


test('OnEnterKey should fire on Enter', () => {
	let count = 0
	const addToCount = () => { count += 1 }
	const { container } = render(<Search value="hello" onEnterKey={addToCount(count)} />)
	const input = container.firstChild.firstChild
	fireEvent.keyDown(input, { key: 'Enter', code: 13 })
	expect(input.value).toContain('hello')
	expect(count).toEqual(1)
})
