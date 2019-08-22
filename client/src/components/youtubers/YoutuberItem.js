import React from 'react';

const YoutuberItem = ({ youtuber }) => {
	const {
		name,
		viewCount,
		subscriberCount,
		videoCount,
		image,
		description
	} = youtuber;
	return (
		<div class='col s12 m7'>
			<h2 class='header'>{name}</h2>
			<div class='card horizontal'>
				<div class='card-image'>
					<img src={image} />
				</div>
				<div class='card-stacked'>
					<div class='card-content'>
						<p>{`Description: ${description}`}</p>
						<br />
						<i class='material-icons'>people</i>{' '}
						{`Followers: ${subscriberCount}`}
						<br />
						<i class='material-icons'>videocam</i> {`Videos: ${videoCount}`}
						<br />
						<i class='material-icons'>remove_red_eye</i>{' '}
						{`ViewCount: ${viewCount}`}
					</div>
					<div class='card-action'>
						<a href='http://youtube.com/'>Youtube Channel</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YoutuberItem;
