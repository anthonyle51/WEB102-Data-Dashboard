import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, Label } from "recharts";

const Graphs = ({ data2 }) => {
    // Check if data2 exists and is an array before mapping over it
    const dataWithIndex = data2 && Array.isArray(data2) ? data2.map((item, index) => ({
        ...item,
        index: index + 1 // Adding 1 so the graph starts at 1 instead of 0
    })) : []; // Fallback to an empty array if data2 is not in the expected format

    return (
        <div>
          <LineChart 
            width={1300}
            height={500}
            data={dataWithIndex}
            margin={{top:10, right:30, left:20, bottom:30}}
          >
            <Line 
              type="monotone"
              dataKey="id" // Assuming you want to plot the id on the y-axis
              stroke="#8884d8"
            />
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="index">
              <Label value="Recipe Sequence" offset={-20} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'ID', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
          </LineChart>
          <BarChart
            width={1300}
            height={500}
            data={dataWithIndex}
            margin={{top:10, right:30, left:20, bottom:30}}
            barSize={20}
          >
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="id" fill="#8884d8" />
          </BarChart>
        </div>
    );
};

export default Graphs;
