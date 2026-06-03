import LaunchesApi from "@/api/LaunchesApi";
import {LaunchData, LaunchesReq, LaunchesRes} from "@/types/launches";
import {RocketData} from "@/types/rocket";
import {LaunchpadData} from "@/types/launchpad";

class LaunchesService {
    async getLaunches(options: LaunchesReq): Promise<LaunchesRes> {
        try {
            const response = await LaunchesApi.fetchLaunches(options);
            if (!response.ok) {
                throw new Error("Failed fetching launches");
            }
            return await response.json();
        } catch (err: unknown) {
            let error = "Failed fetching launches";
            if (err instanceof Error) {
                error = err.message;
            }
            console.error(error, err);
            throw err;
        }
    }

    async getLaunch(id: string): Promise<LaunchData> {
        try {
            const response = await LaunchesApi.fetchLaunch(id);
            if (!response.ok) {
                throw new Error("Failed fetching launch by ID");
            }
            return await response.json();
        } catch (err: unknown) {
            let error = "Failed fetching launch by ID";
            if (err instanceof Error) {
                error = err.message;
            }
            console.error(error, err);
            throw err;
        }
    }

    async getRocket(id: string): Promise<RocketData> {
        try {
            const response = await LaunchesApi.fetchRocket(id);
            if (!response.ok) {
                throw new Error("Failed fetching rocket by ID");
            }
            return await response.json();
        } catch (err: unknown) {
            let error = "Failed fetching rocket by ID";
            if (err instanceof Error) {
                error = err.message;
            }
            console.error(error, err);
            throw err;
        }
    }

    async getLaunchpad(id: string): Promise<LaunchpadData> {
        try {
            const response = await LaunchesApi.fetchLaunchpad(id);
            if (!response.ok) {
                throw new Error("Failed fetching launchpad by ID");
            }
            return await response.json();
        } catch (err: unknown) {
            let error = "Failed fetching launchpad by ID";
            if (err instanceof Error) {
                error = err.message;
            }
            console.error(error, err);
            throw err;
        }
    }
}

export default new LaunchesService();