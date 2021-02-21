import React from "react";
import { useDispatch } from "react-redux";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { Input, SuggestionsContainer, Suggestion, Wrapper } from "./style";

export const AutoSuggest: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const searchFilter = useTypedSelector((state) => state.filterQuery);
  const searchResults = useTypedSelector((state) => state.searchResults);
  const ref = React.useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => {
    dispatch(actions.autoSuggestCleared());
  });
  return (
    <Wrapper ref={ref}>
      <Input
        placeholder="Search either first or last name"
        value={searchFilter}
        onChange={(e) => dispatch(actions.filterInputUpdated(e.target.value))}
      ></Input>
      <SuggestionsContainer>
        {searchResults.slice(0, 15).map((s, index) => (
          <Suggestion
            key={index}
            onClick={() => dispatch(actions.searchTermSelected(s))}
          >{`${s.first_name} ${s.last_name}`}</Suggestion>
        ))}
      </SuggestionsContainer>
    </Wrapper>
  );
};
