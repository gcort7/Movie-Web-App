import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card/Card';

const MovieList = () => {
	const [movies, setMovies ] = useState([]);

	useEffect(() => {
		const data = () => {
			fetch('assets/data.json',
			{
				headers : { 
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			.then(function(response){
					return response.json();
				})
			.then(function(myJson) {
					setMovies(myJson)
				});
		}
		
		data();
	}, []);

	return (
		<div className='row mx-auto'>
		{movies.map(movie => (
			<div key={movie.id} className='col-sm-2'>
				<Card movie={movie} />
			</div>
		))}
	</div>
	);
};

export default MovieList;


