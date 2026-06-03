import {API_ENDPOINTS, BASE_URL, COMMON_HEADERS} from "@/utils/constants";
import {LaunchesReq} from "@/types/launches";

class LaunchesApi {
    fetchLaunches(options: LaunchesReq): Promise<Response> {
        return fetch(
            `${BASE_URL}${API_ENDPOINTS.launchesQuery}`,
            {
                method: "POST",
                headers: COMMON_HEADERS,
                body: JSON.stringify(options),
            }
        );
    }

    fetchLaunch(id: string): Promise<Response> {
        return fetch(`${BASE_URL}${API_ENDPOINTS.launches}/${id}`)
    }

    fetchRocket(id: string): Promise<Response> {
        return fetch(`${BASE_URL}${API_ENDPOINTS.rockets}/${id}`)
    }

    fetchLaunchpad(id: string): Promise<Response> {
        return fetch(`${BASE_URL}${API_ENDPOINTS.launchpads}/${id}`)
    }
}

export default new LaunchesApi();