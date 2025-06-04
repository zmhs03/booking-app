import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [bookings, setBookings] = useState([]);

	const addBooking = (bookingDetails) => {
		const newBooking = {
			id: Date.now(),
			...bookingDetails,
			status: "confirmed",
			createdAt: new Date().toISOString(),
		};

		setBookings((prev) => [...prev, newBooking]);
		return newBooking;
	};

	const getBookingsByBusiness = (businessId) => {
		return bookings.filter((booking) => booking.businessId === businessId);
	};

	const getAllBookings = () => bookings;

	const cancelBooking = (bookingId) => {
		setBookings((prev) =>
			prev.map((booking) =>
				booking.id === bookingId
					? { ...booking, status: "cancelled" }
					: booking
			)
		);
	};

	return (
		<BookingContext.Provider
			value={{
				bookings,
				addBooking,
				getBookingsByBusiness,
				getAllBookings,
				cancelBooking,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export const useBooking = () => {
	const context = useContext(BookingContext);
	if (!context) {
		throw new Error("useBooking must be used within a BookingProvider");
	}
	return context;
};
