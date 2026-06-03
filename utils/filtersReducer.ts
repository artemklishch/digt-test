export enum UpcomingPast {
    upcoming,
    past,
}

export enum SortBy {
    date,
    name
}

export type FiltersState = {
    upcomingPast: UpcomingPast;
    success: boolean;
    startDate: Date | null;
    endDate: Date | null;
    sortBy: SortBy;
    name: string;
}

export enum FiltersActionTypes {
    UPCOMING_PAST,
    SUCCESS,
    START_DATE,
    END_DATE,
    SORT,
    NAME,
    RESET
}

export type FiltersAction =
    | {
    type: FiltersActionTypes.UPCOMING_PAST;
    value: UpcomingPast;
}
    | {
    type: FiltersActionTypes.SUCCESS;
    value: boolean;
}
    | {
    type: FiltersActionTypes.START_DATE;
    value: Date | null;
}
    | {
    type: FiltersActionTypes.END_DATE;
    value: Date | null;
}
    | {
    type: FiltersActionTypes.SORT;
    value: SortBy;
}
    | {
    type: FiltersActionTypes.NAME;
    value: string;
}
    | {
    type: FiltersActionTypes.RESET;
};

export const initialFiltersState: FiltersState = {
    upcomingPast: UpcomingPast.past,
    success: true,
    startDate: null,
    endDate: null,
    sortBy: SortBy.date,
    name: ""
}

export const filtersReducer = (
    state: FiltersState, action: FiltersAction
) => {
    switch (action.type) {
        case FiltersActionTypes.UPCOMING_PAST: {
            return {
                ...state,
                upcomingPast: action.value
            }
        }
        case FiltersActionTypes.SUCCESS: {
            return {
                ...state,
                success: action.value
            }
        }
        case FiltersActionTypes.START_DATE: {
            return {
                ...state,
                startDate: action.value
            }
        }
        case FiltersActionTypes.END_DATE: {
            return {
                ...state,
                endDate: action.value
            }
        }
        case FiltersActionTypes.SORT: {
            return {
                ...state,
                sortBy: action.value
            }
        }
        case FiltersActionTypes.NAME: {
            return {
                ...state,
                name: action.value
            }
        }
        case FiltersActionTypes.RESET: {
            return {...initialFiltersState};
        }
        default: {
            return state;
        }
    }
}
