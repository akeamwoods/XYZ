import React from "react";
import { ControlMenu } from "../../components/ControlMenu";
import { Table } from "../../components/Table";
import { useTypedSelector } from "../../store";
import { Wrapper } from "./style";

export const TablePage: React.FC<{}> = () => {
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
      <h1>Customer Information</h1>
      <ControlMenu
        totalResults={customerData.length}
        resultsShowing={filteredList.length}
      />
      <Table list={filteredList} />
    </Wrapper>
  );
};
