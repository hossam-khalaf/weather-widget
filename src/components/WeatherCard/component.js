import React from 'react'
import { WiCloud } from 'react-icons/wi'

const WeatherCard = (props) => {
	return (
		<div className='card'>
			<div className='location'>
				<h1 className='city'>Sydney</h1>
				<h3 className='country'>AU</h3>
			</div>

			<WiCloud className='icon' />

			<h1 className='temp'>20 °C</h1>
			<h3 className='cond'>Clouds</h3>
		</div>
	)
}

export default WeatherCard
