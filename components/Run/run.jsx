import { Flex, Container, Heading, Section, Card, Grid, Text } from '@radix-ui/themes';

import RunLineChart from '../Charts/RunLineChart/runLineChart';
import Split from '../Split/split';
import { msToTime } from '@/utils/time';
import SplitsList from '../Split/splitsList';

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
        <Container>
            <Flex justify='center' p='2'>
                <Heading>
                    {gameName} {categoryName} in {msToTime(totalTime)} by {runner}
                </Heading>
            </Flex>
            <Section>
                <Card>
                    <Grid columns='5'>
                        <Text>Split Name</Text>
                        <Text>Split Time</Text>
                        <Text>Gold Time</Text>
                        <Text>Average Time</Text>
                        <Text>Run Time</Text>
                    </Grid>
                </Card>
                <SplitsList splits={splits}/>
            </Section>
            <Section>
                <RunLineChart data={formatChartData(splits)}/>
            </Section>
        </Container>
    )
}

export default Run;