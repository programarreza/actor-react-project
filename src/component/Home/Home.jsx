/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Home = ({actor, handleSelectActor}) => {
	const {image, name, role, salary, id} = actor;
	// console.log(actor);
	

	return (
		<div>
			<div className='leading-7 border-2 text-center p-4 font-semibold'>
				<img className='rounded-full w-20 mx-auto' src={image} alt="" />

				<h2>{name}</h2>
				<p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ullam.</small></p>

				<div className='flex justify-between'>
					<p>salary : ${salary}</p>
					<p>{role}</p>
				</div>
				<button onClick={() => handleSelectActor(actor)} className='btn btn-info text-white'>Select</button>
			</div>
		</div>
	);
};

Home.propTypes = {
	actor: PropTypes.object,
	handleSelectActor: PropTypes.func 
}

export default Home;