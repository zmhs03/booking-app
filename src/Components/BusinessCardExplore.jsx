import { useState, useEffect } from "react";
import { Link } from "react-router";
import "../Styles/businessExplore.css";
import { ImStarFull } from "react-icons/im";
import { SlHeart } from "react-icons/sl";
import { businessDetails } from "../Data/business";

const ITEMS_PER_PAGE = 6;

function BusinessCardExplore() {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("Default");

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	// Extract unique services for filter dropdown
	const allCategories = [
		"All",
		...new Set(businessDetails.map((b) => b.category)),
	];

	// Filter businesses
	let filteredBusinesses =
		selectedCategory === "All"
			? businessDetails
			: businessDetails.filter((b) => b.category === selectedCategory);

	// Sort businesses

	if (sortBy === "AlphabeticalAZ") {
		filteredBusinesses.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortBy === "AlphabeticalZA") {
		filteredBusinesses.sort((a, b) => b.name.localeCompare(a.name));
	} else if (sortBy === "RatingHigh") {
		filteredBusinesses.sort((a, b) => b.rating - a.rating);
	} else if (sortBy === "RatingLow") {
		filteredBusinesses.sort((a, b) => a.rating - b.rating);
	} else if (sortBy === "Default") {
		for (let i = filteredBusinesses.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[filteredBusinesses[i], filteredBusinesses[j]] = [
				filteredBusinesses[j],
				filteredBusinesses[i],
			];
		}
	}

	const totalPages = Math.ceil(filteredBusinesses.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentBusinesses = filteredBusinesses.slice(startIndex, endIndex);

	const handlePrev = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const handleNext = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	const handleFilterChange = (e) => {
		setSelectedCategory(e.target.value);
		setCurrentPage(1); // Reset to page 1 when filtering
	};

	const handleSortChange = (e) => {
		setSortBy(e.target.value);
		setCurrentPage(1); // Reset to page 1 when sorting
	};

	return (
		<div>
			{/* Filter & Sort Controls */}
			<div className="filter-sort-controls">
				<select value={selectedCategory} onChange={handleFilterChange}>
					{allCategories.map((category, i) => (
						<option key={i} value={category}>
							{category}
						</option>
					))}
				</select>

				<select value={sortBy} onChange={handleSortChange}>
					<option value="Default">Default</option>
					<option value="AlphabeticalAZ">Alphabetical (A–Z)</option>
					<option value="AlphabeticalZA">Alphabetical (Z–A)</option>
					<option value="RatingHigh">Rating (High to Low)</option>
					<option value="RatingLow">Rating (Low to High)</option>
				</select>
			</div>

			<div className="business-container">
				{currentBusinesses.map((business) => (
					<Link
						to={`/business/${business.id}`}
						style={{ textDecoration: "none", color: "inherit" }}
						key={business.id}
					>
						<div className="business-card">
							<div className="business-image-container">
								<img
									className="business-image"
									src={business.image}
									alt={business.name}
								/>
							</div>

							<div className="business-content">
								<div className="business-header">
									<div className="business-info">
										<h3 className="business-name">{business.name}</h3>
										<div className="business-rating">
											<span className="rating-number">
												{business.rating}
											</span>
											<ImStarFull className="star-icon" />
										</div>
									</div>
									<button className="favorite-btn">
										<SlHeart className="heart-icon" />
									</button>
								</div>

								<p className="business-address">{business.address}</p>

								<div className="service-section">
									<h4 className="service-name">{business.service}</h4>
									<p className="service-duration">
										{business.estimatedDuration}
									</p>

									<div className="service-booking">
										<span className="service-price">
											R {business.price}
										</span>
										<button className="book-btn">Book</button>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Pagination Controls */}
			<div className="pagination-controls">
				<button onClick={handlePrev} disabled={currentPage === 1}>
					Previous
				</button>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<button onClick={handleNext} disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</div>
	);
}

export default BusinessCardExplore;
