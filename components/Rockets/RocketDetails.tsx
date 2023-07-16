import { RocketProps } from "@/interface/RocketProps";
import SmallSkeleton from "../SmallSkeleton";
interface RocketDetailsProps {
  rocket: RocketProps | undefined;
}

const RocketDetails: React.FC<RocketDetailsProps> = ({ rocket }) => {
  return (
    <div className="justify-center">
      <h1 className="text-4xl font-bold">
        {rocket ? rocket.name : <SmallSkeleton />}
      </h1>
      <div className="flex flex-col gap-y-8 md:flex-wrap md:flex-row md:gap-x-8">
        <div>
          <h2 className="text-2xl font-semibold">Height</h2>
          <p className="text-base font-medium">
            Meters: {rocket ? rocket.height?.meters : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">Feet: {rocket?.height?.feet}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Diameter</h2>
          <p className="text-base font-medium">
            Meters: {rocket ? rocket?.diameter?.meters : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Feet: {rocket ? rocket?.diameter?.feet : <SmallSkeleton />}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Mass</h2>
          <p className="text-base font-medium">
            Kilograms: {rocket ? rocket?.mass?.kg : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Pounds: {rocket ? rocket?.mass?.lb : <SmallSkeleton />}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 md:flex-wrap md:flex-row md:gap-x-8">
        <div>
          <h2 className="text-2xl font-semibold">First Stage</h2>
          <p className="text-base font-medium">
            Thrust Sea Level (kN):{" "}
            {rocket ? (
              rocket?.first_stage?.thrust_sea_level?.kN
            ) : (
              <SmallSkeleton />
            )}
          </p>
          <p className="text-base font-medium">
            Thrust Sea Level (lbf):{" "}
            {rocket ? (
              rocket?.first_stage?.thrust_sea_level?.lbf
            ) : (
              <SmallSkeleton />
            )}
          </p>
          <p className="text-base font-medium">
            Thrust Vacuum (kN):{" "}
            {rocket ? (
              rocket?.first_stage?.thrust_vacuum?.kN
            ) : (
              <SmallSkeleton />
            )}
          </p>
          <p className="text-base font-medium">
            Thrust Vacuum (lbf):{" "}
            {rocket ? (
              rocket?.first_stage?.thrust_vacuum?.lbf
            ) : (
              <SmallSkeleton />
            )}
          </p>
          <p className="text-base font-medium">
            Reusable:{" "}
            {rocket ? (
              rocket?.first_stage?.reusable ? (
                "Yes"
              ) : (
                "No"
              )
            ) : (
              <SmallSkeleton />
            )}
          </p>
          <p className="text-base font-medium">
            Engines: {rocket ? rocket?.first_stage?.engines : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Fuel Amount (tons):{" "}
            {rocket ? rocket?.first_stage?.fuel_amount_tons : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Burn Time (sec):{" "}
            {rocket ? rocket?.first_stage?.burn_time_sec : <SmallSkeleton />}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Second Stage</h2>
          <p className="text-base font-medium">
            Thrust (kN):{" "}
            {rocket ? rocket?.second_stage?.thrust.kN : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Thrust (lbf):{" "}
            {rocket ? rocket?.second_stage?.thrust.lbf : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Reusable:{" "}
            {rocket ? (
              rocket?.second_stage?.reusable ? (
                "Yes"
              ) : (
                "No"
              )
            ) : (
              <SmallSkeleton />
            )}
          </p>
          <p className="text-base font-medium">
            Engines:{" "}
            {rocket ? rocket?.second_stage?.engines : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Fuel Amount (tons):{" "}
            {rocket ? (
              rocket?.second_stage?.fuel_amount_tons
            ) : (
              <SmallSkeleton />
            )}
          </p>
          <p className="text-base font-medium">
            Burn Time (sec):{" "}
            {rocket ? rocket?.second_stage?.burn_time_sec : <SmallSkeleton />}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 md:flex-wrap md:flex-row md:gap-x-8">
        <div>
          <h2 className="text-2xl font-semibold">Engines</h2>
          <p className="text-base font-medium">
            Type: {rocket ? rocket?.engines?.type : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Version: {rocket ? rocket?.engines?.version : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Layout: {rocket ? rocket?.engines?.layout : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Thrust to Weight:{" "}
            {rocket ? rocket?.engines?.thrust_to_weight : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Engine Loss Max:{" "}
            {rocket ? rocket?.engines?.engine_loss_max : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Propellant 1:{" "}
            {rocket ? rocket?.engines?.propellant_1 : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Propellant 2:{" "}
            {rocket ? rocket?.engines?.propellant_2 : <SmallSkeleton />}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Landing Legs</h2>
          <p className="text-base font-medium">
            Number: {rocket ? rocket?.landing_legs?.number : <SmallSkeleton />}
          </p>
          <p className="text-base font-medium">
            Material:{" "}
            {rocket ? (
              rocket?.landing_legs?.material || "N/A"
            ) : (
              <SmallSkeleton />
            )}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Payload Weights</h2>
        {rocket && rocket.payload_weights ? (
          rocket.payload_weights.map((payload) => (
            <div key={payload.id} className="text-base font-medium">
              <p>ID: {payload.id}</p>
              <p>Name: {payload.name}</p>
              <p>Kilograms: {payload.kg}</p>
              <p>Pounds: {payload.lb}</p>
            </div>
          ))
        ) : (
          <SmallSkeleton />
        )}
      </div>

      <div className="mt-8 max-w-[30rem] mb-8">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-base font-medium">
          {rocket ? rocket?.description : <SmallSkeleton />}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Wikipedia</h2>
        <a
          href={rocket ? rocket?.wikipedia : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {rocket ? rocket?.wikipedia : <SmallSkeleton />}
        </a>
      </div>
    </div>
  );
};

export default RocketDetails;
