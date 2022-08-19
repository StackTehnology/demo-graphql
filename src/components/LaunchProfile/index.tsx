import { FC } from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfle";

interface OwnProps {
  id: number;
}

const LaunchProfileContainer: FC<OwnProps> = ({ id }) => {
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
