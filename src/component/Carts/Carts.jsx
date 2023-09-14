/* eslint-disable react/prop-types */
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Carts = ({selectedActor, remaining, totalCost}) => {
	console.log(remaining);

	return (
		<div>
			<h1>Total Actor: {selectedActor.length}</h1>
			<h1>Total Cost : {totalCost}</h1>
			<h1>Remaining : {remaining}</h1>
			{
				selectedActor.map((actor, index) => <Cart key={index} actor={actor}></Cart>)
			}
		</div>
	);
};

Carts.propTypes = {
	selectedActor: PropTypes.array
}

export default Carts;