import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { AutoSuggest } from "../AutoSuggest";
import { FilterButton } from "../FilterButton";
import { MaxResults, Wrapper } from "./style";

export const ControlMenu: React.FC<{
  totalResults: number;
  resultsShowing: number;
}> = ({ totalResults, resultsShowing }) => {
  const activeSort = useTypedSelector((state) => state.activeSort);
  const dataLimit = useTypedSelector((state) => state.dataLimit);
  const dispatch = useDispatch();
  return (
    <span>
      <Wrapper>
        <h4>Filter:</h4>
        <AutoSuggest />
        <h4>Sort by:</h4>
        <FilterButton
          label="Date of Birth"
          currentSort={activeSort}
          ascendingSort="dob_ascending"
          descendingSort="dob_descending"
        />
        <FilterButton
          label="Industry"
          currentSort={activeSort}
          ascendingSort="industry_ascending"
          descendingSort="industry_descending"
        />
        <FilterButton
          label="Salary"
          currentSort={activeSort}
          ascendingSort="salary_ascending"
          descendingSort="salary_descending"
        />
        <h4>Maximum Results:</h4>
        <MaxResults
          type="number"
          value={dataLimit}
          min={0}
          onChange={(e) =>
            dispatch(actions.dataLimitModified(parseInt(e.target.value)))
          }
        />
      </Wrapper>
      <p>{`${totalResults} results found, showing ${resultsShowing}`}</p>
    </span>
  );
};
