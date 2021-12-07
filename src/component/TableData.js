import axios from "axios";
import React, { useEffect, useState } from "react";
import "./tab.css";

const TableData = () => {
  const [value, setValue] = useState([]);
  const realTimeData = async () => {
    let response = await axios.get("https://iotforcast.herokuapp.com/getData");
    setValue(response.data.message);
  };
  useEffect(() => {
    realTimeData();
  }, []);
  return (
    <div>
      <h2>Real Time Data - {value.length}</h2>
      <div className="mainDiv">
        {
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>TimeStamp</th>
              </tr>
            </thead>
            <tbody>
              {value.map((curElem, index) => {
                const { Id, Temperature, Humidity, TimeStamp } = curElem;
                return (
                  <tr key={Id}>
                    <td>{index + 1}</td>
                    <td>{Temperature}</td>
                    <td>{Humidity}</td>
                    <td>{TimeStamp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default TableData;
