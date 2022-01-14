console.log('hi')

// set up our env variables
var margin = { top: 20, bottom: 30, left: 50, right: 20},
    fullWidth = 600,
    fullHeight = 400,
    width = fullWidth - margin.left - margin.right,
    height = fullHeight - margin.top - margin.bottom;

// minified javascript

var color = d3.scaleOrdinal()
    .range(d3.schemePastel1)
    // WE NEED A DOMAIN!!

var x = d3.scaleLinear()
    .range([0, width])

var y = d3.scaleLinear()
    .range([height, 0])

var svg = d3.select('#svg')
    .attr('width',width + margin.left + margin.right)
    .attr('height',height + margin.top + margin.bottom)

var g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

// load the data
    // finish our env var (scales)
    // draw stuff

var parseRows = (d) => {
    console.log(d)
    var keys = Object.keys(d)
    keys.forEach(key => {
        if (!(isNaN(+d[key]))) {
            // it should be a number! so let's convert it...
            d[key] = +d[key]
        }
    })
    console.log(d)
}

var drawChart = (error,data) => {

}

d3.tsv(
    'data.tsv',
    drawChart, // intialization
    parseRows // per-row parsing
)