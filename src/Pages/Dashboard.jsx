import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { PiCalendarCheckLight } from "react-icons/pi";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { ImStarEmpty } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import "../Styles/dashboard.css";
import { businessDetails } from "../Data/business";
import { useNavigate } from "react-router";
import { useBooking } from "../Context/BookingContext";
import { useReviewContext } from "../Context/ReviewContext";

function Dashboard() {
	const [activeSection, setActiveSection] = useState("Account");
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		phone: "",
		password: "",
		birthday: "",
	});
	const [contactFormData, setContactFormData] = useState({
		name: "",
		email: "",
		message: "",
		newsletter: false,
	});
	const [favourites, setFavourites] = useState([]);
	const { bookings, getAllBookings } = useBooking();
	const [currentYear, setCurrentYear] = useState(2025);
	const [currentMonth, setCurrentMonth] = useState(5);
	const navigate = useNavigate();
	const { userReviews } = useReviewContext();

	const handleContactInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setContactFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};
	const handleContactSubmit = (e) => {
		e.preventDefault();
		console.log("Contact form submitted:", contactFormData);
		// Handle form submission here
		alert("Thank you for your message! We'll get back to you soon.");
		setContactFormData({
			name: "",
			email: "",
			message: "",
			newsletter: false,
		});
	};
	useEffect(() => {
		if (activeSection === "Favourites") {
			loadFavourites();
		}
	}, [activeSection]);

	const loadFavourites = () => {
		const savedFavourites = JSON.parse(
			localStorage.getItem("favouriteBusinesses") || "[]"
		);
		const favouriteBusinesses = businessDetails.filter((business) =>
			savedFavourites.includes(business.id)
		);
		setFavourites(favouriteBusinesses);
	};

	const handleRemoveFromFavourites = (businessId, e) => {
		e.stopPropagation();
		const savedFavourites = JSON.parse(
			localStorage.getItem("favouriteBusinesses") || "[]"
		);
		const updatedFavourites = savedFavourites.filter(
			(id) => id !== businessId
		);
		localStorage.setItem(
			"favouriteBusinesses",
			JSON.stringify(updatedFavourites)
		);

		setFavourites((prev) =>
			prev.filter((business) => business.id !== businessId)
		);
	};

	const handleCardClick = (businessId) => {
		navigate(`/business/${businessId}`);
	};

	const generateCalendarDays = () => {
		const days = [];

		const firstDay = new Date(currentYear, currentMonth, 1).getDay();
		const daysInMonth = new Date(
			currentYear,
			currentMonth + 1,
			0
		).getDate();

		const allBookings = getAllBookings();

		for (let i = 0; i < firstDay; i++) {
			days.push({ day: null, isEmpty: true });
		}

		for (let day = 1; day <= daysInMonth; day++) {
			const dateString = `${currentYear}-${(currentMonth + 1)
				.toString()
				.padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

			const dayBookings = allBookings.filter(
				(booking) =>
					booking.date === dateString && booking.status === "confirmed"
			);

			days.push({
				day,
				dateString,
				isEmpty: false,
				appointments: dayBookings,
			});
		}

		return days;
	};

	const calendarDays = generateCalendarDays();
	const goToPreviousMonth = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11);
			setCurrentYear((prev) => prev - 1);
		} else {
			setCurrentMonth((prev) => prev - 1);
		}
	};

	const goToNextMonth = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0);
			setCurrentYear((prev) => prev + 1);
		} else {
			setCurrentMonth((prev) => prev + 1);
		}
	};

	const menuItems = [
		{ icon: IoSettingsOutline, label: "Account", id: "account" },
		{
			icon: PiCalendarCheckLight,
			label: "Appointments",
			id: "appointments",
		},
		{ icon: IoHeartOutline, label: "Favourites", id: "favourites" },
		{ icon: BsTelephone, label: "Contact Us", id: "contact" },
		{ icon: ImStarEmpty, label: "Reviews", id: "reviews" },
		{
			icon: IoDocumentTextOutline,
			label: "Terms of Service",
			id: "terms",
		},
		{ icon: CiLock, label: "Privacy Policy", id: "privacy" },
	];

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		console.log("Form submitted:", formData);
	};

	const handleReset = () => {
		setFormData({
			name: "",
			surname: "",
			email: "",
			phone: "",
			password: "",
			birthday: "",
		});
	};

	return (
		<div className="dashboard">
			<div className="dashboard-content">
				{/* Sidebar */}
				<aside className="sidebar">
					<div className="sidebar-header">
						<div className="user-info">
							<div className="user-avatar-large">
								<CgProfile size={32} />
							</div>
							<h2>Welcome!</h2>
						</div>
					</div>

					<nav className="sidebar-nav">
						{menuItems.map((item) => {
							const IconComponent = item.icon;
							return (
								<button
									key={item.id}
									className={`nav-item ${
										activeSection === item.label ? "active" : ""
									}`}
									onClick={() => setActiveSection(item.label)}
								>
									<IconComponent size={20} />
									<span>{item.label}</span>
								</button>
							);
						})}
					</nav>
				</aside>

				<main className="main-content">
					{activeSection === "Account" && (
						<div className="account-section">
							<div className="profile-form">
								<div className="form-row">
									<div className="form-group">
										<label>Name</label>
										<input
											type="text"
											name="name"
											placeholder="Please enter your name"
											value={formData.name}
											onChange={handleInputChange}
										/>
									</div>
									<div className="form-group">
										<label>Surname</label>
										<input
											type="text"
											name="surname"
											placeholder="Please enter your surname"
											value={formData.surname}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											name="email"
											placeholder="Email address"
											value={formData.email}
											onChange={handleInputChange}
										/>
									</div>
									<div className="form-group">
										<label>Phone Number</label>
										<input
											type="tel"
											name="phone"
											placeholder="Phone number"
											value={formData.phone}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group">
										<label>Password</label>
										<input
											type="password"
											name="password"
											placeholder="Change Password"
											value={formData.password}
											onChange={handleInputChange}
										/>
									</div>
									<div className="form-group">
										<label>Birthday</label>
										<input
											type="date"
											name="birthday"
											placeholder="dd/mm/yyyy"
											value={formData.birthday}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								<div className="form-actions">
									<button
										type="button"
										className="btn-primary"
										onClick={handleSubmit}
									>
										Apply Changes
									</button>
									<button
										type="button"
										className="btn-secondary"
										onClick={handleReset}
									>
										Reset
									</button>
								</div>
							</div>
						</div>
					)}

					{activeSection === "Appointments" && (
						<div className="appointments-section">
							<div className="calendar-container">
								<div className="calendar-header">
									<h2>
										{new Date(currentYear, currentMonth).toLocaleString(
											"default",
											{
												month: "long",
												year: "numeric",
											}
										)}
									</h2>
								</div>
								<div className="calendar">
									<div className="calendar-weekdays">
										<div className="weekday">S</div>
										<div className="weekday">M</div>
										<div className="weekday">T</div>
										<div className="weekday">W</div>
										<div className="weekday">T</div>
										<div className="weekday">F</div>
										<div className="weekday">S</div>
									</div>
									<div className="calendar-days">
										{calendarDays.map((dayData, index) => (
											<div
												key={index}
												className={`day-cal  ${
													dayData.isEmpty ? "empty" : ""
												} ${
													dayData.appointments?.length > 0
														? "has-appointment"
														: ""
												}`}
											>
												{!dayData.isEmpty && (
													<>
														<span className="day-number">
															{dayData.day}
														</span>
														{dayData.appointments?.map(
															(appointment, aptIndex) => (
																<div
																	key={aptIndex}
																	className="appointment-indicator"
																>
																	<span className="appointment-time">
																		{appointment.time}
																	</span>
																	<span className="appointment-service">
																		{appointment.service}
																	</span>
																</div>
															)
														)}
													</>
												)}
											</div>
										))}
									</div>
								</div>

								{/* Appointments List */}
								<div className="appointments-list">
									<h3>Your Appointments</h3>
									{bookings.length === 0 ? (
										<p>No appointments scheduled.</p>
									) : (
										<div className="appointments-grid">
											{bookings.map((appointment) => (
												<div
													key={appointment.id}
													className="appointment-card"
												>
													<div className="appointment-date">
														{new Date(appointment.date).toLocaleDateString(
															"en-US",
															{
																weekday: "short",
																month: "short",
																day: "numeric",
															}
														)}
													</div>
													<div className="appointment-details">
														<div className="appointment-time-large">
															{appointment.time}
														</div>
														<div className="appointment-service-name">
															{appointment.service}
														</div>
														<div className="appointment-business">
															{appointment.business}
														</div>
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
					)}
					{activeSection === "Favourites" && (
						<div className="favourites-section">
							<div className="favourites-header">
								<h2>Favourites</h2>
								<p className="favourites-subtitle">
									{favourites.length === 0
										? "You haven't added any businesses to your favourites yet."
										: `You have ${favourites.length} favourite ${
												favourites.length === 1 ? "business" : "businesses"
										  }.`}
								</p>
							</div>

							{favourites.length === 0 ? (
								<div className="empty-favourites">
									{/* <div className="empty-icon">
										<IoHeartOutline size={48} />
									</div>
									<h3>No Favourites Yet</h3>
									<p>
										Start exploring businesses and add them to your
										favourites by clicking the heart icon.
									</p> */}
								</div>
							) : (
								<div className="favourites-grid">
									{favourites.map((business) => (
										<div
											key={business.id}
											className="favourite-card"
											onClick={() => handleCardClick(business.id)}
										>
											<div className="card-image">
												{business.image ? (
													<img
														src={business.image}
														alt={business.name}
														onError={(e) => {
															e.target.style.display = "none";
															e.target.nextSibling.style.display = "flex";
														}}
													/>
												) : null}
												<div className="image-placeholder">
													<span>{business.name.charAt(0)}</span>
												</div>
												<button
													className="favourite-btn active"
													onClick={(e) =>
														handleRemoveFromFavourites(business.id, e)
													}
													title="Remove from favourites"
												>
													<IoHeart size={20} />
												</button>
											</div>

											<div className="card-content">
												<h3 className="business-name">{business.name}</h3>
												<p className="business-address">
													{business.address ||
														`${
															business.location || "Location not specified"
														}`}
												</p>

												{business.rating && (
													<div className="business-rating">
														<div className="stars">
															{[...Array(5)].map((_, i) => (
																<span
																	key={i}
																	className={`star ${
																		i < Math.floor(business.rating)
																			? "filled"
																			: ""
																	}`}
																>
																	★
																</span>
															))}
														</div>
														<span className="rating-text">
															{business.rating} (
															{business.reviewCount || 0} reviews)
														</span>
													</div>
												)}
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					)}

					{activeSection === "Reviews" && (
						<div className="reviewsSection">
							{userReviews.length === 0 ? (
								<p>You haven’t given any reviews yet.</p>
							) : (
								userReviews.map((review, index) => (
									<div key={index} className="reviewCard">
										<div className="reviewHeader">
											<div className="stars">
												{"★".repeat(review.rating)}
												{"☆".repeat(5 - review.rating)}
											</div>
											<div className="reviewDate">{review.date}</div>
										</div>
										<p className="reviewText">{review.text}</p>
									</div>
								))
							)}
						</div>
					)}
					{activeSection === "Terms of Service" && (
						<div className="terms-of-service-content">
							<h2>Terms of Service</h2>
							<p>Last updated: June 04, 2025</p>
							<h3>1. Terms</h3>
							<p>
								By accessing the AllSet website or application (referred to
								as the "Platform"), accessible at [your domain here], you
								agree to be bound by these Terms of Service and all
								applicable laws and regulations. If you do not agree with
								any part of these terms, you are prohibited from using or
								accessing the Platform. The materials on this Platform are
								protected by applicable copyright and trademark laws.
							</p>

							<h3>2. Use License</h3>
							<p>
								Permission is granted to temporarily download one copy of
								the materials on AllSet’s Platform for personal,
								non-commercial, and transitory viewing only. This is a
								grant of license — not a transfer of title — and under this
								license, you may not:
							</p>
							<ul>
								<li>Modify or copy the materials;</li>
								<li>
									Use the materials for any commercial purpose or public
									display;
								</li>
								<li>
									Attempt to reverse engineer any software on AllSet’s
									Platform;
								</li>
								<li>Remove any copyright or proprietary notices;</li>
								<li>
									Transfer the materials to another person or “mirror” them
									on any other server.
								</li>
							</ul>
							<p>
								AllSet reserves the right to terminate your access at any
								time for violations of any of these restrictions. Upon
								termination, you must destroy any downloaded materials in
								your possession, whether in digital or printed format.
							</p>

							<h>3. Disclaimer</h>
							<p>
								All materials on the AllSet Platform are provided “as is.”
								AllSet makes no warranties — express or implied — and
								hereby disclaims and negates all other warranties,
								including without limitation implied warranties or
								conditions of merchantability, fitness for a particular
								purpose, or non-infringement. Further, AllSet does not
								warrant or make any representations regarding the accuracy,
								likely results, or reliability of the use of materials on
								its Platform or any linked sites.
							</p>

							<h3>4. Limitations</h3>
							<p>
								In no event shall AllSet or its suppliers be liable for any
								damages (including, without limitation, damages for loss of
								data or profit, or due to business interruption) arising
								from the use or inability to use the materials on the
								Platform, even if AllSet or an authorized representative
								has been notified of the possibility of such damages. Some
								jurisdictions do not allow limitations on implied
								warranties or liability for incidental damages, so these
								limitations may not apply to you.
							</p>

							<h3>5. Revisions and Errata</h3>
							<p>
								The materials appearing on AllSet’s Platform may include
								technical, typographical, or photographic errors. AllSet
								does not guarantee that any of the materials are accurate,
								complete, or current. AllSet may make changes to the
								materials on the Platform at any time without notice but
								does not commit to updating them.
							</p>

							<h3>6. Links</h3>
							<p>
								AllSet has not reviewed all external websites linked to or
								from the Platform and is not responsible for the contents
								of any such linked site. The inclusion of a link does not
								imply endorsement by AllSet. Use of any linked website is
								at the user's own risk.
							</p>

							<h3>7. Modifications to Terms</h3>
							<p>
								AllSet may revise these Terms of Service at any time
								without notice. By using the Platform, you agree to be
								bound by the most current version of these terms.
							</p>

							<h3>8. Governing Law</h3>
							<p>
								These terms shall be governed and interpreted in accordance
								with the laws of the Republic of South Africa, without
								regard to its conflict of law principles. Any disputes
								arising out of or relating to these terms shall be subject
								to the exclusive jurisdiction of South African courts.
							</p>
						</div>
					)}

					{activeSection === "Privacy Policy" && (
						<div className="privacy-policy-content">
							<h2>Privacy Policy</h2>
							<p>Last updated: June 04, 2025</p>
							<p>
								This Privacy Policy describes our policies and procedures
								on the collection, use and disclosure of your information
								when you use the Service and tells you about your privacy
								rights and how the law protects you.
							</p>
							<p>
								We use your data to provide and improve the Service. By
								using the Service, you agree to the collection and use of
								information in accordance with this Privacy Policy.{" "}
							</p>
							<h3>Interpretation and Definitions</h3>
							<h4>Interpretation</h4>
							<p>
								The words of which the initial letter is capitalised have
								meanings defined under the following conditions. The
								following definitions shall have the same meaning
								regardless of whether they appear in the singular or
								plural.
							</p>
							<h4>Definitions</h4>
							<p>For this Privacy Policy:</p>
							<ul>
								<li>
									<p>
										<strong>Account</strong> means a unique account created
										for you to access our Service or parts of our Service.
									</p>
								</li>
								<li>
									<p>
										<strong>Affiliate</strong> means an entity that
										controls, is controlled by or is under common control
										with a party, where "control" means ownership of 50% or
										more of the shares, equity interest or other securities
										entitled to vote for election of directors or other
										managing authority.
									</p>
								</li>
								<li>
									<p>
										<strong>Company</strong> (referred to as either "the
										Company", "We", "Us" or "Our" in this Agreement) refers
										to All Set.
									</p>
								</li>
								<li>
									<p>
										<strong>Cookies</strong> are small files that are
										placed on your computer, mobile device or any other
										device by a website, containing the details of your
										browsing history on that website among its many uses.
									</p>
								</li>
								<li>
									<p>
										<strong>Country</strong> refers to: South Africa
									</p>
								</li>
								<li>
									<p>
										<strong>Device</strong> means any device that can
										access the Service, such as a computer, a cellphone or
										a digital tablet.
									</p>
								</li>
								<li>
									<p>
										<strong>Personal Data</strong> is any information that
										relates to an identified or identifiable individual.
									</p>
								</li>
								<li>
									<p>
										<strong>Service</strong> refers to the Website.
									</p>
								</li>
								<li>
									<p>
										<strong>Service Provider</strong> means any natural or
										legal person who processes the data on behalf of the
										Company. It refers to third-party companies or
										individuals employed by the Company to facilitate the
										Service, to provide the Service on behalf of the
										Company, to perform services related to the Service or
										to assist the Company in analysing how the Service is
										used.
									</p>
								</li>
								<li>
									<p>
										<strong>Usage Data</strong> refers to data collected
										automatically, either generated by the use of the
										Service or from the Service infrastructure itself (for
										example, the duration of a page visit).
									</p>
								</li>
								<li>
									<p>
										<strong>Website</strong> refers to All Set, accessible
										from{" "}
										<a
											href="https://zmhs03.github.io/booking-app"
											rel="external nofollow noopener"
											target="_blank"
										>
											https://zmhs03.github.io/booking-app
										</a>
									</p>
								</li>
								<li>
									<p>
										<strong>You</strong> means the individual accessing or
										using the Service, or the company, or other legal
										entity on behalf of which such individual is accessing
										or using the Service, as applicable.
									</p>
								</li>
							</ul>
							<h3>Collecting and Using Your Personal Data</h3>
							<h4>Types of Data Collected</h4>
							<h5>Personal Data</h5>
							<p>
								While using Our Service, we may ask you to provide us with
								certain personally identifiable information that can be
								used to contact or identify you. Personally identifiable
								information may include, but is not limited to:
							</p>
							<ul>
								<li>
									<p>Email address</p>
								</li>
								<li>
									<p>First name and last name</p>
								</li>
								<li>
									<p>Phone number</p>
								</li>
								<li>
									<p>Address, State, Province, ZIP/Postal code, City</p>
								</li>
								<li>
									<p>Usage Data</p>
								</li>
							</ul>
							<h4>Usage Data</h4>
							<p>
								Usage Data is collected automatically when using the
								Service.
							</p>
							<p>
								Usage Data may include information such as Your Device's
								Internet Protocol address (e.g. IP address), browser type,
								browser version, the pages of our Service that You visit,
								the time and date of Your visit, the time spent on those
								pages, unique device identifiers and other diagnostic data.
							</p>
							<p>
								When You access the Service by or through a mobile device,
								We may collect certain information automatically,
								including, but not limited to, the type of mobile device
								You use, Your mobile device unique ID, the IP address of
								Your mobile device, Your mobile operating system, the type
								of mobile Internet browser You use, unique device
								identifiers and other diagnostic data.
							</p>
							<p>
								We may also collect information that your browser sends
								whenever you visit our Service or when you access the
								Service by or through a mobile device.
							</p>
							<h4>Tracking Technologies and Cookies</h4>
							<p>
								We use Cookies and similar tracking technologies to track
								the activity on Our Service and store certain information.
								Tracking technologies used are beacons, tags, and scripts
								to collect and track information and to improve and analyse
								Our Service. The technologies we use may include:
							</p>
							<ul>
								<li>
									<strong>Cookies or Browser Cookies.</strong> A cookie is
									a small file placed on Your Device. You can instruct your
									browser to refuse all Cookies or to indicate when a
									Cookie is being sent. However, if you do not accept
									Cookies, you may not be able to use some parts of our
									Service. Unless you have adjusted your browser settings
									so that it will refuse Cookies, our Service may use
									Cookies.
								</li>
								<li>
									<strong>Web Beacons.</strong> Certain sections of our
									Service and our emails may contain small electronic files
									known as web beacons (also referred to as clear gifs,
									pixel tags, and single-pixel gifs) that permit the
									Company, for example, to count users who have visited
									those pages or opened an email and for other related
									website statistics (for example, recording the popularity
									of a certain section and verifying system and server
									integrity).
								</li>
							</ul>
							<p>
								Cookies can be "Persistent" or "Session" Cookies.
								Persistent Cookies remain on your personal computer or
								mobile device when you go offline, while Session Cookies
								are deleted as soon as you close your web browser.
							</p>

							<p>
								We use both Session and Persistent Cookies for the purposes
								set out below:
							</p>
							<ul>
								<li>
									<p>
										<strong>Necessary / Essential Cookies</strong>
									</p>
									<p>Type: Session Cookies</p>
									<p>Administered by: Us</p>
									<p>
										Purpose: These Cookies are essential to provide you
										with services available through the Website and to
										enable you to use some of its features. They help to
										authenticate users and prevent fraudulent use of user
										accounts. Without these Cookies, the services you have
										requested cannot be provided, and we only use these
										Cookies to provide you with those services.
									</p>
								</li>
								<li>
									<p>
										<strong>
											Cookies Policy / Notice Acceptance Cookies
										</strong>
									</p>
									<p>Type: Persistent Cookies</p>
									<p>Administered by: Us</p>
									<p>
										Purpose: These Cookies identify if users have accepted
										the use of cookies on the Website.
									</p>
								</li>
								<li>
									<p>
										<strong>Functionality Cookies</strong>
									</p>
									<p>Type: Persistent Cookies</p>
									<p>Administered by: Us</p>
									<p>
										Purpose: These Cookies allow us to remember choices you
										make when you use the Website, such as remembering your
										login details or language preference. The purpose of
										these Cookies is to provide you with a more personal
										experience and to avoid you having to re-enter your
										preferences every time you use the Website.
									</p>
								</li>
							</ul>
							<p>
								For more information about the cookies we use and your
								choices regarding cookies, please visit our Cookies Policy
								or the Cookies section of our Privacy Policy.
							</p>
							<h3>Use of Your Personal Data</h3>
							<p>
								The Company may use Personal Data for the following
								purposes:
							</p>
							<ul>
								<li>
									<p>
										<strong>To provide and maintain our Service</strong>,
										including to monitor the usage of our Service.
									</p>
								</li>
								<li>
									<p>
										<strong>To manage Your Account:</strong> to manage your
										registration as a user of the Service. The Personal
										Data You provide can give You access to different
										functionalities of the Service that are available to
										You as a registered user.
									</p>
								</li>
								<li>
									<p>
										<strong>For the performance of a contract:</strong> the
										development, compliance and undertaking of the purchase
										contract for the products, items or services you have
										purchased or of any other contract with Us through the
										Service.
									</p>
								</li>
								<li>
									<p>
										<strong>To contact You:</strong> To contact You by
										email, telephone calls, SMS, or other equivalent forms
										of electronic communication, such as a mobile
										application's push notifications regarding updates or
										informative communications related to the
										functionalities, products or contracted services,
										including the security updates, when necessary or
										reasonable for their implementation.
									</p>
								</li>
								<li>
									<p>
										<strong>To provide You</strong> with news, special
										offers and general information about other goods,
										services and events which we offer that are similar to
										those that you have already purchased or enquired
										about, unless you have opted not to receive such
										information.
									</p>
								</li>
								<li>
									<p>
										<strong>To manage Your requests:</strong> To attend and
										manage Your requests to Us.
									</p>
								</li>
								<li>
									<p>
										<strong>For business transfers:</strong> We may use
										Your information to evaluate or conduct a merger,
										divestiture, restructuring, reorganization,
										dissolution, or other sale or transfer of some or all
										of Our assets, whether as a going concern or as part of
										bankruptcy, liquidation, or similar proceeding, in
										which Personal Data held by Us about our Service users
										is among the assets transferred.
									</p>
								</li>
								<li>
									<p>
										<strong>For other purposes</strong>: We may use Your
										information for other purposes, such as data analysis,
										identifying usage trends, determining the effectiveness
										of our promotional campaigns and to evaluate and
										improve our Service, products, services, marketing and
										your experience.
									</p>
								</li>
							</ul>
							<p>
								We may share your personal information in the following
								situations:
							</p>
							<ul>
								<li>
									<strong>With Service Providers:</strong> We may share
									your personal information with Service Providers to
									monitor and analyse the use of our Service, to contact
									you.
								</li>
								<li>
									<strong>For business transfers:</strong> We may share or
									transfer your personal information in connection with, or
									during negotiations of, any merger, sale of Company
									assets, financing, or acquisition of all or a portion of
									our business to another company.
								</li>
								<li>
									<strong>With Affiliates:</strong> We may share your
									information with our affiliates, in which case we will
									require those affiliates to honour this Privacy Policy.
									Affiliates include Our parent company and any other
									subsidiaries, joint venture partners or other companies
									that We control or that are under common control with Us.
								</li>
								<li>
									<strong>With business partners:</strong> We may share
									your information with our business partners to offer you
									certain products, services or promotions.
								</li>
								<li>
									<strong>With other users:</strong> when you share
									personal information or otherwise interact in the public
									areas with other users, such information may be viewed by
									all users and may be publicly distributed outside.
								</li>
								<li>
									<strong>With Your consent</strong>: We may disclose Your
									personal information for any other purpose with Your
									consent.
								</li>
							</ul>
							<h4>Retention of Your Personal Data</h4>
							<p>
								The Company will retain your Data only for as long as is
								necessary for the purposes set out in this Privacy Policy.
								We will retain and use Your Data to the extent necessary to
								comply with our legal obligations (for example, if we are
								required to retain your data to comply with applicable
								laws), resolve disputes, and enforce our legal agreements
								and policies.
							</p>
							<p>
								The Company will also retain Usage Data for internal
								analysis purposes. Usage Data is generally retained for a
								shorter period, except when this data is used to strengthen
								the security or to improve the functionality of Our
								Service, or when we are legally obligated to retain this
								data for longer periods.
							</p>
							<h4>Transfer of Your Personal Data</h4>
							<p>
								Your information, including Personal Data, is processed at
								the Company's operating offices and in any other places
								where the parties involved in the processing are located.
								It means that this information may be transferred to — and
								maintained on — computers located outside of Your state,
								province, country or other governmental jurisdiction where
								the data protection laws may differ than those from Your
								jurisdiction.
							</p>
							<p>
								Your consent to this Privacy Policy, followed by Your
								submission of such information, represents Your agreement
								to that transfer.
							</p>
							<p>
								The Company will take all steps reasonably necessary to
								ensure that Your data is treated securely and under this
								Privacy Policy, and no transfer of Your Data will take
								place to an organisation or a country unless there are
								adequate controls in place includin,g the security of Your
								data and other personal information.
							</p>
							<h4>Delete Your Personal Data</h4>
							<p>
								You have the right to delete or request that We assist in
								deleting the Personal Data that We have collected about
								You.
							</p>
							<p>
								Our Service may give you the ability to delete certain
								information about you from within the Service.
							</p>
							<p>
								You may update, amend, or delete your information at any
								time by signing in to Your Account, if you have one, and
								visiting the account settings section that allows you to
								manage your personal information. You may also contact Us
								to request access to, correct, or delete any personal
								information that You have provided to Us.
							</p>
							<p>
								Please note, however, that we may need to retain certain
								information when we have a legal obligation or a lawful
								basis to do so.
							</p>
							<h4>Disclosure of Your Personal Data</h4>
							<h5>Business Transactions</h5>
							<p>
								If the Company is involved in a merger, acquisition or
								asset sale, your Personal Data may be transferred. We will
								provide notice before Your Personal Data is transferred and
								becomes subject to a different Privacy Policy.
							</p>
							<h4>Law enforcement</h4>
							<p>
								Under certain circumstances, the Company may be required to
								disclose Your Personal Data if required to do so by law or
								in response to valid requests by public authorities (e.g. a
								court or a government agency).
							</p>
							<h5>Other legal requirements</h5>
							<p>
								The Company may disclose Your Personal Data in good faith
								belief that such action is necessary to:
							</p>
							<ul>
								<li>Comply with a legal obligation</li>
								<li>
									Protect and defend the rights or property of the Company
								</li>
								<li>
									Prevent or investigate possible wrongdoing in connection
									with the Service
								</li>
								<li>
									Protect the personal safety of Users of the Service or
									the public
								</li>
								<li>Protect against legal liability</li>
							</ul>
							<h4>Security of Your Personal Data</h4>
							<p>
								The security of Your Personal Data is important to Us, but
								remember that no method of transmission over the Internet,
								or method of electronic storage, is 100% secure. While we
								strive to use commercially acceptable means to protect Your
								Personal Data, we cannot guarantee its absolute security.
							</p>
							<h2>Children's Privacy</h2>
							<p>
								Our Service does not address anyone under the age of 13. We
								do not knowingly collect personally identifiable
								information from anyone under the age of 13. If you are a
								parent or guardian and you are aware that your child has
								provided us with Personal Data, please contact us. If we
								become aware that we have collected Personal Data from
								anyone under the age of 13 without verification of parental
								consent, we will take steps to remove that information from
								our servers.
							</p>
							<p>
								If we need to rely on consent as a legal basis for
								processing your information and your country requires
								consent from a parent, we may require your parent's consent
								before we collect and use that information.
							</p>
							<h3>Links to Other Websites</h3>
							<p>
								Our Service may contain links to other websites that are
								not operated by Us. If you click on a third-party link, you
								will be directed to that third party's site. We strongly
								advise you to review the Privacy Policy of every site you
								visit.
							</p>
							<p>
								We have no control over and assume no responsibility for
								the content, privacy policies or practices of any
								third-party sites or services.
							</p>
							<h3>Changes to this Privacy Policy</h3>
							<p>
								We may update our Privacy Policy from time to time. We will
								notify you of any changes by posting the new Privacy Policy
								on this page.
							</p>
							<p>
								We will let you know via email and/or a prominent notice on
								our Service, before the change becomes effective, and
								update the "Last updated" date at the top of this Privacy
								Policy.
							</p>
							<p>
								You are advised to review this Privacy Policy periodically
								for any changes. Changes to this Privacy Policy are
								effective when they are posted on this page.
							</p>
							<h3>Contact Us</h3>
							<p>
								If you have any questions about this Privacy Policy, you
								can contact us:
							</p>
						</div>
					)}
					{activeSection === "Contact Us" && (
						<div className="contact-us-section">
							<div className="contact-container">
								{/* Left Side - Contact Form */}
								<div className="contact-form-side">
									<div className="contact-form-content">
										<h1 className="contact-title">Contact Us</h1>

										<div className="contact-form-wrapper">
											<div className="contact-form-group">
												<input
													type="text"
													name="name"
													placeholder="Name"
													value={contactFormData.name}
													onChange={handleContactInputChange}
													className="contact-input"
													required
												/>
											</div>

											<div className="contact-form-group">
												<input
													type="email"
													name="email"
													placeholder="Email"
													value={contactFormData.email}
													onChange={handleContactInputChange}
													className="contact-input"
													required
												/>
											</div>

											<div className="contact-form-group">
												<textarea
													name="message"
													placeholder="Message"
													value={contactFormData.message}
													onChange={handleContactInputChange}
													rows={4}
													className="contact-textarea"
													required
												/>
											</div>

											<div className="contact-checkbox-group">
												<input
													type="checkbox"
													name="newsletter"
													id="newsletter"
													checked={contactFormData.newsletter}
													onChange={handleContactInputChange}
													className="contact-checkbox"
												/>
												<label
													htmlFor="newsletter"
													className="contact-checkbox-label"
												>
													I would like to receive the newsletter
												</label>
											</div>

											<button
												type="button"
												onClick={handleContactSubmit}
												className="contact-submit-btn"
											>
												Submit
											</button>
										</div>
									</div>
								</div>

								<div className="contact-info-side">
									<div className="contact-map-area">
										{/* Map illustration */}
										<div className="map-illustration">
											<div className="map-shape map-shape-1"></div>
											<div className="map-shape map-shape-2"></div>
											<div className="map-shape map-shape-3"></div>

											<div className="university-marker">
												<div className="marker-icon">
													<BsTelephone size={16} />
												</div>
												<div className="marker-text">
													University
													<br />
													of the
													<br />
													Witwatersrand
												</div>
											</div>
										</div>
									</div>

									{/* Contact Information */}
									<div className="contact-details">
										<div className="contact-description">
											<p>
												Contact Support for any issues or if you need
												information that isn't available on the website.
											</p>
										</div>

										<div className="contact-info-list">
											<div className="contact-info-item">
												<CgProfile size={16} />
												<span>
													1 Jan Smuts Avenue, Braamfontein, Johannesburg,
													2000
												</span>
											</div>

											<div className="contact-info-item">
												<BsTelephone size={16} />
												<span>(011) 717-1000</span>
											</div>

											<div className="contact-info-item">
												<IoDocumentTextOutline size={16} />
												<span>2429549@students.wits.ac.za</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</main>
			</div>
		</div>
	);
}

export default Dashboard;
