import "../Styles/businessProfile.css";
import { businessDetails } from "../Data/business";
import { useState } from "react";
import { useReviewContext } from "../Context/ReviewContext";
import ReviewModal from "../Components/ReviewModal";

function Reviews({ currentBusiness }) {
	const [showAllReviews, setShowAllReviews] = useState(false);
	const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
	const { addReview } = useReviewContext();

	const business = currentBusiness || businessDetails[0];

	// Extract and transform reviews data to match component expectations
	const transformedReviewsData = business?.reviews
		? {
				averageRating: parseFloat(business.rating) || 0,
				totalReviews: business.reviews.length,
				ratingBreakdown: calculateRatingBreakdown(business.reviews),
				reviews: business.reviews.map((review, index) => ({
					id: index + 1,
					name: review.name,
					rating: review.reviewRating,
					text: review.review,
					date: "Recently",
					image: review.image,
				})),
		  }
		: {
				averageRating: 0,
				totalReviews: 0,
				ratingBreakdown: [],
				reviews: [],
		  };
	const handleReviewSubmit = (rating, text) => {
		addReview(business.id, rating, text);
		alert("Review submitted!");
	};
	// Helper function to calculate rating breakdown
	function calculateRatingBreakdown(reviews) {
		const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

		reviews.forEach((review) => {
			const rating = review.reviewRating;
			if (rating >= 1 && rating <= 5) {
				breakdown[rating]++;
			}
		});

		return Object.entries(breakdown)
			.map(([stars, count]) => ({ stars: parseInt(stars), count }))
			.filter((item) => item.count > 0)
			.sort((a, b) => b.stars - a.stars);
	}

	// Helper function to render stars with half-star support
	const renderStars = (rating) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 >= 0.5;

		for (let i = 0; i < 5; i++) {
			if (i < fullStars) {
				stars.push(
					<span key={i} className="star filled">
						★
					</span>
				);
			} else if (i === fullStars && hasHalfStar) {
				stars.push(
					<span key={i} className="star half-filled">
						☆
					</span>
				);
			} else {
				stars.push(
					<span key={i} className="star empty">
						☆
					</span>
				);
			}
		}
		return stars;
	};

	// Helper function to calculate bar width percentage
	const getBarWidth = (count) => {
		if (transformedReviewsData.ratingBreakdown.length === 0) return 0;
		const maxCount = Math.max(
			...transformedReviewsData.ratingBreakdown.map((r) => r.count)
		);
		return maxCount > 0 ? (count / maxCount) * 100 : 0;
	};

	const handleToggleReviews = () => {
		setShowAllReviews(!showAllReviews);
	};

	const displayedReviews = showAllReviews
		? transformedReviewsData.reviews
		: transformedReviewsData.reviews.slice(0, 4);

	if (
		!transformedReviewsData.reviews ||
		transformedReviewsData.reviews.length === 0
	) {
		return (
			<div className="reviews-section">
				<h2>Reviews</h2>
				<div className="no-reviews">
					<p>No reviews yet. Be the first to leave a review!</p>
				</div>
			</div>
		);
	}

	return (
		<div className="reviews-section">
			<h2>Reviews</h2>

			<div className="rating-summary">
				<div className="overall-rating">
					<span className="rating-number">
						{transformedReviewsData.averageRating.toFixed(1)}
					</span>
					<div className="stars-container">
						{renderStars(transformedReviewsData.averageRating)}
					</div>
					<span className="total-reviews">
						{transformedReviewsData.totalReviews}{" "}
						{transformedReviewsData.totalReviews === 1
							? "Review"
							: "Reviews"}
					</span>
				</div>

				{/* Rating Breakdown Bars */}
				{transformedReviewsData.ratingBreakdown.length > 0 && (
					<div className="rating-breakdown">
						{transformedReviewsData.ratingBreakdown.map((item) => (
							<div key={item.stars} className="rating-bar-row">
								<span className="star-number">{item.stars}</span>
								<div className="rating-bar">
									<div
										className="rating-bar-fill"
										style={{ width: `${getBarWidth(item.count)}%` }}
										title={`${item.count} reviews`}
									></div>
								</div>
								<span className="rating-count">{item.count}</span>
							</div>
						))}
					</div>
				)}
				<div className="right">
					<p
						className="leave-review-text"
						onClick={() => setIsReviewModalOpen(true)}
					>
						<span className="clickable">Leave a review.</span>
					</p>
				</div>
			</div>

			{/* Individual Reviews */}
			<div className="reviews-grid">
				{displayedReviews.map((review) => (
					<div key={review.id} className="review-card">
						<div className="review-header">
							<div className="avatar">
								<img src={review.image} />
							</div>
							<div className="reviewer-info">
								<h4 className="reviewer-name">
									{review.name || "Anonymous"}
								</h4>
								<div className="review-rating">
									{renderStars(review.rating)}
								</div>
								<span className="review-date">{review.date}</span>
							</div>
						</div>
						<p className="review-text">{review.text}</p>
					</div>
				))}
			</div>

			{transformedReviewsData.reviews.length > 4 && (
				<div className="show-all-reviews">
					<button
						className="show-all-btn"
						onClick={handleToggleReviews}
						aria-label={
							showAllReviews ? "Show fewer reviews" : "Show all reviews"
						}
					>
						{showAllReviews
							? `Show less reviews`
							: `Show all ${transformedReviewsData.totalReviews} reviews`}
					</button>
				</div>
			)}
			<ReviewModal
				isOpen={isReviewModalOpen}
				onClose={() => setIsReviewModalOpen(false)}
				onSubmit={handleReviewSubmit}
				businessName={business.name}
			/>
		</div>
	);
}

export default Reviews;
