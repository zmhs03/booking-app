import { businessDetails } from "../Data/business";
import "../Styles/businessProfile.css";

function Hours({ businessHours }) {
	if (!Array.isArray(businessHours) || businessHours.length === 0) {
		return <p className="no-hours">No business hours available.</p>;
	}

	return (
		<div className="business-hours-section">
			<h3 className="section-title">Business Hours</h3>
			<div className="hours-list">
				{businessHours.map(({ day, open, close }, index) => (
					<div key={`${day}-${index}`} className="hours-row">
						<span className="day">{day}</span>
						<span className="hours">
							{open !== undefined && close !== undefined
								? `${open} - ${close}`
								: "Closed"}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Hours;
