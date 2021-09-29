var movies = [{name: "Jason Bourne", rating: 4.5, hasWatched: true},
{name: "Knives Out", rating: 4, hasWatched: true} ,
{name: "Godfather", rating: 5, hasWatched: false},
{name: "Pulp Fiction", rating: 4.9, hasWatched: false}];

for(i = 0; i < movies.length; i++ )
	if(movies[i].hasWatched == true){
		console.log("You have watched " + movies[i].name + " - " + movies[i].rating + " stars")
	}
	else {
		console.log("You not have watched " + movies[i].name + " - " + movies[i].rating + " stars")
	}


