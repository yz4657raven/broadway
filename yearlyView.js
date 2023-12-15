	var w = 1350;
	var h = 735;
	var head=0;
	var padding=-50;
	
	var svg1 = d3.select("#chart")
	.append("svg")
	.attr("width", w)
	.attr("height", h);

	//load datasets
	var dataset1 = d3.csv("grossbyWeek.csv")
	var dataset2 = d3.csv("byWeekTheatre.csv")
	var dataset3 = d3.csv("byYear.csv")
    Promise.all([dataset1,dataset2,dataset3])
        .then(function(data) {
					
	//draw circles
		
			//circle scale
			rScale = d3.scaleLinear()
					   .domain([
						   d3.min(data[0], function(d) { return d["OhCalcutta"]; }),
						   d3.max(data[0], function(d) { return d["TheLionKing"]; })
						])
					   .range([1, 20]);	
				
				
		function drawCircles(index, showName, xOffset){
			
			var colorDictionary = {
				"Edison":"#FFD26F",
				"Shubert":"#ff7761",
			   	"Majestic":"#3c92c3",
			 	"State":"#31815a",
			 	"Uris":"#b3d646",
				"Gershwin":"#b3d646",
				"Broadway":"#c07cc6",
			 	"St. James":"#5ad7ad",
				"Imperial":"#ea517f",
				"Virginia":"#ffbc88",
				"Palace":"#f7e8aa",
			 	"Winter Garden":"#c0f9ff",
				"Ford Center":"#eea2a4",
				"Schoenfeld":"#9b1e64",
				"New Amsterdam":"#e9ccd3",
				"Lunt-Fontanne":"#a4cab6",
				"Richard Rodgers":"#fed71a",
				"Ambassador":"#e5d3aa",
				"Minskoff":"#f26b1f",
				"Eugene O'Neill":"#f6ad8f",
				"Brooks Atkinson":"#f1c4cd",
				"Neil Simon":"#ed5126",
				"Broadhurst":"#8076a3",
				"Vivian Beaumont":"#61649f",
				"Nederlander":"#8cc269"
			}
								
	 	 				svg1.selectAll(index)
						   .data(data[0])
	 	 				   .enter()
	 	 				   .append("circle")
	 	 				   .attr("cx", function(d) {return  xOffset*65+padding;})
	 	 				   .attr("cy", function(d,i) {
							   if (i<31) {return 0*15+15+head;}
							   else if (i<83) {return 1*15+15+head;}
							   else if (i<135) {return 2*15+15+head;}
							   else if (i<187) {return 3*15+15+head;}
							   else if (i<240) {return 4*15+15+head;}
							   else if (i<292) {return 5*15+15+head;}
							   else if (i<344) {return 6*15+15+head;}
							   else if (i<396) {return 7*15+15+head;}
							   else if (i<448) {return 8*15+15+head;}
							   else if (i<501) {return 9*15+15+head;}
							   else if (i<553) {return 10*15+15+head;}
							   else if (i<605) {return 11*15+15+head;}
							   else if (i<657) {return 12*15+15+head;}
							   else if (i<709) {return 13*15+15+head;}
							   else if (i<761) {return 14*15+15+head;}
							   else if (i<814) {return 15*15+15+head;}
							   else if (i<866) {return 16*15+15+head;}
							   else if (i<918) {return 17*15+15+head;}
							   else if (i<970) {return 18*15+15+head;}
							   else if (i<1022) {return 19*15+15+head;}
							   else if (i<1075) {return 20*15+15+head;}
							   else if (i<1127) {return 21*15+15+head;}
							   else if (i<1179) {return 22*15+15+head;}
							   else if (i<1231) {return 23*15+15+head;}
							   else if (i<1283) {return 24*15+15+head;}
							   else if (i<1335) {return 25*15+15+head;}
							   else if (i<1388) {return 26*15+15+head;}
							   else if (i<1440) {return 27*15+15+head;}
							   else if (i<1492) {return 28*15+15+head;}
							   else if (i<1544) {return 29*15+15+head;}
							   else if (i<1596) {return 30*15+15+head;}
							   else if (i<1648) {return 31*15+15+head;}
							   else if (i<1701) {return 32*15+15+head;}
							   else if (i<1753) {return 33*15+15+head;}
							   else if (i<1805) {return 34*15+15+head;}
							   else if (i<1857) {return 35*15+15+head;}
							   else if (i<1909) {return 36*15+15+head;}
							   else if (i<1962) {return 37*15+15+head;}
							   else if (i<2014) {return 38*15+15+head;}
							   else if (i<2066) {return 39*15+15+head;}
							   else if (i<2118) {return 40*15+15+head;}
							   else if (i<2170) {return 41*15+15+head;}
							   else if (i<2222) {return 42*15+15+head;}
							   else {return 43*15+15+head;}
							;
						   })
						   .attr("r", function(d){if (d[showName]>0){
							   return rScale(d[showName])};})
							 .attr("revenue",function(d){if (d[showName]>0){
							   return d[showName]};})
								   
						   .attr("fill-opacity", 0)
				  		   .attr("stroke-width", 0.5)
						   .attr("stroke-opacity", 0.5)
			
					//add color for different theatres
						   .data(data[1])
						   .attr("fill",function(d,i) {
							   
							   return colorDictionary[d[showName]]
						
					   })
						   .attr("stroke",function(d,i) {
							   return colorDictionary[d[showName]]
						   })
						   .on("mouseover",function(d,i){
							   var currentRevenue =d3.select(this).attr("revenue")
							   console.log(showName, d["Week"],d[showName],currentRevenue)
							
							//add tooltip1
						d3.select("#tooltip1")					
							.select("#time")
							.text(d["Week"])
						
						d3.select("#tooltip1")
							.select("#theatre")
							.text(d[showName]);
							
						d3.select("#tooltip1").classed("hidden", false);
							   
						   })
						   .on("mouseout", function() {
							d3.select("#tooltip1").classed("hidden", true);
						   })
					}
					
					


				
				drawCircles("circle"+"1", "OhCalcutta",1)
				drawCircles("circle"+"2", "AChorusLine",2)
				drawCircles("circle"+"3", "42ndStreet",3)
				drawCircles("circle"+"4", "FiddlerOnTheRoof",4)
				drawCircles("circle"+"5", "MyFairLady",5)
				drawCircles("circle"+"6", "Cats",6)
				drawCircles("circle"+"7", "LesMiserables",7)
				drawCircles("circle"+"8", "ThePhantomOfTheOpera",8)
				drawCircles("circle"+"9", "MissSaigon",9)
				drawCircles("circle"+"10", "BeautyAndTheBeast",10)
				drawCircles("circle"+"11", "Grease",11)	
				drawCircles("circle"+"12", "Rent",12)
				drawCircles("circle"+"13", "Chicago",13)
				drawCircles("circle"+"14", "TheLionKing",14)
				drawCircles("circle"+"15", "MammaMia",15)
				drawCircles("circle"+"16", "Hairspray",16)
				drawCircles("circle"+"17", "Wicked",17)
				drawCircles("circle"+"18", "TheBookOfMormon",18)
				drawCircles("circle"+"19", "Aladdin",19)
				drawCircles("circle"+"20", "Hamilton",20)
					
		//draw axis
					var arr = [];
							for(var i=0; i<44; i++) 
								{var center = i*15+15+head;
									arr.push(center)
								}
			
					function drawXAxis(x, scale)
							{svg1.selectAll("lineX")
									.data(arr)
									.enter()
									.append("line")
									.attr("x1",function(d,i){return x*65+padding-scale*0.5})
									.attr("y1",function(d,i) {return arr[i];})
									.attr("x2",function(d,i){return x*65+padding+scale*0.5})
									.attr("y2",function(d,i) {return arr[i];})
									.style("stroke", "white")
									.style("stroke-width", 0.3)
									.style("stroke-opacity", 0.7)
							}
		
							for (var i=1; i<21; i++){
								drawXAxis(i, 5)
							}
					
					function drawYAxis(x, scale)
						{svg1.selectAll("lineY")
								.data(arr)
								.enter()
								.append("line")
								.attr("x1",function(d){return x*65+padding})
								.attr("y1",function(d,i) {return arr[i]-scale*0.5;})
								.attr("x2",function(d){return x*65+padding})
								.attr("y2",function(d,i) {return arr[i]+scale*0.5;})
								.style("stroke", "white")
								.style("stroke-width", 0.3)
								.style("stroke-opacity", 0.7)
						}
		
						for (var i=1; i<21; i++){
							drawYAxis(i, 5)
						}

	});