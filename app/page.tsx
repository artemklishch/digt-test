"use client";

import {useMemo, useState} from "react";
import {useLaunches} from "@/hooks/useLaunches";
import Spinner from "@/components/ui/Spinner";
import LaunchItem from "@/components/LaunchItem";
import useVirtualize from "@/hooks/useVirtualize";
import Filters from "@/components/Filters";
import {FiltersState, initialFiltersState} from "@/utils/filtersReducer";
import {useFavorites} from "@/hooks/useFavorites";

export default function Home() {
    const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        error,
    } = useLaunches(filters);

    const launches = useMemo(
        () => data?.pages.flatMap((page) => page.docs) ?? [],
        [data]
    );

    const {rowVirtualizer, parentRef} = useVirtualize(launches, hasNextPage, isFetchingNextPage, fetchNextPage);

    const {favorites, addFavorite, removeFavorite} = useFavorites();
    const favoritesIds = useMemo(() => {
        return new Set(favorites.map(f => f.id));
    }, [favorites])

    if (error) return <div className="text-red-800">Error: {error.message}</div>;

    const searchHandler = (filters: FiltersState) => {
        setFilters(filters)
    };

    return (
        <div className="flex flex-col flex-1 font-sans w-full h-full">
            <Filters searchHandler={searchHandler}/>
            <div
                ref={parentRef}
                className="h-full overflow-auto px-4 md:px-20"
            >
                <div
                    className="relative"
                    style={{height: `${rowVirtualizer.getTotalSize()}px`}}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const launch = launches[virtualRow.index];
                        return (
                            <LaunchItem
                                key={launch.id} launch={launch}
                                style={{transform: `translateY(${virtualRow.start}px)`}}
                                addToFavorite={() => addFavorite(launch)}
                                removeFromFavorite={() => removeFavorite(launch.id)}
                                isFavorite={favoritesIds.has(launch.id)}
                            />
                        );
                    })}
                </div>
                {isLoading &&
                    <div className="flex justify-center items-center py-2 w-full">
                        <Spinner className="w-10 h-10"/>
                    </div>}
            </div>
        </div>
    );
}
