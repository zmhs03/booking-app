import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/home.css";
import "../Styles/hero.css";
import heroImg from "../Assets/blake-wisz-GFrBMipOd_E-unsplash.jpg";
import BusinessCardHome from "../Components/BusinessCardHome";
import Windows from "../Assets/windows-SwHvzwEzCfA-unsplash.jpg";
import Macbook from "../Assets/patrick-tomasso-fMntI8HAAB8-unsplash.jpg"; //Photo by Patrick Tomasso on Unsplash
function Home() {
	const { isAuthenticated } = useContext(AuthContext);

	const HeroSection = () => (
		<div className="hero-container">
			<div
				className="hero-background"
				style={{ backgroundImage: `url(${heroImg})` }}
			/>

			<div className="hero-overlay" />

			<div className="hero-content">
				<h1 className="hero-title">All your appointments in one go.</h1>
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

			<section className="content-section">
				<div className="content-grid">
					<div className="text-content">
						<p className="sentence-1">
							Say goodbye to juggling emails, texts, and scattered
							confirmations. With All Set, you can view, manage, and update
							all your appointments in one simple dashboard. Whether you're
							booking a haircut, massage, or meeting, everything is
							streamlined for your convenience.
						</p>
					</div>
					<img className="sen1-img" src={Windows} />
				</div>
			</section>
			<section className="content-section-reverse">
				<div className="content-grid">
					<img className="sen2-img" src={Macbook} />
					<div className="sen2-text">
						<p className="sentence-2">
							Explore a wide range of trusted businesses from beauty and
							wellness to home services and more without hopping between
							different websites. Compare prices, read reviews, and book
							instantly. It's never been easier to find and secure the
							services that fit your schedule and lifestyle.
						</p>
					</div>
				</div>
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

			<section className="content-section">
				<div className="content-grid">
					<div className="text-content">
						<p className="sentence-1">
							Say goodbye to juggling emails, texts, and scattered
							confirmations. With All Set, you can view, manage, and update
							all your appointments in one simple dashboard. Whether you're
							booking a haircut, massage, or meeting, everything is
							streamlined for your convenience.
						</p>
					</div>
					<img className="sen1-img" src={Windows} />
				</div>
			</section>
			<section className="content-section-reverse">
				<div className="content-grid">
					<img className="sen2-img" src={Macbook} />
					<div className="sen2-text">
						<p className="sentence-2">
							Explore a wide range of trusted businesses from beauty and
							wellness to home services and more without hopping between
							different websites. Compare prices, read reviews, and book
							instantly. It's never been easier to find and secure the
							services that fit your schedule and lifestyle.
						</p>
					</div>
				</div>
			</section>
		</div>
	);

	return (
		<div>{isAuthenticated ? <LoggedInView /> : <LoggedOutView />}</div>
	);
}

export default Home;
