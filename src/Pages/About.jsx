import React from "react";
import Footer from "../Components/Footer";
import placeholder from "../Assets/placeholder.jpg";
import "../Styles/about.css";

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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Nulla feugiat mauris eget nibh fringilla iaculis.
								Suspendisse eu maximus turpis, vel condimentum odio.
								Maecenas non mi accumsan, viverra lorem faucibus, fringilla
								metus. Quisque eu viverra felis. Donec ligula tortor,
								cursus nec enim eget, mattis accumsan leo. Mauris facilisis
								at mauris non condimentum. Vivamus interdum odio sit amet
								lorem dictum, sed mollis purus tincidunt. Nam risus nisi,
								elementum non odio vitae, dictum molestie elit.
								Pellentesque facilisis auctor felis a sollicitudin.
								Curabitur viverra ipsum eget tincidunt rutrum. Interdum et
								malesuada fames ac ante ipsum primis in faucibus. Proin
								luctus augue vulputate iaculis congue. Nam imperdiet justo
								eu tristique pretium. In gravida, tellus at auctor
								bibendum, felis enim suscipit lectus, in faucibus nibh est
								eu augue. Suspendisse risus augue, maximus eu lectus sed,
								gravida laoreet ex.
							</p>
						</div>
						<img src={placeholder} />
					</div>
				</section>
				<section className="content-section-reverse">
					<div className="content-grid">
						<img src={placeholder} />
						<div className="text-content">
							<h4>What we offer?</h4>
							<p className="description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Nulla feugiat mauris eget nibh fringilla iaculis.
								Suspendisse eu maximus turpis, vel condimentum odio.
								Maecenas non mi accumsan, viverra lorem faucibus, fringilla
								metus. Quisque eu viverra felis. Donec ligula tortor,
								cursus nec enim eget, mattis accumsan leo. Mauris facilisis
								at mauris non condimentum. Vivamus interdum odio sit amet
								lorem dictum, sed mollis purus tincidunt. Nam risus nisi,
								elementum non odio vitae, dictum molestie elit.
								Pellentesque facilisis auctor felis a sollicitudin.
								Curabitur viverra ipsum eget tincidunt rutrum. Interdum et
								malesuada fames ac ante ipsum primis in faucibus. Proin
								luctus augue vulputate iaculis congue. Nam imperdiet justo
								eu tristique pretium. In gravida, tellus at auctor
								bibendum, felis enim suscipit lectus, in faucibus nibh est
								eu augue. Suspendisse risus augue, maximus eu lectus sed,
								gravida laoreet ex.
							</p>
						</div>
					</div>
				</section>

				<section className="content-section">
					<div className="content-grid">
						<div className="text-content">
							<h4>Our Values</h4>
							<p className="description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Nulla feugiat mauris eget nibh fringilla iaculis.
								Suspendisse eu maximus turpis, vel condimentum odio.
								Maecenas non mi accumsan, viverra lorem faucibus, fringilla
								metus. Quisque eu viverra felis. Donec ligula tortor,
								cursus nec enim eget, mattis accumsan leo. Mauris facilisis
								at mauris non condimentum. Vivamus interdum odio sit amet
								lorem dictum, sed mollis purus tincidunt. Nam risus nisi,
								elementum non odio vitae, dictum molestie elit.
								Pellentesque facilisis auctor felis a sollicitudin.
								Curabitur viverra ipsum eget tincidunt rutrum. Interdum et
								malesuada fames ac ante ipsum primis in faucibus. Proin
								luctus augue vulputate iaculis congue. Nam imperdiet justo
								eu tristique pretium. In gravida, tellus at auctor
								bibendum, felis enim suscipit lectus, in faucibus nibh est
								eu augue. Suspendisse risus augue, maximus eu lectus sed,
								gravida laoreet ex.
							</p>
						</div>
						<img src={placeholder} />
					</div>
				</section>

				<section className="content-section-reverse">
					<div className="content-grid">
						<img src={placeholder} />
						<div className="text-content">
							<h4>FAQs</h4>
							<p className="description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Nulla feugiat mauris eget nibh fringilla iaculis.
								Suspendisse eu maximus turpis, vel condimentum odio.
								Maecenas non mi accumsan, viverra lorem faucibus, fringilla
								metus. Quisque eu viverra felis. Donec ligula tortor,
								cursus nec enim eget, mattis accumsan leo. Mauris facilisis
								at mauris non condimentum. Vivamus interdum odio sit amet
								lorem dictum, sed mollis purus tincidunt. Nam risus nisi,
								elementum non odio vitae, dictum molestie elit.
								Pellentesque facilisis auctor felis a sollicitudin.
								Curabitur viverra ipsum eget tincidunt rutrum. Interdum et
								malesuada fames ac ante ipsum primis in faucibus. Proin
								luctus augue vulputate iaculis congue. Nam imperdiet justo
								eu tristique pretium. In gravida, tellus at auctor
								bibendum, felis enim suscipit lectus, in faucibus nibh est
								eu augue. Suspendisse risus augue, maximus eu lectus sed,
								gravida laoreet ex.
							</p>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default About;
