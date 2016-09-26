<template>
	<div class="class-compare">
		<h1>{{ msg }}</h1>

		<div id="gradeOutput"></div>

		<svg width="960" height="500"></svg>

		<div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			// note: changing this line won't causes changes
			// with hot-reload because the reloaded component
			// preserves its current state and we are modifying
			// its initial state.
			msg: 'Class Compare'
		}
	},
	methods: {
		loadD3: function() {

			var colors = ['#6dde6a', '#c73f4b'];

			var dummyData = [
				["Hector", 35],
				["Classroom", 81]
			]

			// set the dimensions and margins of the graph
			var margin = {top: 20, right: 20, bottom: 30, left: 40},
			    width = 960 - margin.left - margin.right,
			    height = 500 - margin.top - margin.bottom;

			// set the ranges
			var x = d3.scaleBand()
			          .range([0, width])
			          .padding(0.1);
			var y = d3.scaleLinear()
			          .range([height, 0]);
          
			var svg = d3.select("svg").append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
				.append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


			function draw(data, error) {
				if (error) throw error;

				data.map(function(d) {
					d[1] = +d[1];
					console.log(d[1])
				});

				// Scale the range of the data in the domains
				x.domain(data.map(function(d) { return d[0]; }));
				y.domain([0, d3.max(data, function(d) { return d[1]; })]);

				// append the rectangles for the bar chart
				svg.selectAll(".bar")
					.data(data)
					.enter().append("rect")
					.attr("class", "bar")
					.attr("x", function(d) { return x(d[0]); })
					.style("fill", function(d, i){ return colors[i % colors.length]; })
					.attr("width", x.bandwidth())
					.attr("y", function(d) { return y(d[1]); })
					.attr("height", function(d) { return height - y(d[1]); });

				// add the x Axis
				svg.append("g")
					.attr("transform", "translate(0," + height + ")")
					.call(d3.axisBottom(x));

				// add the y Axis
				svg.append("g")
					.call(d3.axisLeft(y));

			}
			draw(dummyData)

			var fakeArr = [["martin", 80], ["classroom", 20]]

			function calculateGrades(grades) {
				var studentGrade = grades[0][1];
				var classAverage = grades[1][1];
				var status;

				console.log(studentGrade);
				console.log(classAverage);

				if( studentGrade > classAverage ) {
					var diff = studentGrade - classAverage;
					var avg = diff / classAverage;
					var result = Math.round(avg * 100);
					status = "higher";

					displayGrade(result, status);
				} else if( studentGrade < classAverage ) {
					var diff = classAverage - studentGrade;
					var avg = diff / classAverage;
					var result = Math.round(avg * 100);
					status = "lower";

					displayGrade(result, status);
				} else {
					displayGrade();
				}
			}
			calculateGrades(dummyData, status);

			function displayGrade(result, status) {
				var outputCanvas = document.getElementById('gradeOutput');
				var student = dummyData[0][0] + "'s";

				if(!result) {
					outputCanvas.innerHTML = student + " grades are on par with the class average."; 
				} else if (status == "higher") {
					outputCanvas.innerHTML = student + " grades are " + result + "% above the class average!";
				} else {
					outputCanvas.innerHTML = student + " grades are " + result + "% below the class average.";
				}
			}
			// getStudentData: function() {
			// 	this.$http.get('/studentData.json').then((response) => {
			// 		this.$set('students', response.body)
			// 	}, (response) => {
			// 		// error handling
			// 	}
			// }


		}
	},
	ready() {
		this.loadD3();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		color: #105BA4;
	}
	.main {
		height: 100%;
		margin-left: 20px;
	}
	.utilities {
		/*border: 1px solid black;*/
	}
	.utilities .utility {
		width: 20vw;
		height: 20vw;
		line-height: 20vw;	
		text-align: center;
		font-size: 10vw;
		color: #c4c4c4;
		display: inline-block;
		margin-top: 5px;
		padding-bottom: 2px;
		/*border: 1px solid #ff0000;*/
	}
	.utilities .utility a,
	.utilities .utility a:link,
	.utilities .utility a:visited {
		color: #c4c4c4;
		text-decoration: none;
	}
	.utilities .utility:hover,
	.utilities .utility:hover a,
	.utilities .utility a:hover {
		background-color: #fbfbfb;
		color: #7bcea9;
	}

	svg.bar { fill: steelblue; }

	#gradeOutput {
		font-size: 2em;
		color: #1A3665;
		margin-bottom: 2em;
	}
	#gradeOutput span {
		color: #1A3665;
	}
	.info {
		margin-top: 50px;
		line-height: 2;
	}
</style>
