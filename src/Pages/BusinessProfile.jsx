import { useParams } from "react-router";
import { businessDetails } from "../Data/business";
import LeftSide from "../Components/LeftSide";
import AboutBusiness from "../Components/AboutBusiness";
import Staff from "../Components/Staff";
import Reviews from "../Components/Reviews";
import ServiceCard from "../Components/ServiceCard";

function BusinessProfile() {
	const { id } = useParams();
	const business = businessDetails.find(
		(item) => item.id === parseInt(id)
	);

	if (!business) return <p>Business not found.</p>;

	return (
		<div className="business-profile-container">
			<AboutBusiness business={business} />
			<div className="profile-grid">
				<LeftSide hours={business.hours} />
				{/* <LeftSide phone={business.phone} map={business.mapImage} /> */}
			</div>
			<Staff staff={business.staff} />
			<ServiceCard services={business.services} />
			<Reviews reviews={business.reviews} />
		</div>
	);
}

export default BusinessProfile;
