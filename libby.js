//additional references: https://gerardofurtado.com/fbts/fbts.html

var currentScrollTop = d3.select('#currentScrollTop')
var panel = 0    
var mt = window.innerWidth/6
var ml = window.innerHeight/3

//here are all the steps we will trigger, right now they just log out their own names to show it is working
//you will the writing your d3 visualization and animation code here for each step

var publicData;

//set up your svg as normal, using the existing dimensions of the right hand div
var w2 = 1100;
var h2 = 800;
var padding2 = 40;

var svgLibby = d3.select("#chartAnimation").append("svg").attr("width",w2).attr("height",h2)
var xScale2, yScale2; 
var year = 1903;

xScale2 = d3.scaleLinear().domain([1,4]).range([padding2, w2 - padding2]);

yScale2 = d3.scaleLinear().domain([0,14]).range([2*padding2, h2 - padding2]);

Promise.all([d3.csv("broadwayData4.csv")])
    .then(function(data){
        //set the public variable publicData to our dataset that was just loaded, now it is available for any function outside of this promise
        publicData = data[0]//remember that even if we load just 1 dataset this way, it is still in an array of length 1
        drawBarChart()
        step0()
    })

//let's draw a barchart with the first row of data as default
function drawBarChart(){

	var svgLibby = d3.select("#libby")
		.append("svg")
		.attr("width", w2)
		.attr("height", h2);	
		
	  svgLibby.append('text')
		.text(year)
	    .attr('x', 60)
	    .attr('y', 100)  				  
		 .attr("font-family", "sans-serif")
	   .attr("font-size", "40px")
	   .attr("fill", "white");	

svgLibby.selectAll("text.theater")
   .data(publicData)
   .enter()
   .append("text")
   .text(function(d) {return d.Theaters;})
   .attr("x", function(d) {return xScale2(d["x_coord"]);})
   .attr("y", function(d) {return yScale2(d["y_coord"]);})
   .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("fill", "grey")


svgLibby.selectAll("text.show")
   .data(publicData)
   .enter()
   .append("text")
   .text(function(d) {return d[year];})
   .attr("x", function(d) {return xScale2(d["x_coord"]) + 20;})
   .attr("y", function(d) {return yScale2(d["y_coord"]) + 20;})
   .attr("font-family", "sans-serif")
   .attr("font-size", "7px")
   .attr("fill", "white")


}

function updateBarChart(year){

svgLibby.append('rect')
    .attr('x', 40)
    .attr('y', 40)
  	.attr('width', 1500)
    .attr('height', 850)
 	.attr('fill', 'black');

  svgLibby.append('text')
	.text(year)
    .attr('x', 60)
    .attr('y', 100)  				  
	 .attr("font-family", "sans-serif")
   .attr("font-size", "50px")
   .attr("fill", "white");	
	
svgLibby.selectAll("text.theater")
   .data(publicData)
   .enter()
   .append("text")
   .text(function(d) {return d.Theaters;})
   .attr("x", function(d) {return xScale2(d["x_coord"]);})
   .attr("y", function(d) {return yScale2(d["y_coord"]);})
   .attr("font-family", "sans-serif")
   .attr("font-size", "12px")
   .attr("fill", "white")


svgLibby.selectAll("text.show")
   .data(publicData)
   .enter()
   .append("text")
   .text(function(d) {return d[year];})
   .attr("x", function(d) {return xScale2(d["x_coord"]) + 20;})
   .attr("y", function(d) {return yScale2(d["y_coord"]) + 20;})
   .attr("font-family", "sans-serif")
   .attr("font-size", "16px")
   .style("fill",function(d) {
       return "hsl(" + Math.random() * 360 + ",75%,75%)";
       });
	
	
	
}

function step0(){updateBarChart(1904)}
function step1(){updateBarChart(1905)}
function step2(){updateBarChart(1906)}
function step3(){updateBarChart(1907)}
function step4(){updateBarChart(1908)}
function step5(){updateBarChart(1909)}

function step6(){updateBarChart(1910)}
function step7(){updateBarChart(1911)}
function step8(){updateBarChart(1912)}
function step9(){updateBarChart(1913)}
function step10(){updateBarChart(1914)}
function step11(){updateBarChart(1915)}
function step12(){updateBarChart(1916)}
function step13(){updateBarChart(1917)}
function step14(){updateBarChart(1918)}
function step15(){updateBarChart(1919)}

function step16(){updateBarChart(1920)}
function step17(){updateBarChart(1921)}
function step18(){updateBarChart(1922)}
function step19(){updateBarChart(1923)}
function step20(){updateBarChart(1924)}
function step21(){updateBarChart(1925)}
function step22(){updateBarChart(1926)}
function step23(){updateBarChart(1927)}
function step24(){updateBarChart(1928)}
function step25(){updateBarChart(1929)}

function step26(){updateBarChart(1930)}
function step27(){updateBarChart(1931)}
function step28(){updateBarChart(1932)}
function step29(){updateBarChart(1933)}
function step30(){updateBarChart(1934)}
function step31(){updateBarChart(1935)}
function step32(){updateBarChart(1936)}
function step33(){updateBarChart(1937)}
function step34(){updateBarChart(1938)}
function step35(){updateBarChart(1939)}

function step36(){updateBarChart(1940)}
function step37(){updateBarChart(1941)}
function step38(){updateBarChart(1942)}
function step39(){updateBarChart(1943)}
function step40(){updateBarChart(1944)}
function step41(){updateBarChart(1945)}
function step42(){updateBarChart(1946)}
function step43(){updateBarChart(1947)}
function step44(){updateBarChart(1948)}
function step45(){updateBarChart(1949)}

