import React from "react";
import "../Styles/businessExplore.css";
import { ImStarFull } from "react-icons/im";
import { SlHeart } from "react-icons/sl";
import { businessDetails } from "../Data/business";

function BusinessCardExplore() {
	return (
		<div className="business-container">
			{businessDetails.map((business) => (
				<div className="business-card" key={business.id}>
					<div className="business-image-container">
						<img
							className="business-image"
							src={business.image}
							alt={business.name}
						/>
					</div>

					<div className="business-content">
						<div className="business-header">
							<div className="business-info">
								<h4 className="business-name">{business.name}</h4>
								<div className="business-rating">
									<span className="rating-number">{business.rating}</span>
									<ImStarFull className="star-icon" />
								</div>
							</div>
							<button className="favorite-btn">
								<SlHeart className="heart-icon" />
							</button>
						</div>

						<p className="business-address">{business.address}</p>

						<div className="service-section">
							<h4 className="service-name">{business.popularService}</h4>
							<p className="service-duration">
								{business.estimatedDuration}
							</p>

							<div className="service-booking">
								<span className="service-price">R {business.price}</span>
								<button className="book-btn">Book</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default BusinessCardExplore;
