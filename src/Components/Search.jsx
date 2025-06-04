import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Search({
	placeholder,
	scope = "all",
	businessId = null,
	businesses = [],
}) {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		let filteredList = [];

		if (scope === "business" && businessId) {
			const targetBusiness = businesses.find((b) => b.id === businessId);
			if (targetBusiness) {
				filteredList = targetBusiness.services.filter((service) =>
					service.name.toLowerCase().includes(query.toLowerCase())
				);
			}
		} else {
			filteredList = businesses.filter((b) =>
				b.name.toLowerCase().includes(query.toLowerCase())
			);
		}

		setSuggestions(filteredList);
	}, [query, scope, businessId, businesses]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (scope === "business") return; // You can decide what to do here

		if (suggestions.length > 0 && suggestions[0].id) {
			navigate(`/business/${suggestions[0].id}`);
		}
	};

	const handleSuggestionClick = (item) => {
		if (scope === "business") return;
		navigate(`/business/${item.id}`);
	};

	return (
		<div className="search-container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder={placeholder}
					className="search-input"
				/>
				<button type="submit" className="search-button">
					<FiSearch size={20} />
				</button>
			</form>

			{suggestions.length > 0 && (
				<ul className="suggestions-list">
					{suggestions.map((item, index) => (
						<li key={index} onClick={() => handleSuggestionClick(item)}>
							{scope === "business" ? item.name : item.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Search;
