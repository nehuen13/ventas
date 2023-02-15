import { AiOutlineShoppingCart } from 'react-icons/ai';

const Titulo = ({ children }) => (
	<h2 className="text-2xl font-black text-blue-400">{children}</h2>
);

const Navegacion = () => (
	<nav>
		<ul className="flex gap-3">
			<li>
				<a href="">Remeras</a>
			</li>
			<li>
				<a href="">Zapatillas</a>
			</li>
			<li>
				<a href="">Busos y Camperas</a>
			</li>
			<li>
				<a href="">Pantalones</a>
			</li>
			<li>
				<a href="">Accesorios</a>
			</li>
			<li>
				<a href="">Nosotros</a>
			</li>
		</ul>
	</nav>
);

const Carrito = () => <AiOutlineShoppingCart className="text-2xl" />;

const NavBar = ({ cantidad }) => {
	return (
		<header className=" bg-gray-100">
			<div className="w-[1440px] max-w-full mx-auto py-3 flex justify-between items-center">
				{/* titulo */}
				<div className="px-2">
					<Titulo>{'Primera Entrega CoderHouse'}</Titulo>
				</div>
				{/* navegacion del ecommerce */}
				<Navegacion />
				{/*carrito*/}
				<div className="flex gap-2 items-center">
					<Carrito /> {cantidad}
				</div>
			</div>
		</header>
	);
};

export default NavBar;
