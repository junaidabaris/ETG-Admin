import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { PureComponent } from "react";

function BarchartA() {
  const Count = [{ name: "Field Service", count: "23", amt: "25" }];
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-md-12" style={{ marginTop: "20px" }}>
          {" "}
          <BarChart
            width={1050}
            height={500}
            data={Count}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
export default BarchartA
