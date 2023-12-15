    var w1 = 1050;
    var h1 = 700;
    var padding1 = 40;

    var xScale1, yScale1, xAxis, yAxis, cScale1, r1Scale1, xAxis, r2Scale1, yScale;

    var svgZhihan = d3.select("#zhihanChart")
      .append("svg")
      .attr("width", w1)
      .attr("height", h1);

    d3.csv("Award.csv")
      .then(function (csvData) {

        var data = csvData;

        xScale1 = d3.scaleLinear()
          .domain([1, 32])
          .range([padding, w1 - padding - 70]);

        r1Scale1 = d3.scaleLinear()
          .domain([0, d3.max(data, function (d) { return d["win"]; })])
          .range([2, 10]);

        r2Scale1 = d3.scaleLinear()
          .domain([d3.min(data, function (d) { return d["nominated"]; }),
          d3.max(data, function (d) { return d["nominated"]; })])
          .range([8, 20]);

        yScale1 = d3.scaleLog()
          .domain([d3.min(data, function (d) { return d["performances"]; }),
          d3.max(data, function (d) { return d["performances"]; })])
          .range([90, 110]);

        svgZhihan.selectAll(".win-circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("class", "win-circle")
          .attr("cx", function (d, i) { return xScale1(d["number"]); })
          .attr("cy", h1 / 2 - 18)
          .attr("r", function (d, i) { return r1Scale1(d["win"]); })
          .attr("fill", function (d) {
					if (d["show"]=="Wicked"){return "#b3d646"}
					if (d["show"]=="A Chorus Line"){return "#ed3333"}
					if (d["show"]=="A Little Night Music"){return "#ed556a"}
					if (d["show"]=="An American in Paris"){return "#11659a"}
					if (d["show"]=="Fun Home"){return "#eaad1a"}
					if (d["show"]=="Grand Hotel"){return "#b5aa90"}
					if (d["show"]=="Les Miserables"){return "#1781b5"}
					if (d["show"]=="Matilda"){return "#66a9c9"}
					if (d["show"]=="Nine"){return "#fbeee2"}
					if (d["show"]=="The Life"){return "#f5391c"}
					if (d["show"]=="Natasha, Pierre & The Great Comet of 1812"){return "#ac1f18"}
					if (d["show"]=="The Scottsboro Boys"){return "#cc5595"}
					if (d["show"]=="Mean Girls"){return "#eb507e"}
					if (d["show"]=="SpongeBob SquarePants"){return "#f4ce69"}
					if (d["show"]=="Ain't Too Proud"){return "#ec4e8a"}
					if (d["show"]=="Dreamgirls"){return "#dfc243"}
					if (d["show"]=="The Drowsy Chaperone"){return "#d42517"}
					if (d["show"]=="Hairspray"){return "#5698c3"}
					if (d["show"]=="In the Heights"){return "#f2481b"}
					if (d["show"]=="Kinky Boots"){return "#eb261a"}
					if (d["show"]=="Me and My Girl"){return "#b0d5df"}
					if (d["show"]=="Ragtime"){return "#61649f"}
					if (d["show"]=="Some Like It Hot"){return "#ed2f6a"}
					if (d["show"]=="The Book of Mormon"){return "#f8e0b0"}
					if (d["show"]=="Hadestown"){return "#be7e4a"}
					if (d["show"]=="Company"){return "#813c85"}
					if (d["show"]=="Spamalot"){return "#d6a01d"}
					if (d["show"]=="Kiss Me, Kate"){return "#f97d1c"}
					if (d["show"]=="Jagged Little Pill"){return "#12aa9c"}
					if (d["show"]=="Billy Elliot"){return "#d11a2d"}
					if (d["show"]=="The Producers"){return "#b9dec9"}
					if (d["show"]=="Hamilton"){return "#fbb612"}
					;})
					.on("mouseover", function (d, i) {
							console.log(d, i);
							d3.select(this)
							   .attr("fill", "rgba(255, 242, 128, 1)")
							   .style("filter", "url(#shadow)");

							var xPosition = d3.event.pageX;
							var yPosition = d3.event.pageY;

							d3.select("#tooltip3")
									.style("left", (xPosition-20) + "px")
									.style("top", (yPosition-80) + "px")
									.select("#value")
									.html("PERFORMANCES: " + d["performances"] + "<br/>YEARS: " + d["years on broadway"]);

							d3.select("#tooltip3").classed("hidden", false);
					})
							.on("mouseout", function (d, i) {
								d3.select(this).attr("fill", function (d) {
								if (d["show"]=="Wicked"){return "#b3d646"}
								if (d["show"]=="A Chorus Line"){return "#ed3333"}
								if (d["show"]=="A Little Night Music"){return "#ed556a"}
								if (d["show"]=="An American in Paris"){return "#11659a"}
								if (d["show"]=="Fun Home"){return "#eaad1a"}
								if (d["show"]=="Grand Hotel"){return "#b5aa90"}
								if (d["show"]=="Les Miserables"){return "#1781b5"}
								if (d["show"]=="Matilda"){return "#66a9c9"}
								if (d["show"]=="Nine"){return "#fbeee2"}
								if (d["show"]=="The Life"){return "#f5391c"}
								if (d["show"]=="Natasha, Pierre & The Great Comet of 1812"){return "#ac1f18"}
								if (d["show"]=="The Scottsboro Boys"){return "#cc5595"}
								if (d["show"]=="Mean Girls"){return "#eb507e"}
								if (d["show"]=="SpongeBob SquarePants"){return "#f4ce69"}
								if (d["show"]=="Ain't Too Proud"){return "#ec4e8a"}
								if (d["show"]=="Dreamgirls"){return "#dfc243"}
								if (d["show"]=="The Drowsy Chaperone"){return "#d42517"}
								if (d["show"]=="Hairspray"){return "#5698c3"}
								if (d["show"]=="In the Heights"){return "#f2481b"}
								if (d["show"]=="Kinky Boots"){return "#eb261a"}
								if (d["show"]=="Me and My Girl"){return "#b0d5df"}
								if (d["show"]=="Ragtime"){return "#61649f"}
								if (d["show"]=="Some Like It Hot"){return "#ed2f6a"}
								if (d["show"]=="The Book of Mormon"){return "#f8e0b0"}
								if (d["show"]=="Hadestown"){return "#be7e4a"}
								if (d["show"]=="Company"){return "#813c85"}
								if (d["show"]=="Spamalot"){return "#d6a01d"}
								if (d["show"]=="Kiss Me, Kate"){return "#f97d1c"}
								if (d["show"]=="Jagged Little Pill"){return "#12aa9c"}
								if (d["show"]=="Billy Elliot"){return "#d11a2d"}
								if (d["show"]=="The Producers"){return "#b9dec9"}
								if (d["show"]=="Hamilton"){return "#fbb612"}
								;})
								 .style("filter", "none");
								d3.select("#tooltip3").classed("hidden", true);

							});



        svgZhihan.selectAll(".nominee-circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("class", "nominee-circle")
          .attr("cx", function (d, i) { return xScale1(d["number"]); })
          .attr("cy", h1 / 2 - 18)
          .attr("r", function (d, i) { return r2Scale1(d["nominated"]); })
          .attr("stroke", function (d) {
					if (d["show"]=="Wicked"){return "#b3d646"}
					if (d["show"]=="A Chorus Line"){return "#ed3333"}
					if (d["show"]=="A Little Night Music"){return "#ed556a"}
					if (d["show"]=="An American in Paris"){return "#11659a"}
					if (d["show"]=="Fun Home"){return "#eaad1a"}
					if (d["show"]=="Grand Hotel"){return "#b5aa90"}
					if (d["show"]=="Les Miserables"){return "#1781b5"}
					if (d["show"]=="Matilda"){return "#66a9c9"}
					if (d["show"]=="Nine"){return "#fbeee2"}
					if (d["show"]=="The Life"){return "#f5391c"}
					if (d["show"]=="Natasha, Pierre & The Great Comet of 1812"){return "#ac1f18"}
					if (d["show"]=="The Scottsboro Boys"){return "#cc5595"}
					if (d["show"]=="Mean Girls"){return "#eb507e"}
					if (d["show"]=="SpongeBob SquarePants"){return "#f4ce69"}
					if (d["show"]=="Ain't Too Proud"){return "#ec4e8a"}
					if (d["show"]=="Dreamgirls"){return "#dfc243"}
					if (d["show"]=="The Drowsy Chaperone"){return "#d42517"}
					if (d["show"]=="Hairspray"){return "#5698c3"}
					if (d["show"]=="In the Heights"){return "#f2481b"}
					if (d["show"]=="Kinky Boots"){return "#eb261a"}
					if (d["show"]=="Me and My Girl"){return "#b0d5df"}
					if (d["show"]=="Ragtime"){return "#61649f"}
					if (d["show"]=="Some Like It Hot"){return "#ed2f6a"}
					if (d["show"]=="The Book of Mormon"){return "#f8e0b0"}
					if (d["show"]=="Hadestown"){return "#be7e4a"}
					if (d["show"]=="Company"){return "#813c85"}
					if (d["show"]=="Spamalot"){return "#d6a01d"}
					if (d["show"]=="Kiss Me, Kate"){return "#f97d1c"}
					if (d["show"]=="Jagged Little Pill"){return "#12aa9c"}
					if (d["show"]=="Billy Elliot"){return "#d11a2d"}
					if (d["show"]=="The Producers"){return "#b9dec9"}
					if (d["show"]=="Hamilton"){return "#fbb612"}
					;})
          .attr("fill", "none");



		 	svgZhihan.selectAll(".award-text")
	         .data(data)
	         .enter()
	         .append("text")
					 .attr("class", "award-text")
	        .text(function (d, i) {
	          return d["show"];
	        })
	        .attr("x", function (d) {
	          return xScale1(+d["number"]);
	        })
	        .attr("y", function (d) {
	          return h1 / 2 + r1Scale1(+d["win"]) + r2Scale1(+d["nominated"]);
	        })
	        .attr("font-family", "sans-serif")
	        .attr("font-size", "11px")
	        .attr("text-anchor", "end")
	        .attr("transform", function (d) {
	         return "rotate(-90 " + xScale1(+d["number"]) + "," + (h1 / 2 + r1Scale1(+d["win"]) + r2Scale1(+d["nominated"])) + ")";
	        })
          .attr("fill", function (d) {

					if (d["show"]=="Wicked"){return "#b3d646"}
					if (d["show"]=="A Chorus Line"){return "#ed3333"}
					if (d["show"]=="A Little Night Music"){return "#ed556a"}
					if (d["show"]=="An American in Paris"){return "#11659a"}
					if (d["show"]=="Fun Home"){return "#eaad1a"}
					if (d["show"]=="Grand Hotel"){return "#b5aa90"}
					if (d["show"]=="Les Miserables"){return "#1781b5"}
					if (d["show"]=="Matilda"){return "#66a9c9"}
					if (d["show"]=="Nine"){return "#fbeee2"}
					if (d["show"]=="The Life"){return "#f5391c"}
					if (d["show"]=="Natasha, Pierre & The Great Comet of 1812"){return "#ac1f18"}
					if (d["show"]=="The Scottsboro Boys"){return "#cc5595"}
					if (d["show"]=="Mean Girls"){return "#eb507e"}
					if (d["show"]=="SpongeBob SquarePants"){return "#f4ce69"}
					if (d["show"]=="Ain't Too Proud"){return "#ec4e8a"}
					if (d["show"]=="Dreamgirls"){return "#dfc243"}
					if (d["show"]=="The Drowsy Chaperone"){return "#d42517"}
					if (d["show"]=="Hairspray"){return "#5698c3"}
					if (d["show"]=="In the Heights"){return "#f2481b"}
					if (d["show"]=="Kinky Boots"){return "#eb261a"}
					if (d["show"]=="Me and My Girl"){return "#b0d5df"}
					if (d["show"]=="Ragtime"){return "#61649f"}
					if (d["show"]=="Some Like It Hot"){return "#ed2f6a"}
					if (d["show"]=="The Book of Mormon"){return "#f8e0b0"}
					if (d["show"]=="Hadestown"){return "#be7e4a"}
					if (d["show"]=="Company"){return "#813c85"}
					if (d["show"]=="Spamalot"){return "#d6a01d"}
					if (d["show"]=="Kiss Me, Kate"){return "#f97d1c"}
					if (d["show"]=="Jagged Little Pill"){return "#12aa9c"}
					if (d["show"]=="Billy Elliot"){return "#d11a2d"}
					if (d["show"]=="The Producers"){return "#b9dec9"}
					if (d["show"]=="Hamilton"){return "#fbb612"}
					;});
          });




//CLICK TO SEE THE LONGEST-RUNNING SHOWS
					d3.select("#zhihanClick")
			      .on("click", function (d, i) {
							console.log(d, i);
			        svgZhihan.selectAll(".win-circle")
			          .transition()
			          .duration(1000)
			          .attr("cy", function (d, i) {
			            return yScale1(d["performances"]) + 150;
			          });
							svgZhihan.append("text")
								.attr("x",w1/2)
								.attr("y", h1-padding1-500)
								.attr("font-size", "40px")
								.attr("fill", "rgba(255, 255, 255, 0.15)")
								.text("MORE THAN 1000 PERFORMANCES")
								.style("opacity", 0)
                .transition()
                .duration(1000)
                .style("opacity", 1);


							svgZhihan.append("text")
                .attr("x", w1 / 2)
                .attr("y", h1 - padding1 - 90)
                .attr("font-size", "40px")
                .attr("fill", "rgba(255, 255, 255, 0.15)")
                .text("LESS THAN 1000 PERFORMANCES")
                .style("opacity", 0)
                .transition()
                .duration(1000) 
                .style("opacity", 1);
			      });



//legend
							var circleSize = 8;
							var circleColor = "white";

							svgZhihan.append("circle")
							.attr("cx", padding1)
							.attr("cy", h1-padding1-20)
							.attr("r", circleSize)
							.attr("fill", circleColor);

							var circleSize2 = 14;

							svgZhihan.append("circle")
							.attr("cx", padding1+100)
							.attr("cy", h1-padding1-20)
							.attr("r", circleSize2)
							.attr("stroke", circleColor);

							svgZhihan.append("text")
              .attr("x",padding1+20)
              .attr("y", h1-padding1-15)
              .attr("font-size", "14px")
              .attr("fill", "white")
              .text("AWARDS");

							svgZhihan.append("text")
							.attr("x",padding1+120)
							.attr("y", h1-padding1-15)
							.attr("font-size", "14px")
							.attr("fill", "white")
							.text("NOMINATIONS");