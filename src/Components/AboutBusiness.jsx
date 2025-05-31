import { businessDetails } from "../Data/business";

function AboutBusiness(business) {
	return (
		<section>
			<h2>About {business.name}</h2>
			<p>{business.about}</p>
		</section>
	);
}

export default AboutBusiness;
