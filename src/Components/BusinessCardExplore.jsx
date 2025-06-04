import { useState, useEffect } from "react";
import { Link } from "react-router";
import "../Styles/businessExplore.css";
import { ImStarFull } from "react-icons/im";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { businessDetails } from "../Data/business";
import BookingModal from "../Components/BookingModal";

const ITEMS_PER_PAGE = 6;

const toggleFavourite = (businessId) => {
	const savedFavourites = JSON.parse(
		localStorage.getItem("favouriteBusinesses") || "[]"
	);
	let updatedFavourites;

	if (savedFavourites.includes(businessId)) {
		updatedFavourites = savedFavourites.filter((id) => id !== businessId);
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
// Creates an array of pagination numbers (with ellipsis) depending on current and total pages
const generatePaginationPages = (current, total) => {
	const pages = [];

	// Adds first page if current page is far enough from the start
	if (current > 3) {
		pages.push(1); // Always start with page 1
		if (current > 4) {
			pages.push("..."); // Add ellipsis if there are skipped pages before current
		}
	}

	// Adds a dynamic range of pages around the current one (2 before and 2 after)
	for (
		let i = Math.max(1, current - 2);
		i <= Math.min(total, current + 2);
		i++
	) {
		pages.push(i); // Ensures we don't go below page 1 or above total pages
	}

	// Adds last page if current page is far enough from the end
	if (current < total - 2) {
		if (current < total - 3) {
			pages.push("..."); // Ellipsis if skipped pages after current
		}
		pages.push(total); // Always show the last page number
	}

	return pages;
};

function BusinessCardExplore() {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("Default");
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedBusiness, setSelectedBusiness] = useState(null);
	const [selectedService, setSelectedService] = useState(null);

	const handleBook = (business, service) => {
		setSelectedBusiness(business);
		setSelectedService(service);
		setModalOpen(true);
	};
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	// Extracts service categories for filter dropdown
	const allCategories = [
		"All",
		...new Set(businessDetails.map((b) => b.category)),
	];

	// Filter businesses
	let filteredBusinesses =
		selectedCategory === "All"
			? businessDetails
			: businessDetails.filter((b) => b.category === selectedCategory);

	// Conditionally sorts businesses based on selected sort option
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
			//Shuffles array randomly
			const j = Math.floor(Math.random() * (i + 1));
			[filteredBusinesses[i], filteredBusinesses[j]] = [
				filteredBusinesses[j],
				filteredBusinesses[i],
			];
		}
	}

	const totalPages = Math.ceil(filteredBusinesses.length / ITEMS_PER_PAGE); // Calculates how many total pages are needed based on filtered results
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
				{currentBusinesses.map((business) => {
					const firstService = business.services?.[0];

					return (
						<Link
							to={`/business/${business.id}`}
							style={{ textDecoration: "none", color: "inherit" }}
							key={business.id}
						>
							<div className="business-card">
								<div className="business-img-container">
									<img
										className="business-img"
										src={business.image}
										alt={business.name}
									/>
								</div>

								<div className="business-content">
									<div className="business-header">
										<div className="business-info">
											<h3 className="business-title">{business.name}</h3>
											<div className="business-ratings">
												{business.rating}
												<ImStarFull className="star-icon" />
											</div>
										</div>

										<button
											onClick={() => toggleFavourite(business.id)}
											className={`favorite-btn ${
												isFavourited(business.id) ? "active" : ""
											}`}
										>
											{isFavourited(business.id) ? (
												<IoHeart />
											) : (
												<IoHeartOutline />
											)}
										</button>
									</div>

									<p className="business-address-container">
										{business.address}
									</p>
									<div className="service-section">
										<div className="service-left">
											<h4 className="service-name">
												{firstService?.name}
											</h4>
											<p className="service-duration">
												{firstService?.duration}
											</p>
										</div>

										<div className="service-right">
											<span className="service-price">
												R {firstService?.price}
											</span>
											<button
												className="book-btn"
												onClick={(e) => {
													e.preventDefault();
													handleBook(business, firstService);
												}}
											>
												Book
											</button>
										</div>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>

			{/* Pagination Controls */}
			<div className="pagination-controls">
				<button
					className="nav-button"
					onClick={handlePrev}
					disabled={currentPage === 1}
				>
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
					</svg>
					Previous
				</button>

				{generatePaginationPages(currentPage, totalPages).map(
					(page, index) =>
						page === "..." ? (
							<button
								key={`ellipsis-${index}`}
								className="ellipsis"
								disabled
							>
								...
							</button>
						) : (
							<button
								key={page}
								className={page === currentPage ? "active" : ""}
								onClick={() => setCurrentPage(page)}
							>
								{page}
							</button>
						)
				)}

				<button
					className="nav-button"
					onClick={handleNext}
					disabled={currentPage === totalPages}
				>
					Next
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
					</svg>
				</button>
			</div>
			{isModalOpen && (
				<BookingModal
					business={selectedBusiness}
					service={selectedService}
					onClose={() => setModalOpen(false)}
				/>
			)}
		</div>
	);
}

export default BusinessCardExplore;
