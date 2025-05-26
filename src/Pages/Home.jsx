import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { LuSearch } from "react-icons/lu";
import "../Styles/home.css";
import "../Styles/hero.css";
import heroImg from "../Assets/blake-wisz-GFrBMipOd_E-unsplash.jpg";
import BusinessCardHome from "../Components/BusinessCardHome";
import Footer from "../Components/Footer";

function Home() {
	const { isAuthenticated } = useContext(AuthContext);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};

	const HeroSection = () => (
		<div className="hero-container">
			<div
				className="hero-background"
				style={{
					backgroundImage: `url(${heroImg})`,
				}}
			/>

			<div className="hero-overlay" />

			<div className="hero-content">
				<h1 className="hero-title">All your appointments in one go.</h1>

				<div className="search-container">
					<div className="search-input-wrapper">
						<input
							type="text"
							placeholder="Search for services"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
							className="search-input"
						/>
						<button onClick={handleSearch} className="search-button">
							<LuSearch size={24} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);

	const LoggedOutView = () => (
		<div>
			<HeroSection />

			<section id="featured-businesses">
				<p className="featured-business">Featured Businesses</p>
				<BusinessCardHome />
			</section>

			<section id="mini-about">
				<p>
					Say goodbye to juggling emails, texts, and scattered
					confirmations. With All Set, you can view, manage, and update all
					your appointments in one simple dashboard. Whether you're booking
					a haircut, massage, or meeting, everything is streamlined for
					your convenience.
				</p>
				<p>
					Explore a wide range of trusted businesses from beauty and
					wellness to home services and more without hopping between
					different websites. Compare prices, read reviews, and book
					instantly. It's never been easier to find and secure the services
					that fit your school and lifestyle.
				</p>
			</section>
		</div>
	);

	const LoggedInView = () => (
		<div>
			<HeroSection />

			<section id="featured-businesses">
				<p className="featured-business">Featured Businesses</p>
				<BusinessCardHome />
			</section>

			<section id="mini-about">
				<p>
					Say goodbye to juggling emails, texts, and scattered
					confirmations. With All Set, you can view, manage, and update all
					your appointments in one simple dashboard. Whether you're booking
					a haircut, massage, or meeting, everything is streamlined for
					your convenience.
				</p>
				<p>
					Explore a wide range of trusted businesses from beauty and
					wellness to home services and more without hopping between
					different websites. Compare prices, read reviews, and book
					instantly. It's never been easier to find and secure the services
					that fit your schedule and lifestyle.
				</p>
			</section>
		</div>
	);

	return (
		<div>
			{isAuthenticated ? <LoggedInView /> : <LoggedOutView />}
			<Footer />
		</div>
	);
}

export default Home;
