import React from 'react';

const Home = () => {
	return (
		<div>
			<div>I am from the best home component</div>
			<button
				onClick={(e) => {
					console.log('Hi there !!!');
				}}
			>
				Press me
			</button>
		</div>
	);
};

export default { component: Home };
