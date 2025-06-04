import { useState, useEffect } from "react";
import "../Styles/booking.css";
import { FiX } from "react-icons/fi";

const BookingModal = ({ isOpen, onClose, selectedService, business }) => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [showServicesList, setShowServicesList] = useState(false);
	const [bookedServices, setBookedServices] = useState(
		selectedService ? [selectedService] : []
	);
	const [showCancelDialog, setShowCancelDialog] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);

	useEffect(() => {
		const el = document.querySelector(".date-scroll");
		if (!el) return;

		let isDown = false;
		let startX;
		let scrollLeft;

		const mouseDownHandler = (e) => {
			isDown = true;
			el.classList.add("dragging");
			startX = e.pageX - el.offsetLeft;
			scrollLeft = el.scrollLeft;
		};

		const mouseLeaveHandler = () => {
			isDown = false;
			el.classList.remove("dragging");
		};

		const mouseUpHandler = () => {
			isDown = false;
			el.classList.remove("dragging");
		};

		const mouseMoveHandler = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - el.offsetLeft;
			const walk = (x - startX) * 2;
			el.scrollLeft = scrollLeft - walk;
		};

		el.addEventListener("mousedown", mouseDownHandler);
		el.addEventListener("mouseleave", mouseLeaveHandler);
		el.addEventListener("mouseup", mouseUpHandler);
		el.addEventListener("mousemove", mouseMoveHandler);

		return () => {
			el.removeEventListener("mousedown", mouseDownHandler);
			el.removeEventListener("mouseleave", mouseLeaveHandler);
			el.removeEventListener("mouseup", mouseUpHandler);
			el.removeEventListener("mousemove", mouseMoveHandler);
		};
	}, []);

	if (!isOpen || !selectedService || !business) return null;

	const generateDates = () => {
		const dates = [];
		const today = new Date();
		const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		for (let i = 0; i < 7; i++) {
			const date = new Date(today);
			date.setDate(today.getDate() + i);
			dates.push({
				day: dayNames[date.getDay()],
				date: date.getDate(),
				fullDate: date,
			});
		}
		return dates;
	};

	const dates = generateDates();
	const times = ["15:00", "15:15", "15:30", "15:45", "16:00"];

	const calculateEndTime = (startTime) => {
		if (!startTime) return "";
		const [hours, minutes] = startTime.split(":").map(Number);
		const totalMinutes = hours * 60 + minutes + 45;
		const endHours = Math.floor(totalMinutes / 60);
		const endMins = totalMinutes % 60;
		return `${endHours.toString().padStart(2, "0")}:${endMins
			.toString()
			.padStart(2, "0")}`;
	};

	// Prevent duplicate services
	const addService = (service) => {
		const isAlreadyBooked = bookedServices.some(
			(s) => s.name === service.name
		);
		if (!isAlreadyBooked) {
			setBookedServices([...bookedServices, service]);
		}
		setShowServicesList(false);
	};

	// Remove service
	const removeService = (index) => {
		if (bookedServices.length > 1) {
			setBookedServices(bookedServices.filter((_, i) => i !== index));
		}
	};

	const total = bookedServices.reduce((sum, s) => sum + s.price, 0);

	const canContinue = selectedDate !== null && selectedTime !== null;

	const handleContinue = () => {
		if (canContinue) {
			// Process booking
			console.log("Booking details:", {
				date: selectedDate,
				time: selectedTime,
				services: bookedServices,
				total: total,
			});
			setShowConfirmation(true);
		}
	};

	const handleCloseModal = () => {
		if (showConfirmation) {
			// Reset all states when closing from confirmation
			setShowConfirmation(false);
			setBookedServices(selectedService ? [selectedService] : []);
			setSelectedDate(null);
			setSelectedTime(null);
			onClose();
		} else {
			setShowCancelDialog(true);
		}
	};

	const getSelectedDateObject = () => {
		return dates.find((d) => d.date === selectedDate);
	};

	const formatDate = (dateObj) => {
		if (!dateObj) return "";
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		return `${dateObj.day}, ${dateObj.date} ${
			months[dateObj.fullDate.getMonth()]
		} ${dateObj.fullDate.getFullYear()}`;
	};

	if (showConfirmation) {
		const selectedDateObj = getSelectedDateObject();

		return (
			<div className="booking-modal">
				<div className="booking-container">
					<button className="modal-close" onClick={handleCloseModal}>
						<FiX size={20} />
					</button>

					<div className="confirmation-content">
						<div className="confirmation-header">
							<h3 className="modal-title">Booking Confirmed!</h3>
							<p className="confirmation-subtitle">
								Your appointment has been successfully booked
							</p>
						</div>

						<div className="confirmation-details">
							<div className="detail-section">
								<h4>Date & Time</h4>
								<p>{formatDate(selectedDateObj)}</p>
								<p>
									{selectedTime} - {calculateEndTime(selectedTime)}
								</p>
							</div>

							<div className="detail-section">
								<h4>Services</h4>
								{bookedServices.map((service, idx) => (
									<div key={idx} className="confirmed-service">
										<span className="service-name">{service.name}</span>
										<span className="service-price">
											R{service.price.toFixed(2)}
										</span>
									</div>
								))}
							</div>

							<div className="confirmation-total">
								<div className="total-row">
									<span>Total Amount:</span>
									<strong>R{total.toFixed(2)}</strong>
								</div>
								<div className="total-duration">
									Duration: {bookedServices.length * 45} minutes
								</div>
							</div>
						</div>

						<div className="confirmation-actions">
							<button className="done-btn" onClick={handleCloseModal}>
								Done
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="booking-modal">
			<div className="booking-container">
				<button className="modal-close" onClick={handleCloseModal}>
					<FiX size={20} />
				</button>

				<h3 className="modal-title">June 2025</h3>

				<div className="date-scroll scroll-hidden">
					{dates.map((dateObj, i) => (
						<div
							key={i}
							className={`date-box ${
								selectedDate === dateObj.date ? "selected" : ""
							}`}
							onClick={() => setSelectedDate(dateObj.date)}
						>
							<p className="date-day">{dateObj.day}</p>
							<h4 className="date-number">{dateObj.date}</h4>
						</div>
					))}
				</div>

				<div className="time-options">
					{times.map((time, idx) => (
						<button
							key={idx}
							className={`time-option ${
								selectedTime === time ? "selected" : ""
							}`}
							onClick={() => setSelectedTime(time)}
						>
							{time}
						</button>
					))}
				</div>

				<div className="services-summary">
					{bookedServices.map((service, idx) => (
						<div key={idx} className="booked-service">
							<div className="booked-service-info">
								<h4 className="service-name">{service.name}</h4>
								<p className="service-price">
									R{service.price.toFixed(2)}
								</p>
								<p className="service-time">
									{selectedTime} - {calculateEndTime(selectedTime)}
								</p>
							</div>
							{bookedServices.length > 1 && (
								<button
									className="remove-service"
									onClick={() => removeService(idx)}
								>
									×
								</button>
							)}
						</div>
					))}
				</div>

				<p
					className="add-service"
					onClick={() => setShowServicesList(true)}
				>
					+ Add another service
				</p>

				{showServicesList && (
					<div className="service-list-popup">
						<div className="popup-header">
							<h4>Other Services</h4>
							<button
								className="popup-close"
								onClick={() => setShowServicesList(false)}
							>
								×
							</button>
						</div>
						<div className="services-list">
							{business.services?.map((service, i) => {
								const isAlreadyBooked = bookedServices.some(
									(s) => s.name === service.name
								);
								return (
									<div
										key={i}
										className={`service-option ${
											isAlreadyBooked ? "disabled" : ""
										}`}
										onClick={() => !isAlreadyBooked && addService(service)}
									>
										<p className="service-option-name">
											{service.name} {isAlreadyBooked && "(Added)"}
										</p>
										<span className="service-option-price">
											R{service.price.toFixed(2)}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				)}

				<div className="booking-total">
					<div className="total-info">
						<p className="total-price">
							Total: <strong>R{total.toFixed(2)}</strong>
						</p>
						<p className="total-duration">
							({bookedServices.length * 45} minutes)
						</p>
					</div>

					<button
						className={`continue-btn ${
							canContinue ? "enabled" : "disabled"
						}`}
						onClick={handleContinue}
						disabled={!canContinue}
					>
						Continue
					</button>
				</div>
			</div>
			{showCancelDialog && (
				<div className="cancel-dialog-overlay">
					<div className="cancel-dialog">
						<p>Are you sure you want to cancel this booking?</p>
						<div className="dialog-buttons">
							<button
								className="dialog-yes"
								onClick={() => {
									setShowCancelDialog(false);
									setBookedServices(
										selectedService ? [selectedService] : []
									);
									setSelectedDate(null);
									setSelectedTime(null);
									onClose();
								}}
							>
								Yes, Cancel
							</button>
							<button
								className="dialog-no"
								onClick={() => setShowCancelDialog(false)}
							>
								Continue Booking
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingModal;
