export enum SortTypeEnum {
    DESC = 'DESC',
    ASC = 'ASC',
}

export enum LaunchStatus {
    ALL = 'ALL',
    FAILED = 'FAILED',
    SUCCESS = 'SUCCESS',
}

export type LaunchesReq = {
    query: Record<string, unknown>
    options: {
        page: number;
        limit: number;
        sort: { date_utc: SortTypeEnum; }
    }
}
export type CoreData = {
    core: string;
    flight: number;
    gridfins: boolean;
    landing_attempt: boolean;
    landing_success: boolean;
    landing_type: string;
    landpad: string;
    legs: boolean;
    reused: boolean;
}
export type CoreDataLinks = {
    article: unknown;
    flickr: { small: unknown[], original: unknown[] }
    patch: { small: string; large: string };
    presskit: unknown;
    reddit: {
        campaign: string | null;
        launch: string | null;
        media: string | null;
        recovery: string | null;
    };
    webcast: string | null;
    wikipedia: string | null;
    youtube_id: string;
}
export type Fairings = {
    recovered: unknown;
    recovery_attempt: unknown;
    reused: unknown;
    ships: unknown[];
};
export type LaunchData = {
    auto_update: boolean;
    capsules: unknown[];
    cores: CoreData[];
    crew: unknown[];
    date_local: string;
    date_precision: string;
    date_unix: number;
    date_utc: string;
    details: string | null;
    failures: unknown[];
    fairings: Fairings;
    flight_number: number;
    id: string;
    launch_library_id: string;
    launchpad: string;
    links: CoreDataLinks;
    name: string;
    net: boolean;
    payloads: string[];
    rocket: string;
    ships: unknown[];
    static_fire_date_unix: unknown | null;
    static_fire_date_utc: unknown | null;
    success: boolean;
    tbd: boolean;
    upcoming: boolean;
    window: unknown | null;
};
export type LaunchesRes = {
    docs: LaunchData[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    pagingCounter: number;
    prevPage: number | null;
    totalDocs: number;
    totalPages: number;
}