function step46(){updateBarChart(1950)}
function step47(){updateBarChart(1951)}
function step48(){updateBarChart(1952)}
function step49(){updateBarChart(1953)}
function step50(){updateBarChart(1954)}
function step51(){updateBarChart(1955)}
function step52(){updateBarChart(1956)}
function step53(){updateBarChart(1957)}
function step54(){updateBarChart(1958)}
function step55(){updateBarChart(1959)}

function step56(){updateBarChart(1960)}
function step57(){updateBarChart(1961)}
function step58(){updateBarChart(1962)}
function step59(){updateBarChart(1963)}
function step60(){updateBarChart(1964)}
function step61(){updateBarChart(1965)}
function step62(){updateBarChart(1966)}
function step63(){updateBarChart(1967)}
function step64(){updateBarChart(1968)}
function step65(){updateBarChart(1969)}

function step66(){updateBarChart(1970)}
function step67(){updateBarChart(1971)}
function step68(){updateBarChart(1972)}
function step69(){updateBarChart(1973)}
function step70(){updateBarChart(1974)}
function step71(){updateBarChart(1975)}
function step72(){updateBarChart(1976)}
function step73(){updateBarChart(1977)}
function step74(){updateBarChart(1978)}
function step75(){updateBarChart(1979)}

function step76(){updateBarChart(1980)}
function step77(){updateBarChart(1981)}
function step78(){updateBarChart(1982)}
function step79(){updateBarChart(1983)}
function step80(){updateBarChart(1984)}
function step81(){updateBarChart(1985)}
function step82(){updateBarChart(1986)}
function step83(){updateBarChart(1987)}
function step84(){updateBarChart(1988)}
function step85(){updateBarChart(1989)}

function step86(){updateBarChart(1990)}
function step87(){updateBarChart(1991)}
function step88(){updateBarChart(1992)}
function step89(){updateBarChart(1993)}
function step90(){updateBarChart(1994)}
function step91(){updateBarChart(1995)}
function step92(){updateBarChart(1996)}
function step93(){updateBarChart(1997)}
function step94(){updateBarChart(1998)}
function step95(){updateBarChart(1999)}

function step96(){updateBarChart(2000)}
function step97(){updateBarChart(2001)}
function step98(){updateBarChart(2002)}
function step99(){updateBarChart(2003)}
function step100(){updateBarChart(2004)}
function step101(){updateBarChart(2005)}
function step102(){updateBarChart(2006)}
function step103(){updateBarChart(2007)}
function step104(){updateBarChart(2008)}
function step105(){updateBarChart(2009)}

function step106(){updateBarChart(2010)}
function step107(){updateBarChart(2011)}
function step108(){updateBarChart(2012)}
function step109(){updateBarChart(2013)}
function step110(){updateBarChart(2014)}
function step111(){updateBarChart(2015)}
function step112(){updateBarChart(2016)}
function step113(){updateBarChart(2017)}
function step114(){updateBarChart(2018)}
function step115(){updateBarChart(2019)}

function step116(){updateBarChart(2020)}
function step117(){updateBarChart(2021)}
function step118(){updateBarChart(2022)}
function step119(){updateBarChart(2023)}



var scrollTop = 0
var newScrollTop = 0

//here we list all the functions we have above, but just the names without the parenthesis so we don't trigger the functions now
var listOfStepFunctions =[step0,step1,step2,step3,step4,step5,step6,step7, step8, step9, 
						step10, step11, step12, step13, step14, step15, step16, step17, step18, step19, 
						step20, step21, step22, step23, step24, step25, step26, step27, step28, step29,
						step30, step31, step32, step33, step34, step35, step36, step37, step38, step39,
						step40, step41, step42, step43, step44, step45, step46, step47, step48, step49,
						step50, step51, step52, step53, step54, step55, step56, step57, step58, step59,
						step60, step61, step62, step63, step64, step65, step66, step67, step68, step69,
						step70, step71, step72, step73, step74, step75, step76, step77, step78, step79,
						step80, step81, step82, step83, step84, step85, step86, step87, step88, step89,
						step90, step91, step92, step93, step94, step95, step96, step97, step98, step99,
						step100, step101, step102, step103, step104, step105, step106, step107, step108, step109,
						step110, step111, step112, step113, step114, step115, step116, step117, step118, step119]


//whenever the container scrolls, we need to get how far it has scrolled and save it to the variable newScrollTop
d3.select('#container')
.on("scroll.scroller", function() {
    newScrollTop = d3.select('#container').node().scrollTop
});


//the render function ties everything together
function render(){
var panelSize = window.innerHeight - 340//each panel is the size of the window height
    
  if (scrollTop !== newScrollTop) {//if the scroller has moved
      
      if(scrollTop<newScrollTop){//if the new value is smaller, then it is scrolling down
          scrollTop = newScrollTop//set the scroller place to its new placement
          //console.log("down")//if it is going down, we need to add 1 to the panel number because we want to trigger the next panel
          var panelNumber = Math.round(scrollTop/panelSize)+1//therefore which panel we are on is the scroller's place divided by panel height
      }else{
          //console.log("up")
          scrollTop = newScrollTop//set the scroller place to its new placement
          var panelNumber = Math.round(scrollTop/panelSize)//therefore which panel we are on is the scroller's place divided by panel height
      }
      
      if(panel!=panelNumber){//if this panel number has changed
          panel = panelNumber//set the panel number to this new number so we can keep track
          listOfStepFunctions[panel]()//do the function that is associated with that panel number, we add the () to the end of the name to trigger the function
      }
    currentScrollTop.text(scrollTop)
  }
  window.requestAnimationFrame(render)//we continue to call this function recursively because we always need to check where the scroller is
}

window.requestAnimationFrame(render)

