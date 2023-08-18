import RunLineChart from '../Charts/RunLineChart/runLineChart';
import Split from '../Split/split';
import { msToTime } from '@/utils/time';

const Run = ({ gameName, categoryName, totalTime, runner, splits = [] }) => {

    const formatChartData = (splits) => {
        const formattedSplits = splits.map((split) => ({name: split.name, 
                                                        totalTime: split.total_time,
                                                        goldTotalTime: split.gold_total_time}));
        return [{name: '', totalTime: 0, goldTotalTime: 0}].concat(formattedSplits);
    };

    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='mb-6 text-4xl font-bold text-white p-2'>
                    {`${gameName} ${categoryName} in ${totalTime} by ${runner}`}
                </h1>
            </div>
            <div className='flex mb-2'>
                <div className='grid grid-flow-col w-1/3 pl-5 flex-grow-2'>
                    <table className='text-white text-2xl border border-yellow-500'>
                        <thead className='border border-yellow-500'>
                            <Split name={'Name'} time={'Split Time'} totalTime={'Total Time'} goldTime={'Gold Time'}/>
                        </thead>
                        <tbody>
                            {splits.map(split => (
                                <Split
                                    name={split.name}
                                    time={msToTime(split.time)}
                                    totalTime={msToTime(split.total_time)}
                                    goldTime={msToTime(split.gold_time)}/>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='w-2/3 px-10'>
                    <RunLineChart data={formatChartData(splits)}/>
                </div>
            </div>
        </div>
    )
}

export default Run;