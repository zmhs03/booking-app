import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Search({
	placeholder = "Search...",
	scope = "all",
	businessId = null,
	businesses = [],
	variant = "inline",
	onResultSelect = null,
}) {
	const [query, setQuery] = useState("");
	const [showInput, setShowInput] = useState(true);
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
		if (scope === "business") return;

		if (suggestions.length > 0 && suggestions[0].id) {
			if (onResultSelect) {
				onResultSelect(suggestions[0].id);
			} else {
				navigate(`/business/${suggestions[0].id}`);
			}
		}
	};

	const handleSuggestionClick = (item) => {
		if (scope === "business") return;

		if (onResultSelect) {
			onResultSelect(item.id);
		} else {
			navigate(`/business/${item.id}`);
		}
	};

	return (
		<div
			className={`search-container ${variant} ${
				showInput ? "show-input" : ""
			}`}
		>
			<form onSubmit={handleSubmit} className="search-form">
				{showInput && (
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder={placeholder}
						className="search-input"
					/>
				)}

				<button type="submit" className="search-button">
					<FiSearch />
				</button>
			</form>

			{suggestions.length > 0 && (
				<ul className="suggestions-list">
					{suggestions.map((item, index) => (
						<li key={index} onClick={() => handleSuggestionClick(item)}>
							{item.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Search;
