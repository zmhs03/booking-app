import { useState } from "react";
import { useParams } from "react-router";
import { businessDetails } from "../Data/business";
import { useBooking } from "../Context/BookingContext";
import Map from "../Components/Map";
import Hours from "../Components/Hours";
import AboutBusiness from "../Components/AboutBusiness";
import Staff from "../Components/Staff";
import Reviews from "../Components/Reviews";
import ServiceCard from "../Components/ServiceCard";
import Phone from "../Components/Phone";
import BookingModal from "../Components/BookingModal";
import "../Styles/businessProfile.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

function BusinessProfile() {
	const { id } = useParams();
	const { addBooking } = useBooking();

	const business = businessDetails.find(
		(item) => item.id === parseInt(id)
	);

	const [searchQuery, setSearchQuery] = useState("");

	// Booking modal states
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
	const [selectedService, setSelectedService] = useState(null);
	const [bookingStatus, setBookingStatus] = useState(null);

	if (!business) return <p>Business not found.</p>;

	const filteredServices = business.services.filter((service) =>
		service.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleServiceBook = (service) => {
		setSelectedService(service);
		setIsBookingModalOpen(true);
	};

	const handleBookingConfirm = (bookingDetails) => {
		try {
			const completeBookingDetails = {
				...bookingDetails,
				businessId: business.id,
				businessName: business.name,
				businessAddress: business.address,
				customerName: "John Doe",
				customerEmail: "john@example.com",
				customerPhone: "+27123456789",
			};

			const savedBooking = addBooking(completeBookingDetails);
			console.log("Booking saved successfully:", savedBooking);

			setBookingStatus({
				type: "success",
				message: "Booking confirmed successfully!",
			});
			setTimeout(() => setBookingStatus(null), 3000);
		} catch (error) {
			console.error("Booking failed:", error);
			setBookingStatus({
				type: "error",
				message: "Booking failed. Please try again.",
			});
			setTimeout(() => setBookingStatus(null), 3000);
		}
	};

	const closeBookingModal = () => {
		setIsBookingModalOpen(false);
		setSelectedService(null);
	};

	return (
		<div className="business-profile-container">
			{bookingStatus && (
				<div className={`notification ${bookingStatus.type}`}>
					{bookingStatus.message}
				</div>
			)}

			<div className="columns">
				<div className="left-container">
					<button
						className="back-btn"
						onClick={() => window.history.back()}
					>
						<IoMdArrowRoundBack />
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
					<div className="services-container">
						<div className="service-search">
							<div className="services-header">
								<h3>Services</h3>
								<div className="search-wrap">
									<FiSearch className="search-icon" />
									<input
										type="text"
										placeholder="Search for a service..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="search-in"
									/>
								</div>
							</div>

							<ServiceCard
								services={filteredServices}
								onBook={handleServiceBook}
							/>
						</div>
					</div>

					<Reviews reviews={business.reviews} />
				</div>
			</div>

			<BookingModal
				isOpen={isBookingModalOpen}
				onClose={closeBookingModal}
				onBook={handleBookingConfirm}
				selectedService={selectedService}
				business={business}
			/>
		</div>
	);
}

export default BusinessProfile;
