import React from "react";
import { useD3 } from "./hook";
import * as d3 from "d3";
import PropTypes from "prop-types";


function SolutionBarChart({ type, data, label }) {
    function getWidth() {
        return d3
            .select(".graph-holder")
            .node()
            .getBoundingClientRect()
            .width;
    }
    //Use D3 Hook
    const ref = useD3(
        (svg) => {
            //Clear all 
            svg.html("");

            //Remove null values
            let filteredData = removeNullData(data);

            //Get the labels and values
            const labels = mapDataToLabels(filteredData);
            const values = mapDataToValues(filteredData);

            //Start drawing
            const height = 200;
            const width = getWidth();
            const margins = {
                top: 20,
                left: 40,
                bottom: 20,
                right: 20
            }
            const color = "#7209b7";

            //Create scale
            const xScale = d3
                .scaleBand()
                .domain(labels)
                .range([0, width - margins.left - margins.right])
                .padding(0.4);

            const yScale = d3
                .scaleLinear()
                .domain([d3.min(values) * 0.9, d3.max(values)])
                .range([height - margins.bottom - margins.top, 0]);

            //Create axes
            const xAxis = d3
                .axisBottom()
                .tickFormat(function(d) {
                    return "";
                })
                .scale(xScale);

            const yAxis = d3
                .axisLeft()
                .scale(yScale)
                .ticks(10);

            //Draw axes
            svg
                .append("g")
                .attr("class", "x-axis")
                .attr("transform", `translate(${margins.left}, ${height - margins.top})`)
                .call(xAxis);

            svg
                .append("g")
                .attr("class", "y-axis")
                .attr("transform", `translate(${margins.left}, ${margins.top})`)
                .call(yAxis);

            //Draw the bars
            svg
                .selectAll(".bar")
                .data(filteredData)
                .enter()
                    .append("g")
                    .append("rect")
                    .attr("x", function(d, i) {
                        return xScale(d.job_name) + margins.left;
                    })
                    .attr("y", function(d, i) {
                        return yScale(d.data) + margins.right;
                    })
                    .attr("width", xScale.bandwidth())
                    .attr("height", function(d, i) {
                        return height - margins.bottom - margins.top - yScale(d.data);
                    })
                    .attr("fill", color);
        },
        [data.length]
    );

    function removeNullData(data) {
        return data.filter(item => item.data !== null);
    }

    function mapDataToLabels(data) {
        return data.map(item => item.job_name);
    }

    function mapDataToValues(data) {
        return data.map(item => item.data);
    }

    return (
        <div 
            className="graph-holder"
            style={{
                width: "100%"
            }}>
            <svg
            ref={ref}
            style={{
                height: 200,
                width: "100%",
                marginRight: "0px",
                marginLeft: "0px"
            }}>
            
            </svg>
        </div>
    )
}

SolutionBarChart.propTypes = {
    data: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired
}

export default SolutionBarChart;