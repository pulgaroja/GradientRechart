import React from "react";
import PropTypes from "prop-types";
import "../styles.css";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer
} from "recharts";

const GradientChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="purpleLineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#A7A7FF" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#A7A7FF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="blueLineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#54D8FF" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#54D8FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={{ stroke: "#EAF0F4" }}
          tick={{
            color: "#43425D",
            fontFamily: "Source Sans Pro",
            fontSize: 11,
            opacity: 0.5
          }}
          tickLine={false}
        />
        <YAxis
          axisLine={{ stroke: "#EAF0F4" }}
          tick={{
            color: "#43425D",
            fontFamily: "Source Sans Pro",
            fontSize: 11,
            opacity: 0.5
          }}
          tickLine={false}
          tickFormatter={value =>
            `$${
              Math.abs(value) > 999
                ? Math.sign(value) * (Math.abs(value) / 1000).toFixed(1) + "k"
                : Math.sign(value) * Math.abs(value)
            }`
          }
        />
        <CartesianGrid style={{ opacity: 0.3 }} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#54D8FF"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#blueLineGradient)"
          dot={{ stroke: "#54D8FF", strokeWidth: 2, fill: "white" }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#A3A0FB"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#purpleLineGradient)"
          dot={{ stroke: "#A3A0FB", strokeWidth: 2, fill: "white" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

GradientChart.propTypes = {
  data: PropTypes.array
};

export default GradientChart;
