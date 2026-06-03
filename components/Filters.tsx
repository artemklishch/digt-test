import {FC, useReducer} from "react";
import {FiltersActionTypes, filtersReducer, FiltersState, initialFiltersState} from "@/utils/filtersReducer";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeFilter from "@/components/DateRangeFilter";
import UpcomingPastFilter from "@/components/UpcomingPastFilter";
import SuccessFailureFilter from "@/components/SuccessFailureFilter";
import SortByFilter from "@/components/SortByFilter";
import SearchByNameFilter from "@/components/SearchByNameFilter";
import Button from "@/components/ui/Button";

type Props = {
    searchHandler: (filters: FiltersState) => void;
}
const Filters: FC<Props> = ({searchHandler}) => {
    const [state, dispatch] = useReducer(filtersReducer, initialFiltersState);
    const onSearch = () => {
        searchHandler(state)
    }
    const onReset = () => {
        dispatch({type: FiltersActionTypes.RESET})
        searchHandler(initialFiltersState);
    };
    return (
        <div className="px-6 py-2 bg-gray-400 flex flex-col items-center">
            <h3 className="text-center font-bold">Filters</h3>
            <div className="flex gap-2 flex-col md:flex-row md:w-full justify-around">
                <UpcomingPastFilter state={state} dispatch={dispatch}/>
                <SuccessFailureFilter state={state} dispatch={dispatch}/>
                <DateRangeFilter state={state} dispatch={dispatch}/>
            </div>
            <div className="flex gap-2 flex-col md:flex-row md:w-full justify-around">
                <SortByFilter state={state} dispatch={dispatch}/>
                <SearchByNameFilter state={state} dispatch={dispatch}/>
            </div>
            <div className="flex gap-2 flex-col md:flex-row md:w-full justify-around mt-4">
                <Button onClick={onSearch}>Search</Button>
                <Button onClick={onReset}>Reset filters</Button>
            </div>
        </div>
    )
}

export default Filters;