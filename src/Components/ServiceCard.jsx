import "../Styles/businessProfile.css";

function ServiceCard({ services, onBook }) {
	return (
		<section className="services-section">
			{Array.isArray(services) &&
				services.map((service, idx) => (
					<div key={idx} className="service-card">
						<div className="service-info">
							<p className="service-name">
								<strong>{service.name}</strong>
							</p>
							<p className="duration">{service.duration}</p>
							<p className="description">{service.description}</p>
						</div>
						<div className="price-booking">
							<p className="price">R {service.price}</p>
							<button className="book-btn" onClick={() => onBook(service)}>
								Book
							</button>
						</div>
					</div>
				))}
			<button className="show-more">Show More...</button>
		</section>
	);
}

export default ServiceCard;
