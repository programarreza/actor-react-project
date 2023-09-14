import PropTypes from 'prop-types';

const Cart = ({actor}) => {
	const {name} = actor;
	return (
		<div>
			<h3>{name}</h3>
		</div>
	);
};

Cart.propType = {
	actor: PropTypes.array
}
export default Cart;