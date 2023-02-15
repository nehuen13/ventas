import ItemListContainer from './ItemListContainer';
import { remeras } from '../data/productos';
const Titulo = ({ children }) => (
	<h2 className="text-2xl font-black text-blue-400">{children}</h2>
);
const Main = ({ handleSubmit, cantidad }) => {
	return (
		<main className="py-5 justify-center flex flex-col items-center gap-5">
			<Titulo>Productos</Titulo>
			<div className="flex gap-3">
				{remeras.map(remera => (
					<ItemListContainer
						handleSubmit={handleSubmit}
						cantidad={cantidad}
						remera={remera}
						key={remera.id}
					/>
				))}
			</div>
		</main>
	);
};

export default Main;
