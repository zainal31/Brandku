import Card from "./Card";

const CardGrid = ({ features }) => {
	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Mengapa Brandku?</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				{features.map((items) => (
					<Card key={items.id} icon={items.icon} title={items.title} description={items.description} />
				))}
			</div>
		</section>
	);
};

export default CardGrid;
