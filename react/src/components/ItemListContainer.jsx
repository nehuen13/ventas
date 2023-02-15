const ItemListContainer = ({ remera, handleSubmit, cantidad }) => {
	const { titulo } = remera;
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-3 bg-slate-400 p-4 rounded-md shadow-sm"
		>
			<label htmlFor="">{titulo}</label>
			<input
				type="submit"
				value={'Comprar'}
				className="bg-blue-600 text-white p-2 rounded-lg shadow-md"
				onClick={Number(cantidad)}
			/>
		</form>
	);
};

export default ItemListContainer;
