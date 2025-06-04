import React, { createContext, useState, useContext } from "react";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
	const [userReviews, setUserReviews] = useState([]);

	const addReview = (businessId, rating, text) => {
		const newReview = {
			businessId,
			date: new Date().toLocaleDateString("en-GB", {
				day: "numeric",
				month: "long",
				year: "numeric",
			}),
			rating,
			text,
		};
		setUserReviews((prev) => [...prev, newReview]);
	};

	return (
		<ReviewContext.Provider value={{ userReviews, addReview }}>
			{children}
		</ReviewContext.Provider>
	);
};

export const useReviewContext = () => useContext(ReviewContext);
