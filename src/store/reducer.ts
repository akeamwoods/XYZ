import { Actions, actions } from "./actions";
import { Reducer } from "redux";
import produce from "immer";
import { getType } from "typesafe-actions";
import { CustomerData, SortMethod } from "./types";
import { parse } from "date-fns";

const initialState = () => ({
  userData: [] as CustomerData[],
  activeSort: undefined as undefined | SortMethod,
  filterQuery: "",
  searchResults: [] as CustomerData[],
  dataLimit: 500,
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(actions.customerDataFetched): {
        draft.userData = action.payload;
        break;
      }
      case getType(actions.filterButtonPressed): {
        const filterType = action.payload;
        switch (filterType) {
          case "dob_descending":
            draft.userData = [
              ...draft.userData.sort(
                (d1, d2) =>
                  parse(d1.date_of_birth, "dd/MM/yyyy", new Date()).getTime() -
                  parse(d2.date_of_birth, "dd/MM/yyyy", new Date()).getTime()
              ),
            ];
            break;
          case "dob_ascending":
            draft.userData = draft.userData.reverse();
            break;
          case "industry_descending":
            draft.userData = [
              ...draft.userData.sort((a, b) => {
                if (!a.industry) return 1;
                else if (!b.industry) return -1;
                else if (a.industry === "n/a") return 1;
                else if (b.industry === "n/a") return -1;
                else return a.industry < b.industry ? 1 : -1;
              }),
            ];
            break;
          case "industry_ascending":
            draft.userData = [
              ...draft.userData.sort((a, b) => {
                if (!a.industry) return 1;
                else if (!b.industry) return -1;
                else if (a.industry === "n/a") return 1;
                else if (b.industry === "n/a") return -1;
                else return b.industry < a.industry ? 1 : -1;
              }),
            ];
            break;

          case "salary_descending":
            draft.userData = [
              ...draft.userData.sort((a, b) =>
                sortSalary(a.salary, b.salary, false)
              ),
            ];

            break;
          case "salary_ascending":
            draft.userData = [
              ...draft.userData.sort((a, b) =>
                sortSalary(a.salary, b.salary, true)
              ),
            ];
            break;
          default:
        }
        draft.activeSort = filterType;
        break;
      }
      case getType(actions.filterInputUpdated): {
        draft.filterQuery = action.payload;
        break;
      }

      case getType(actions.searchTermSelected): {
        draft.filterQuery = `${action.payload.first_name?.toLowerCase()} ${action.payload.last_name?.toLowerCase()}`;
        draft.searchResults = [];
        break;
      }

      case getType(actions.searchQueryModified): {
        // this is where the search suggestions get updated...
        if (draft.filterQuery) {
          draft.searchResults = draft.userData.filter(
            (result) =>
              result.first_name
                ?.toLowerCase()
                .includes(draft.filterQuery.toLowerCase()) ||
              result.last_name
                ?.toLowerCase()
                .includes(draft.filterQuery.toLowerCase()) ||
              (result.first_name &&
                result.last_name &&
                result.first_name
                  .toLowerCase()
                  .concat(result.last_name.toLowerCase())
                  .replace(/\s/g, "")
                  .includes(draft.filterQuery.replace(/\s/g, "").toLowerCase()))
          );
        } else {
          draft.searchResults = [];
        }
        break;
      }

      case getType(actions.autoSuggestCleared): {
        draft.searchResults = [];
        break;
      }

      case getType(actions.dataLimitModified): {
        if (action.payload) {
          draft.dataLimit = action.payload;
        } else {
          draft.dataLimit = 0;
        }
        break;
      }
    }
  });

const sortSalary = (
  firstValue: number | null,
  secondValue: number | null,
  ascending: boolean
): number => {
  if (firstValue === null) {
    return 1;
  } else if (secondValue === null) {
    return -1;
  } else if (firstValue === secondValue) {
    return 0;
  }
  if (ascending) {
    return firstValue < secondValue ? -1 : 1;
  } else if (!ascending) {
    return firstValue < secondValue ? 1 : -1;
  }
  return secondValue - firstValue;
};
