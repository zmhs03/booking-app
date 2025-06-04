import { Link } from "react-router";
import { ImStarFull } from "react-icons/im";
import { businessDetails } from "../Data/business";
import "../Styles/businessHome.css";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

function BusinessCardHome() {
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
	const topRatedBusinesses = [...businessDetails]
		.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
		.slice(0, 3);

	return (
		<div className="business-contr">
			{topRatedBusinesses.map((business) => (
				<Link
					to={`/business/${business.id}`}
					style={{ textDecoration: "none", color: "inherit" }}
					key={business.id}
				>
					<div className="business-box">
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
							<h3 className="business-text">
								{business.name}
								<button
									onClick={() => toggleFavourite(business.id)}
									className={`favor-btn ${
										isFavourited(business.id) ? "active" : ""
									}`}
								>
									{isFavourited(business.id) ? (
										<IoHeart />
									) : (
										<IoHeartOutline />
									)}
								</button>
							</h3>

							<p className="business-addr">{business.address}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default BusinessCardHome;
