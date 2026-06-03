import {ActionDispatch, FC} from "react";
import {FiltersAction, FiltersActionTypes, FiltersState, UpcomingPast} from "@/utils/filtersReducer";

type Props = {
    state: FiltersState;
    dispatch: ActionDispatch<[action: FiltersAction]>
}
const UpcomingPastFilter: FC<Props> = ({state, dispatch}) => {
    const upcomingPastHandle = (value: UpcomingPast) => {
        dispatch({type: FiltersActionTypes.UPCOMING_PAST, value})
    }
    return (
        <aside>
            <h4 className="font-semibold">Upcoming/past</h4>
            <section className="flex gap-6">
                <div className="flex gap-2">
                    <label htmlFor="upcoming" className="cursor-pointer">Upcoming</label>
                    <input id="upcoming" type="radio" name="upcoming-past" className="cursor-pointer"
                           checked={state.upcomingPast === UpcomingPast.upcoming}
                           onChange={() => upcomingPastHandle(UpcomingPast.upcoming)}/>
                </div>
                <div className="flex gap-2">
                    <label htmlFor="past" className="cursor-pointer">Past</label>
                    <input id="past" type="radio" name="upcoming-past" className="cursor-pointer"
                           checked={state.upcomingPast === UpcomingPast.past}
                           onChange={() => upcomingPastHandle(UpcomingPast.past)}/>
                </div>
            </section>
        </aside>
    )
}

export default UpcomingPastFilter;