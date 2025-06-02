import { useParams } from "react-router";
import { businessDetails } from "../Data/business";
import Map from "../Components/Map";
import Hours from "../Components/Hours";
import AboutBusiness from "../Components/AboutBusiness";
import Staff from "../Components/Staff";
import Reviews from "../Components/Reviews";
import ServiceCard from "../Components/ServiceCard";
import Phone from "../Components/Phone";
import "../Styles/businessProfile.css";
import { IoMdArrowBack } from "react-icons/io";

function BusinessProfile() {
	const { id } = useParams();
	const business = businessDetails.find(
		(item) => item.id === parseInt(id)
	);

	if (!business) return <p>Business not found.</p>;

	return (
		<div className="business-profile-container">
			<div className="columns">
				<div className="left-container">
					<button
						className="back-btn"
						onClick={() => window.history.back()}
					>
						<IoMdArrowBack />
					</button>
					<div className="business-image-container">
						<img
							src={business.image}
							alt={business.name}
							className="business-photo"
						/>
					</div>

					<Map name={business.name} address={business.address} />
					<Hours businessHours={business.businessHours} />
					<Phone tel={business.tel} />
				</div>

				<div className="right-container">
					<AboutBusiness business={business} />
					<Staff staff={business.staff} />
					<ServiceCard services={business.services} />
				</div>
			</div>
			<Reviews reviews={business.reviews} />
		</div>
	);
}

export default BusinessProfile;
