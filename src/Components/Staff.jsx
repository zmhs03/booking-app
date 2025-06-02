import "../Styles/businessProfile.css";

function Staff({ staff }) {
	return (
		<section className="staff-section">
			<h3>Staff</h3>
			<div className="staff-list">
				{Array.isArray(staff) &&
					staff.map((member, i) => (
						<div key={i} className="staff-member">
							<img src={member.image} alt={member.name} />
							<p>{member.name}</p>
						</div>
					))}
			</div>
		</section>
	);
}

export default Staff;
