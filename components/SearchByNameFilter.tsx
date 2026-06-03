import {ActionDispatch, FC} from "react";
import {FiltersAction, FiltersActionTypes, FiltersState, SortBy} from "@/hooks/useFilters";

type Props = {
    state: FiltersState;
    dispatch: ActionDispatch<[action: FiltersAction]>
}
const SortByFilter: FC<Props> = ({state, dispatch}) => {
    const sortByHandle = (value: SortBy) => {
        dispatch({type: FiltersActionTypes.SORT, value})
    }
    return (
        <aside>
            <h4 className="font-semibold">Sort by</h4>
            <section className="flex gap-6">
                <div className="flex gap-2">
                    <label htmlFor="date" className="cursor-pointer">Date</label>
                    <input id="date" type="radio" name="sort-date-name" className="cursor-pointer"
                           checked={state.sortBy === SortBy.date}
                           onChange={() => sortByHandle(SortBy.date)}/>
                </div>
                <div className="flex gap-2">
                    <label htmlFor="name" className="cursor-pointer">Name</label>
                    <input id="name" type="radio" name="sort-date-name" className="cursor-pointer"
                           checked={state.sortBy === SortBy.name}
                           onChange={() => sortByHandle(SortBy.name)}/>
                </div>
            </section>
        </aside>
    );
}

export default SortByFilter;