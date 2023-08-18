import RunLineChart from '../Charts/RunLineChart/runLineChart';
import Split from '../Split/split';
import { msToTime } from '@/utils/time';

const Run = ({ gameName, categoryName, totalTime, runner, splits = [] }) => {

    const formatChartData = (splits) => {
        const formattedSplits = splits.map((split) => ({name: split.name, 
                                                        totalTime: split.total_time,
                                                        goldTotalTime: split.gold_total_time,
                                                        averageTotalTime: split.average_total_time,
                                                    }));
        return [{name: '', totalTime: 0, goldTotalTime: 0, averageTotalTime: 0}].concat(formattedSplits);
    };

    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='mb-6 text-4xl font-bold text-white p-2'>
                    {`${gameName} ${categoryName} in ${msToTime(totalTime)} by ${runner}`}
                </h1>
            </div>
            <div className='flex flex-col'>
                <div className='grid grid-flow-col p-5 flex-grow-2'>
                    <table className='text-white text-2xl border border-yellow-500'>
                        <thead className='border border-yellow-500'>
                            <Split name={'Name'} time={'Split Time'} totalTime={'Total Time'} goldTime={'Gold Time'} averageTime={'Average Time'}/>
                        </thead>
                        <tbody>
                            {splits.map(split => (
                                <Split
                                    name={split.name}
                                    time={msToTime(split.time)}
                                    totalTime={msToTime(split.total_time)}
                                    goldTime={msToTime(split.gold_time)}
                                    averageTime={msToTime(split.average_time)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='p-5'>
                    <RunLineChart data={formatChartData(splits)}/>
                </div>
            </div>
        </div>
    )
}

export default Run;