import React from 'react';
import coverImage from "../../assets/me.jpg";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
      <img src={coverImage} style={{ width: "30%", height: "30%"}} alt="cover" />
			</div>
			<div>
				<p>
					I am a full stack web developer looking to build a more
					intuitive user experience on the web.
				</p>
			</div>
		</section>
	);
}

export default About;