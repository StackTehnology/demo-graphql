import { FC } from "react";
import { LaunchListQuery } from "../../generated/graphql";
import "./style.css";

interface LaunchListProps {
  data: LaunchListQuery;
}

const className = "LaunchList";

const LaunchList: FC<LaunchListProps> = ({ data }) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li key={i} className={`${className}__item`}>
                {launch.mission_name} ({launch.launch_year})
              </li>
            )
        )}
    </ol>
  </div>
);

export default LaunchList;