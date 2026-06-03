import {useEffect, useRef, RefObject} from "react";
import {ReactVirtualizer, useVirtualizer} from "@tanstack/react-virtual";
import {LaunchData, LaunchesRes} from "@/types/launches";
import {FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult} from "@tanstack/query-core";

export type UseVirtualize = (
    launches: LaunchData[],
    hasNextPage: boolean,
    isFetchingNextPage: boolean,
    fetchNextPage?: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<InfiniteData<LaunchesRes, unknown>, Error>>
) => { rowVirtualizer: ReactVirtualizer<HTMLDivElement, Element>, parentRef: RefObject<HTMLDivElement | null> };
const useVirtualize: UseVirtualize = (launches, hasNextPage, isFetchingNextPage, fetchNextPage) => {
    const parentRef = useRef<HTMLDivElement | null>(null);

    const rowVirtualizer = useVirtualizer({
        count: launches.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 72,
        overscan: 10,
    });
    const virtualItems = rowVirtualizer.getVirtualItems();

    useEffect(() => {
        const lastItem = virtualItems[virtualItems.length - 1];

        if (!lastItem) return;

        if (
            lastItem.index >= launches.length - 5 &&
            hasNextPage &&
            !isFetchingNextPage &&
            fetchNextPage
        ) {
            fetchNextPage();
        }
    }, [
        virtualItems,
        launches.length,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    ]);

    return {rowVirtualizer, parentRef}
}
export default useVirtualize;