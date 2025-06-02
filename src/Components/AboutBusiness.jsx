import { businessDetails } from "../Data/business";
import "../Styles/businessProfile.css";
import { SlHeart } from "react-icons/sl";

function AboutBusiness({ business }) {
	if (!business || !business.name || !business.about) {
		return <p className="loading">Loading business details...</p>;
	}

	const { name, about } = business;

	return (
		<section className="about-business">
			<div className="about-header">
				<h2>About {name}</h2>
				<button className="favorite-btn" aria-label="Add to favorites">
					<SlHeart className="heart-icon" />
				</button>
			</div>

			<div className="about-content">
				<h3>About Us</h3>
				<div className="about-text">
					<p>{about}</p>
				</div>
			</div>
		</section>
	);
}

export default AboutBusiness;
