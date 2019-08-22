import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YoutuberItem from './YoutuberItem';

const Youtubers = () => {
	const [youtubers, setYoutubers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getYoutubers();
		// eslint - disable-next-line
	}, []);

	const getYoutubers = async () => {
		setLoading(true);
		const res = await axios.get('/api/youtuber');
		setYoutubers(res.data);
		setLoading(false);
	};

	if (loading) {
		return <h4>Loading...</h4>;
	}

	return (
		<div>
			{!loading && youtubers.length === 0 ? (
				<p> No youtubers to show...</p>
			) : (
				youtubers.map(youtuber => (
					<YoutuberItem key={youtuber._id} youtuber={youtuber} />
				))
			)}
		</div>
	);
};

export default Youtubers;
