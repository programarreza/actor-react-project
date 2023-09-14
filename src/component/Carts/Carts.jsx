import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({selectedActor}) => {
	console.log(selectedActor);

	return (
		<div>
			<h1>Total Actor: {selectedActor.length}</h1>
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