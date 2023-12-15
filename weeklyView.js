			var w = 1350;
			var h = 34030;
			var head=0;
			var padding=-50;
			
			var svg2 = d3.select("#chart")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

			//load datasets
			var dataset1 = d3.csv("grossbyWeek.csv")
			var dataset2 = d3.csv("byWeekTheatre.csv")
	        Promise.all([dataset1,dataset2])
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
										
			 	 				svg2.selectAll(index)
								   .data(data[0])
			 	 				   .enter()
			 	 				   .append("circle")
			 	 				   .attr("cx", function(d) {return  xOffset*65+padding;})
			 	 				   .attr("cy", function(d, i) {if (i<data[0].length){return i*15+15+head};})
								   .attr("r", function(d){if (d[showName]>0){
									   return rScale(d[showName])};})
									 .attr("revenue",function(d){if (d[showName]>0){
									   return d[showName]};})
										   
								   .attr("fill-opacity", function(d) {return  0.1;})
						  		   .attr("stroke-width", function(d) {return  0.5;})
								   .attr("stroke-opacity", function(d) {return  1;})
					
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
									
									//add tooltip
								d3.select("#tooltip2")					
									.select("#time")
									.text(d["Week"])
									   
								d3.select("#tooltip2")
									.select("#gross")
									.text(currentRevenue);
								
								d3.select("#tooltip2")
									.select("#theatre")
									.text(d[showName]);
									
								d3.select("#tooltip2").classed("hidden", false);
									   
								   })
								   .on("mouseout", function() {
									d3.select("#tooltip2").classed("hidden", true);
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
									for(var i=0; i<2266; i++) 
										{var center = i*15+15+head;
											arr.push(center)
										}
					
							function drawXAxis(x, scale)
									{svg2.selectAll("lineX")
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
								{svg2.selectAll("lineY")
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