import React from "react";
import { ImStarFull } from "react-icons/im";
import { businessDetails } from "../Data/business";
import "../Styles/businessHome.css";

function BusinessCardHome() {
	const topRatedBusinesses = [...businessDetails]
		.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
		.slice(0, 3);

	return (
		<div className="business-container">
			{topRatedBusinesses.map((business) => (
				<div className="business-box" key={business.id}>
					<div className="business-logo">
						<img
							className="business-images"
							src={business.image}
							alt={business.name}
						/>
						<p className="business-rating">
							{business.rating}
							<ImStarFull className="star-icon" />
						</p>
					</div>
					<div className="business-details">
						<h3 className="business-name">{business.name}</h3>
						<p className="business-address">{business.address}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default BusinessCardHome;
