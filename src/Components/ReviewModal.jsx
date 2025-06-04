import { useState } from "react";
import "../Styles/review.css";
import { FiX } from "react-icons/fi";

const ReviewModal = ({ isOpen, onClose, onSubmit, businessName }) => {
	const [rating, setRating] = useState(0);
	const [text, setText] = useState("");

	if (!isOpen) return null;

	const handleSubmit = () => {
		if (rating >= 1 && rating <= 5 && text.trim()) {
			onSubmit(rating, text);
			setRating(0);
			setText("");
			onClose();
		} else {
			alert("Please provide a rating (1-5) and review text.");
		}
	};

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<div className="review-text-header">
					<button className="modal-close" onClick={onClose}>
						<FiX size={20} />
					</button>

					<h3>Submit a Review for {businessName}</h3>
				</div>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Write your review."
					className="review-textArea"
				/>
				<div className="rating-input">
					<label>Rating: </label>
					<input
						type="number"
						value={rating}
						onChange={(e) => setRating(Number(e.target.value))}
						min={1}
						max={5}
					/>
				</div>
				<div className="modal-buttons">
					<button onClick={handleSubmit}>Submit</button>
					<button onClick={onClose}>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewModal;
