import {ActionDispatch, FC} from "react";
import {FiltersAction, FiltersActionTypes, FiltersState} from "@/utils/filtersReducer";

type Props = {
    state: FiltersState;
    dispatch: ActionDispatch<[action: FiltersAction]>
}
const SearchByNameFilter: FC<Props> = ({state, dispatch}) => {
    const searchByNameHandle = (value: string) => {
        dispatch({type: FiltersActionTypes.NAME, value})
    }
    return (
        <aside>
            <h4 className="font-semibold">Search by name</h4>
            <section className="flex gap-6">
                <div className="flex gap-2">
                    <label htmlFor="name" className="cursor-pointer">Name</label>
                    <input id="name" type="text" name="search-by-name"
                           className="cursor-pointer border border-solid rounded-sm"
                           value={state.name}
                           onChange={(event) => searchByNameHandle(event.target.value)}/>
                </div>
            </section>
        </aside>
    );
}

export default SearchByNameFilter;