import { Flex, Container, Heading, Section, Card, Grid, Text } from '@radix-ui/themes';
import { useState, useEffect } from 'react';

import RunLineChart from '../Charts/RunLineChart/runLineChart';
import SplitsList from '../Split/splitsList';
import { msToTime } from '@/utils/time';
import RunDiffChart from '../Charts/RunDiffChart/runDiffChart';

const Run = ({ gameName, categoryName, totalTime, runner, splits = [] }) => {
    const [splitData, setSplitData] = useState([]);

    useEffect(() => {
        let prevGoldDiff = 0;
        let prevAverageDiff = 0;
        let formattedSplits = []

        splits.forEach((split) => {
            const newGoldDiff = split.time - split.gold_time;
            const newCumulativeGoldDiff = prevGoldDiff + newGoldDiff;

            const newAverageDiff = split.time - split.average_time;
            const newCumulativeAverageDiff = prevAverageDiff + newAverageDiff;
            
            prevGoldDiff = newCumulativeGoldDiff;
            prevAverageDiff = newCumulativeAverageDiff;

            formattedSplits.push({
                name: split.name,
                time: split.time,
                goldTime: split.gold_time,
                averageTime: split.average_time,
                totalTime: split.total_time,
                goldTotalTime: split.gold_total_time,
                averageTotalTime: split.average_total_time,
                goldTimeDiff: newGoldDiff,
                averageTimeDiff: newAverageDiff,
                cumulativeGoldTimeDiff: newCumulativeGoldDiff,
                cumulativeAverageTimeDiff: newCumulativeAverageDiff,
            });
        });

        setSplitData(formattedSplits);
    }, []);

    //add a first data point for chart with 0 values so all lines start from 0
    const chartData = [{name: '', time: 0, totalTime: 0, goldTotalTime: 0, averageTotalTime: 0, cumulativeGoldTimeDiff: 0, cumulativeAverageTimeDiff: 0}].concat(splitData);

    return (
        <Container>
            <Flex justify='center' p='2'>
                <Heading>
                    {gameName} {categoryName} in {msToTime(totalTime)} by {runner}
                </Heading>
            </Flex>
            <Section>
                <Card>
                    <Grid columns='6'>
                        <Text className='justify-self-start'>Split Name</Text>
                        <Text className='justify-self-center'>Split Time</Text>
                        <Text className='justify-self-center'>Gold Time</Text>
                        <Text className='justify-self-center'>Average Time</Text>
                        <Text className='justify-self-end'>Run Time</Text>
                    </Grid>
                </Card>
                <SplitsList splits={splitData}/>
            </Section>
            <Section>
                <RunLineChart data={chartData}/>
                <RunDiffChart data={chartData}/>
            </Section>
        </Container>
    )
}

export default Run;