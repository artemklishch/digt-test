import {QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 30,

            retry: (failureCount, error) => {
                if (failureCount >= 3) {
                    return false;
                }

                return true;
            },

            retryDelay: (attempt) =>
                Math.min(1000 * 2 ** attempt, 30000),
        },
    },
});