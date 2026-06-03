import {ActionDispatch, FC} from "react";
import {FiltersAction, FiltersActionTypes, FiltersState} from "@/utils/filtersReducer";

type Props = {
    state: FiltersState;
    dispatch: ActionDispatch<[action: FiltersAction]>
}
const SuccessFailureFilter: FC<Props> = ({state, dispatch}) => {
    const successFailureHandle = (value: boolean) => {
        dispatch({type: FiltersActionTypes.SUCCESS, value})
    }
    return (
        <aside>
            <h4 className="font-semibold">Success/failure</h4>
            <section className="flex gap-6">
                <div className="flex gap-2">
                    <label htmlFor="success" className="cursor-pointer">Success</label>
                    <input id="success" type="radio" name="success-failure" className="cursor-pointer"
                           checked={state.success}
                           onChange={() => successFailureHandle(true)}/>
                </div>
                <div className="flex gap-2">
                    <label htmlFor="failure" className="cursor-pointer">Failure</label>
                    <input id="failure" type="radio" name="success-failure" className="cursor-pointer"
                           checked={!state.success}
                           onChange={() => successFailureHandle(false)}/>
                </div>
            </section>
        </aside>
    )
}

export default SuccessFailureFilter;