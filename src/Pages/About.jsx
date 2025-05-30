import placeholder from "../Assets/placeholder.jpg";
import what from "../Assets/What.jpg"; //Photo by Steve Johnson on Unsplash
import who from "../Assets/Who.png"; //Photo URL: https://www.freepik.com/free-photo/developers-brainstorming-ideas-looking-code-computer-screens-asking-feedback-from-senior-developer-while-intern-joins-discussion-junior-programmers-collaborating-group-project_26367530.htm#fromView=search&page=1&position=4&uuid=9b95eb3e-9d5c-4cb6-a78b-4cdaf0b9f1fb&query=software+development+team
import values from "../Assets/values.jpg"; //Photo by UX Indonesia on Unsplash
import "../Styles/about.css";
import FAQ from "../Components/FAQ";

function About() {
	return (
		<div>
			<section className="hero-section">
				<div className="hero-content">
					<h2>About Us</h2>
				</div>
			</section>

			<main>
				<section className="content-section">
					<div className="content-grid">
						<div className="text-content">
							<h4>Who we are?</h4>
							<p className="description">
								Our enthusiastic team at ALL SET has dedicated themselves
								to making your search for reliable service providers as
								easy as possible. We put the greatest local companies at
								your fingertips, whether you're scheduling a personal
								trainer, car wash, haircut, or cleaning service. Our
								platform's smooth booking, discovery, and review processes
								empower users and small businesses.
							</p>
						</div>
						<img className="who-img" src={who} />
					</div>
				</section>
				<section className="content-section-reverse">
					<div className="content-grid">
						<img className="what-img" src={what} />
						<div className="what-text">
							<h4>What we offer?</h4>
							<p className="offer-description">
								<ul>
									<li>
										Curated Businesses: Find top-rated service providers
										near you.
									</li>
									<li>
										Booking made easy: Make appointments without having to
										wait or make a call.
									</li>
									<li>
										Favourite: Save businesses you love for quick acess
										later.
									</li>
									<li>
										Business Profiles: Find out more about the services,
										costs, and availability of each supplier.
									</li>
								</ul>
							</p>
						</div>
					</div>
				</section>

				<section className="content-section">
					<div className="content-grid">
						<div className="text-content">
							<h4>Our Values</h4>
							<p className="description">
								<ul>
									<li>
										Trust: We prioritise transparency and integrity in our
										listings and reviews.
									</li>
									<li>
										Community: Helping local service providers develop.
									</li>
									<li>
										Convenience: Making routine reservations quickly and
										without difficulty.
									</li>
									<li>
										Quality: Highlighting top-performing businesses based
										on genuine feedback.
									</li>
									<li>
										Innovation: We are always upgrading our platform
										depending on user needs.
									</li>
								</ul>
							</p>
						</div>
						<img className="values-img" src={values} />
					</div>
				</section>
				<FAQ />
			</main>
		</div>
	);
}

export default About;
