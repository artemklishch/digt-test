import DatePicker from "react-datepicker";
import {FiltersAction, FiltersActionTypes, FiltersState} from "@/utils/filtersReducer";
import {ActionDispatch, FC} from "react";

type Props = {
    state: FiltersState;
    dispatch: ActionDispatch<[action: FiltersAction]>
}
const DateRangeFilter: FC<Props> = ({state, dispatch}) => {
    const setDate = (
        value: Date | null,
        type: FiltersActionTypes.START_DATE | FiltersActionTypes.END_DATE
    ) => {
        dispatch({type, value})
    }
    return (
        <aside>
            <h4 className="font-semibold">Date range</h4>
            <section className="flex gap-2">
                <DatePicker
                    className="w-25 border solid rounded-sm cursor-pointer"
                    selected={state.startDate}
                    onChange={(value: Date | null) => setDate(value, FiltersActionTypes.START_DATE)}
                    selectsStart
                    startDate={state.startDate}
                    endDate={state.endDate}
                />
                {state.startDate && <DatePicker
                    className="w-25 border solid rounded-sm cursor-pointer"
                    selected={state.endDate}
                    onChange={(value: Date | null) => setDate(value, FiltersActionTypes.END_DATE)}
                    selectsEnd
                    startDate={state.startDate}
                    endDate={state.endDate}
                    minDate={state.startDate as Date}
                />}
            </section>
        </aside>
    )
}

export default DateRangeFilter;