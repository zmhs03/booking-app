import React, { useState } from "react";
import "../Styles/about.css";

const FAQ = () => {
	const [openItems, setOpenItems] = useState({});

	const faqData = [
		{
			id: 1,
			question: "How does ALL SET work?",
			answer:
				"ALL SET connects you with top-rated local service providers. Simply browse our curated listings, read reviews, and book appointments directly through our platform without the hassle of phone calls or waiting.",
		},
		{
			id: 2,
			question: "Is it free to use ALL SET?",
			answer:
				"Yes, ALL SET is completely free for customers. You can browse, book, and review services without any charges. Service providers pay a small fee to be listed on our platform.",
		},
		{
			id: 3,
			question: "How are service providers vetted?",
			answer:
				"We carefully curate our service providers based on their credentials, customer reviews, reliability, and quality of service. Only top-performing businesses that meet our standards are featured on ALL SET.",
		},
		{
			id: 4,
			question: "Can I cancel or reschedule my booking?",
			answer:
				"Yes, you can cancel or reschedule your booking through your ALL SET account. Cancellation policies may vary by service provider, so please check the specific terms when booking.",
		},
		{
			id: 5,
			question: "What types of services are available?",
			answer:
				"ALL SET offers a wide range of services including personal training, car washing, haircuts, cleaning services, and many more local services. We're constantly adding new categories based on user demand.",
		},
		{
			id: 6,
			question: "How do I leave a review?",
			answer:
				"After your service appointment, you'll receive a notification to leave a review. You can rate your experience and provide feedback to help other users and support local businesses.",
		},
	];

	const toggleItem = (id) => {
		setOpenItems((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	return (
		<div className="faq-container">
			<div className="faq-header">
				<h2 className="faq-title">Frequently Asked Questions</h2>
				<p className="faq-subtitle">
					You can find answers to most our various construction work and
					related network on our FAQ section. Please feel free to contact
					us if you don't get your questions answer in below.
				</p>
			</div>

			<div className="faq-list">
				{faqData.map((item) => (
					<div
						key={item.id}
						className={`faq-item ${openItems[item.id] ? "open" : ""}`}
					>
						<button
							className="faq-question"
							onClick={() => toggleItem(item.id)}
							aria-expanded={openItems[item.id]}
						>
							<span className="question-number">{item.id}.</span>
							<span className="question-text">{item.question}</span>
							<span className="faq-icon">
								{openItems[item.id] ? "−" : "+"}
							</span>
						</button>

						{openItems[item.id] && (
							<div className="faq-answer">
								<p>{item.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
