import Run from "@/components/Run/run";
import { testSplits } from "@/testData/testData";

const Runs = () => {
    return (
      <Run gameName={'Super Metroid'} categoryName={'Any%'} totalTime={'59:13.81'} runner={'Semirare'} splits={testSplits}/>
    );
  };
  
export default Runs;