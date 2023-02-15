import Main from './components/Main';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
	const [cantidad, setCantidad] = useState(0);

	const handleSubmit = e => {
		e.preventDefault();

		setCantidad(cantidad + 1);
	};
	return (
		<div>
			<NavBar cantidad={cantidad} />
			<Main
				cantidad={cantidad}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}

export default App;
