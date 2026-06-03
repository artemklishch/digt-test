import {useInfiniteQuery} from "@tanstack/react-query";
import {SortTypeEnum} from "@/types/launches";
import LaunchesService from "@/services/LaunchesService"
import {ITEMS_PER_PAGE} from "@/utils/constants";
import {FiltersState, UpcomingPast} from "@/utils/filtersReducer";

const buildQuery = (filters: FiltersState): Record<string, unknown> => {
    const query: Record<string, unknown> = {};

    query.success = filters.success;

    query.upcoming =
        filters.upcomingPast === UpcomingPast.upcoming;

    if (filters.name) {
        query.name = {
            $regex: filters.name,
            $options: "i",
        };
    }

    if (filters.startDate || filters.endDate) {
        query.date_utc = {
            ...(filters.startDate && {
                $gte: filters.startDate.toISOString(),
            }),
            ...(filters.endDate && {
                $lte: filters.endDate.toISOString(),
            }),
        };
    }

    return query;
};
export const useLaunches = (filters: FiltersState) =>
    useInfiniteQuery({
        queryKey: ["launches", filters],

        initialPageParam: 1,

        queryFn: ({pageParam}) =>
            LaunchesService.getLaunches({
                query: buildQuery(filters),
                options: {
                    page: pageParam,
                    limit: ITEMS_PER_PAGE,
                    sort: {
                        date_utc: SortTypeEnum.DESC,
                    },
                },
            }),

        getNextPageParam: (lastPage) =>
            lastPage.hasNextPage
                ? lastPage.nextPage
                : undefined,
    });
