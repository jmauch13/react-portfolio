import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/jmauch13"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/jennie-mauch-44107758"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/jennie_mauch"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/twitter-logo.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;