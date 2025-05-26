import React from "react";
import { businessDetails } from "../Data/business";
import "../Styles/explore.css";
import BusinessCardExplore from "../Components/BusinessCardExplore";
import Footer from "../Components/Footer";

function Explore() {
	return (
		<div>
			<BusinessCardExplore />
			<Footer />
		</div>
	);
}

export default Explore;
