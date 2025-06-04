import React from "react";
import { Link } from "react-router";
import Logo from "../Assets/Logo_white.png";
import "../Styles/footer.css";

function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-content">
				<div className="footer-links">
					<div className="support-container">
						<h3>Support</h3>
						<Link to="/faqs">FAQs</Link>
						<Link to="/contact">Contact Support</Link>
						<Link to="/appointments">Mange your Appointments</Link>
					</div>

					<div className="legal-container">
						<h3>Legal</h3>
						<Link to="/terms">Terms of Service</Link>
						<Link to="/privacy">Privacy Policy</Link>
					</div>

					<div className="qlinks-container">
						<h3>Quick Links</h3>
						<Link to="/">Home</Link>
						<Link to="/About">About Us</Link>
						<Link to="/Explore">Explore</Link>
						<Link to="/Dashboard">Dashboard</Link>
					</div>
				</div>

				<div className="logo-section">
					<Link to="/" className="logo-container">
						<img src={Logo} alt="All Set Logo" />
					</Link>
					<p className="slogan">All in one service</p>
				</div>
			</div>

			<div className="footer-bottom">
				<hr className="footer-divider" />
				<p className="copyright">
					© 2025 All Set Inc. All rights reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer;
