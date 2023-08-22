import RunList from "@/components/Run/runList";

const GameDetails = ({ params }) => {
  return (
    <RunList game_id={params.id}/>
  );
};
  
export default GameDetails;