import React from 'react'
import { WiCloud } from 'react-icons/wi'
import styled from '@emotion/styled'

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
		<Card className='card'>
			<div className='location'>
				<h1 className='city'>Sydney</h1>
				<h3 className='country'>AU</h3>
			</div>

			<WiCloud className='icon' />

			<h1 className='temp'>20 °C</h1>
			<h3 className='cond'>Clouds</h3>
		</Card>
	)
}

export default WeatherCard
