import { ActionType, createAction } from "typesafe-actions";
import { CustomerData, SortMethod } from "./types";

const customerDataFetched = createAction("customer data fetched")<
  CustomerData[]
>();
const filterButtonPressed = createAction("sort button pressed")<SortMethod>();
const filterInputUpdated = createAction("filter input updated")<string>();
const searchQueryModified = createAction("search query modified")<string>();
const searchTermSelected = createAction("search term selected")<CustomerData>();
const autoSuggestCleared = createAction("auto suggest cleared")();
const dataLimitModified = createAction("data limit modified")<number>();

export const actions = {
  customerDataFetched,
  filterButtonPressed,
  searchQueryModified,
  filterInputUpdated,
  searchTermSelected,
  dataLimitModified,
  autoSuggestCleared,
};

export type Actions = ActionType<typeof actions>;
