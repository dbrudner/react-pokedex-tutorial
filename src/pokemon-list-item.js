import React from "react";

export default ({ name, url }) => {
	const getImgId = () => {
		return url.split("/")[6];
	};

	return (
		<div
			className="card"
			style={{ width: "calc(20vw)", padding: "2vw", marginTop: "2vw" }}
		>
			<div class="card-body">
				<div class="h5 text-center">
					{name.substr(0, 1).toUpperCase() + name.substr(1)}
				</div>
			</div>
			<img
				className="card-img-top"
				src={`${window.location.origin}/assets/svgs/${getImgId()}.svg`}
				alt={name}
			/>
		</div>
	);
};
