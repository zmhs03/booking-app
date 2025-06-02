import React from "react";
import { BsTelephone } from "react-icons/bs";
import { businessDetails } from "../Data/business";
import "../Styles/businessProfile.css";

function Phone() {
	const tel = businessDetails.tel;

	return (
		<div className="phone-section">
			<div className="tel-display">
				<div className="phone-icon">
					<BsTelephone />
				</div>
				<span className="phone-number">{tel}</span>
			</div>
		</div>
	);
}

export default Phone;
