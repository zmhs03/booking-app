import "../Styles/businessProfile.css";

function ServiceCard({ services }) {
	return (
		<section className="services-section">
			<div className="services-header">
				<h3>Services</h3>
				{/* <div className="search-container">
					<input
						type="text"
						placeholder="Search for service"
						className="search-input"
					/>
					<div className="search-icon">🔍</div>
				</div> */}
			</div>

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
							<button className="book-btn">Book</button>
						</div>
					</div>
				))}
			<button className="show-more">Show More...</button>
		</section>
	);
}

export default ServiceCard;
