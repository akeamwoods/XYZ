import React from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { SortMethod } from "../../store/types";
import { Button } from "./style";

export const FilterButton: React.FC<{
  label: string;
  currentSort: SortMethod | undefined;
  descendingSort: SortMethod;
  ascendingSort: SortMethod;
}> = ({ label, currentSort, descendingSort, ascendingSort }) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() =>
        dispatch(
          currentSort === descendingSort
            ? actions.filterButtonPressed(ascendingSort)
            : actions.filterButtonPressed(descendingSort)
        )
      }
    >
      {label}
      {currentSort === descendingSort ? (
        <FaSortDown />
      ) : currentSort === ascendingSort ? (
        <FaSortUp />
      ) : null}
    </Button>
  );
};
