import LaunchesService from "@/services/LaunchesService";
import {FC} from "react";
import {formatDate} from "@/utils/time";
import Image from "next/image";

type Props = {
    params: Promise<{ id: string }>
}

const LaunchDetailsPage: FC<Props> = async ({params}) => {
    const {id} = await params;
    const launch = await LaunchesService.getLaunch(id);
    const [rocket, launchpad] = await Promise.all([LaunchesService.getRocket(launch.rocket), LaunchesService.getLaunchpad(launch.launchpad)]);
    return (
        <div className="flex-1 w-full px-10 py-5 overflow-auto">
            <h1 className="text-lg font-semibold text-center py-10">Launch: {launch.name}</h1>
            <p>Company: {rocket.company}</p>
            <p>Country: {rocket.country}</p>
            <p>Launch date: {formatDate(launch.date_utc)}</p>
            <p>Success status: {launch.success ? "success" : "failure"}</p>
            <p>Details: {launch.details ?? "-"}</p>
            <section className="my-6">
                <h3 className="font-semibold text-md">Links:</h3>
                <ul className="ml-4">
                    {launch.links.webcast &&
                        <li><a href={launch.links.webcast} className="text-blue-500 underline">Webcast</a></li>}
                    {launch.links.wikipedia &&
                        <li><a href={launch.links.wikipedia} className="text-blue-500 underline">Wikipedia</a></li>}
                    {launch.links.reddit.launch &&
                        <li><a href={launch.links.reddit.launch} className="text-blue-500 underline">Reddit</a></li>}
                </ul>
            </section>
            <section className="my-6">
                <h3 className="font-semibold text-md my-2">Rocket data: {rocket.name}</h3>
                <p className="my-1">Height: {rocket.height.meters} meters</p>
                <p className="my-1">Diameter: {rocket.diameter.meters} meters</p>
                <p className="my-1">Mass: {rocket.mass.kg} kilos</p>
                <p className="my-1">Stages number: {rocket.stages}</p>
                <p className="my-1">Engines number: {rocket.engines.number}</p>
                <p className="my-1">Landing legs number: {rocket.landing_legs.number}</p>
                <p className="my-1">
                    Payload weights: {rocket.payload_weights.map((payload, index) =>
                    <span key={index}>
                        {payload.name}, {payload.kg}kg{index + 1 < rocket.payload_weights.length && "; "}
                    </span>)}
                </p>
                <p className="my-1">First flight: {formatDate(rocket.first_flight)}</p>
                <p className="my-1">Is active: {rocket.active ? "yes" : "no"}</p>
                <div className="my-1">
                    <h6>Description</h6>
                    <p>{rocket.description}</p>
                </div>
                <div className="flex flex-wrap my-1">
                    {rocket.flickr_images.map((img, i) =>
                        <Image key={i} src={img} alt="rocket" width={400} height={400}/>)}
                </div>
            </section>
            <section className="my-6">
                <h3 className="font-semibold text-md my-2">Launchpad data:</h3>
                <p className="my-1">Name: {launchpad.full_name}({launchpad.name})</p>
                <p className="my-1">Locality: {launchpad.locality}, {launchpad.region}</p>
                <p className="my-1">Status: {launchpad.status}</p>
                <div className="my-1">
                    <h6>Details</h6>
                    <p>{launch.details}</p>
                </div>
            </section>
        </div>
    );
}

export default LaunchDetailsPage;