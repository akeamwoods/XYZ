import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ControlMenu } from "../../components/ControlMenu";
import { useTypedSelector } from "../../store";
import { Wrapper } from "./style";

export const GraphsPage = () => {
  const customerData = useTypedSelector((state) => state.userData);
  const searchFilter = useTypedSelector((state) => state.filterQuery);
  const dataLimit = useTypedSelector((state) => state.dataLimit);
  // This below code is messier than I would like it to be. Due to the time constraints of the 'estimated completion time' on the test
  // I will leave it as it is, but in production I would most likely use selectors to control the filtering of the data.
  const filteredList = React.useMemo(
    () =>
      searchFilter === "" // This check returns the two objects with missing firstnames/lastnames as .filter("") removes them
        ? customerData.filter((data, index) =>
            dataLimit ? index < dataLimit : true
          )
        : customerData
            .filter(
              (data) =>
                data?.first_name
                  ?.toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                data?.last_name?.toLowerCase().includes(searchFilter) ||
                (data.first_name &&
                  data.last_name &&
                  data.first_name
                    .toLowerCase()
                    .concat(data.last_name.toLowerCase())
                    .replace(/\s/g, "")
                    .includes(searchFilter.replace(/\s/g, "").toLowerCase()))
            )
            .filter((data, index) => (dataLimit ? index < dataLimit : true)),
    [searchFilter, customerData, dataLimit]
  );
  return (
    <Wrapper>
      <ControlMenu
        totalResults={customerData.length}
        resultsShowing={filteredList.length}
      />
      <h1>Graphs</h1>
      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
        <LineChart width={400} height={400} data={filteredList}>
          <XAxis dataKey="years_of_experience" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey="date_of_birth"
            stroke="#ff7300"
            yAxisId={0}
          />
          <Line dataKey="salary" stroke="#387908" yAxisId={1} />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};
