


import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { getData } from "../service/api";



const BarChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(); 
        setData(response); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  return(
<>

{data.length > 0 && (
        <div className="h-[400px] md:h-[500px] mb-40 md:w-3/4 mx-auto border-[2px] border-black mt-10 "
    
        >
          <ResponsiveBar
            data={data}
            keys={['math', 'hindi', 'english', 'science', 'social_studies']}
            indexBy="name"
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            padding={0.5}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{
              scheme: 'nivo',
            }}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) => {
              return `${e.id}: ${e.formattedValue} in student: ${e.indexValue}`;
            }}
          />
          <h1 className="text-center text-3xl md:text-3xl font-bold italic my-2">
            (Marks)
          </h1>
        </div>
      )}
    </>
  );
      }
export default BarChart;