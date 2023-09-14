import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Home from '../Home/Home';
import './Homes.css';
const Homes = () => {

	const [actors, setActors] = useState([]);
	const [selectedActor, setSelectedActor] = useState([]);
	const [remaining, setRemaining] = useState(0);
	const [totalCost, setTotalCost] = useState(0);

	useEffect(() => {
		fetch('./data.json')
			.then(response => response.json())
			.then(data => setActors(data))
	}, [])

	const handleSelectActor = (actor) => {
		const isExist = selectedActor.find(item => item.id == actor.id);
		let count = actor.salary;

		if (isExist) {
			return alert('already Booked');
		}
		else {
			selectedActor.forEach(item => {
				count = count + item.salary;
			})

			const totalRemaining = 20000 - count;
			
			if(count > 20000){
				return alert("ar hobe nah taka ses")
			}
			setRemaining(totalRemaining);

			setTotalCost(count);
			return setSelectedActor([...selectedActor, actor]);
		}
	}

	return (
		<main>
			<div className='mx-12 flex'>
				<div className='w-2/3  grid md:grid-cols-3 gap-4'>
					{
						actors.map(actor => <Home key={actor.id} actor={actor} handleSelectActor={handleSelectActor}></Home>)
					}
				</div>

				<div className='w-1/3 border-2'>
					<Carts selectedActor={selectedActor} remaining={remaining} totalCost={totalCost}></Carts>
				</div>
			</div>
		</main>
	);
};

export default Homes;