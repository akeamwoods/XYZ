import React from "react";
import {
  Column,
  Table as VirtualizedTable,
  AutoSizer,
} from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import { CustomerData } from "../../store/types";
import { Wrapper } from "./style";

export const Table: React.FC<{ list: CustomerData[] }> = ({ list }) => {
  const headers = Object.keys(Object.assign({}, ...list)); // dynamically populate column headers from the data itself
  return (
    <Wrapper>
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedTable
            width={width}
            height={height}
            headerHeight={30}
            rowHeight={25}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            {headers.map((header, index) => (
              <Column
                key={header}
                width={index === 0 ? 300 : index === 5 ? 3000 : width}
                label={header}
                dataKey={header}
              />
            ))}
          </VirtualizedTable>
        )}
      </AutoSizer>
    </Wrapper>
  );
};
