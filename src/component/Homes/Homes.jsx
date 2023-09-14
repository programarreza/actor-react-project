import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Home from '../Home/Home';
import './Homes.css';
const Homes = () => {

	const [actors, setActors] = useState([]);

	const [selectedActor, setSelectedActor] = useState([]);

	useEffect(() => {
		fetch('./data.json')
			.then(response => response.json())
			.then(data => setActors(data))
	}, [])


	const handleSelectActor = (actor) => {
		const isExist = selectedActor.find(item => item.id == actor.id);
		
		if(isExist) {
			return alert('already Booked');
		}
		else{

			return setSelectedActor([...selectedActor, actor]);
		}
	}

	// console.log(selectedActor);
	return (
		<main>
			<div className='mx-12 flex'>
				<div className='w-2/3  grid md:grid-cols-3 gap-4'>
					{
						actors.map(actor => <Home key={actor.id} actor={actor} handleSelectActor={handleSelectActor}></Home>)
					}
				</div>

				<div className='w-1/3 border-2'>
					{/* <h1>this is Cart</h1> */}
					<Carts selectedActor={selectedActor}></Carts>
				</div>
			</div>
		</main>
	);
};

export default Homes;