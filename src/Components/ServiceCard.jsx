import React from "react";
import { businessDetails } from "../Data/business";

function ServiceCard({ services }) {
	return (
		<section className="services-section">
			<h3>Services</h3>
			{Array.isArray(services) &&
				services.map((service, idx) => (
					<div key={idx} className="service-card">
						<div>
							<p>
								<strong>{service.name}</strong>
							</p>
							<p className="description">{service.description}</p>
							<p className="duration">{service.duration}</p>
						</div>
						<div className="price-booking">
							<p>{service.price}</p>
							<button>Book</button>
						</div>
					</div>
				))}
			<button className="show-more">Show More...</button>
		</section>
	);
}

export default ServiceCard;
