import React from "react";
import { businessDetails } from "../Data/business";
import "../Styles/businessProfile.css";

const LeftSide = () => {
	const { image, name, phone, businessHours } = businessDetails;

	return (
		<div className="left-side-container">
			{/* Business Image */}
			<div className="business-image-container">
				<img
					src={image}
					alt={`${name} storefront`}
					className="business-image"
				/>
			</div>

			{/* Map Section */}
			{/* <div className="map-container">
				<img
					src={mapImage}
					alt={`Map showing location of ${name}`}
					className="map-image"
				/>
				<div className="map-marker">
					<div className="marker-pin"></div>
				</div>
				<div className="map-info">
					<div className="business-name">{name}</div>
					<div className="business-address">{address}</div>
				</div>
			</div> */}

			{/* Business Hours */}
			<div className="business-hours-section">
				<h3 className="section-title">Business Hours</h3>
				<div className="hours-list">
					{businessHours?.map(({ day, open, close }) => (
						<div key={day} className="hours-row">
							<span className="day">{day}</span>
							<span className="hours">{`${open} - ${close}`}</span>
						</div>
					))}
				</div>
			</div>

			{/* Phone Number */}
			<div className="phone-section">
				<a href={`tel:${phone}`} className="phone-link">
					<div className="phone-icon">📞</div>
					<span className="phone-number">{phone}</span>
				</a>
			</div>
		</div>
	);
};

export default LeftSide;
