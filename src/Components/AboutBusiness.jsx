import "../Styles/businessProfile.css";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

function AboutBusiness({ business }) {
	const toggleFavourite = (businessId) => {
		const savedFavourites = JSON.parse(
			localStorage.getItem("favouriteBusinesses") || "[]"
		);
		let updatedFavourites;

		if (savedFavourites.includes(businessId)) {
			updatedFavourites = savedFavourites.filter(
				(id) => id !== businessId
			);
		} else {
			updatedFavourites = [...savedFavourites, businessId];
		}

		localStorage.setItem(
			"favouriteBusinesses",
			JSON.stringify(updatedFavourites)
		);
	};
	const isFavourited = (businessId) => {
		const savedFavourites = JSON.parse(
			localStorage.getItem("favouriteBusinesses") || "[]"
		);
		return savedFavourites.includes(businessId);
	};
	if (!business || !business.name || !business.about) {
		return <p className="loading">Loading business details...</p>;
	}

	const { name, about } = business;

	return (
		<section className="about-business">
			<div className="about-header">
				<h2>About {name}</h2>
				<button
					onClick={() => toggleFavourite(business.id)}
					className={`favorite-btn ${
						isFavourited(business.id) ? "active" : ""
					}`}
				>
					{isFavourited(business.id) ? <IoHeart /> : <IoHeartOutline />}
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
