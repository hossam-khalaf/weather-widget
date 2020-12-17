import React from 'react'
import styled from '@emotion/styled'

import Location from './Location'
import Icon from './Icon'
import Condition from './Condition'

const WeatherCard = (props) => {
	const Card = styled.div`
		background: linear-gradient(to bottom, blue, lightblue);
		margin: 0 auto;
		width: 200px;
		height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border-radius: 16px;
		box-shadow: 1px 5px 10px 3px rgba(0, 0, 0, 0.164);
	`

	return (
		<Card>
			<Location />
			<Icon />
			<Condition />
		</Card>
	)
}

export default WeatherCard
