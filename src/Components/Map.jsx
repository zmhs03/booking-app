// Map.jsx
import "../Styles/businessProfile.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = ({ name, address }) => {
	const apiKey = process.env.KEY;

	const getMapEmbedUrl = (address) => {
		if (!address || !apiKey) return null;
		const encoded = encodeURIComponent(address);
		return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encoded}&zoom=15&maptype=roadmap`;
	};

	return (
		<div className="map-container">
			{address &&
				(apiKey ? (
					<>
						<iframe
							src={getMapEmbedUrl(address)}
							className="map-embed"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title={`Map of ${name}`}
							onError={() => console.log("Map failed to load")}
						/>
						<div className="map-info-overlay">
							<div className="business-name">{name}</div>
							<div className="business-address">{address}</div>
						</div>
					</>
				) : (
					<div className="map-placeholder">
						<div className="map-placeholder-content">
							<div className="map-icon">
								<FaMapMarkerAlt />
							</div>
							<div className="address-text">
								<div className="business-name">{name}</div>
								<div className="business-address">{address}</div>
							</div>
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
									address
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="directions-link"
							>
								Get Directions
							</a>
						</div>
					</div>
				))}
		</div>
	);
};

export default Map;
