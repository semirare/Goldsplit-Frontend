import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Grid, Text, Card } from '@radix-ui/themes';

import { msToTime } from '@/utils/time';

const SplitsList = ({ splits }) => {
    return (
        <Accordion.Root
            type='multiple'
            collapsible
        >
            {splits.map(split => (
                <Card variant='classic'>
                    <Accordion.Item value={split.name}>
                        <Accordion.Header>
                            <Accordion.Trigger asChild>    
                                <Grid columns='6'>
                                    <Text className='justify-self-start'>{split.name}</Text>
                                    <Text className='justify-self-center'>{msToTime(split.time)}</Text>
                                    <Text className='justify-self-center'>{msToTime(split.goldTime)}</Text>
                                    <Text className='justify-self-center'>{msToTime(split.averageTime)}</Text>
                                    <Text className='justify-self-end'>{msToTime(split.totalTime)}</Text>
                                    <ChevronDownIcon className='AccordionChevron justify-self-end' aria-hidden />
                                </Grid>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <Grid columns='6'>
                                <Text className='justify-self-start'>Diff</Text>
                                <Text color='tomato' className='justify-self-center col-start-3'>+{msToTime(split.goldTimeDiff)}</Text>
                                {split.averageTimeDiff < 0 ? (
                                    <Text color='green' className='justify-self-center col-start-4'>{msToTime(split.averageTimeDiff)}</Text>
                                ) : (
                                    <Text color='tomato' className='justify-self-center col-start-4'>+{msToTime(split.averageTimeDiff)}</Text>
                                )
                                }
                            </Grid>
                            <Grid columns='6'>
                                <Text className='justify-self-start'>Cumulative Diff</Text>
                                <Text color='tomato' className='justify-self-center col-start-3'>+{msToTime(split.cumulativeGoldTimeDiff)}</Text>
                                {split.cumulativeAverageTimeDiff < 0 ? (
                                    <Text color='green' className='justify-self-center col-start-4'>{msToTime(split.cumulativeAverageTimeDiff)}</Text>
                                ) : (
                                    <Text color='tomato' className='justify-self-center col-start-4'>+{msToTime(split.cumulativeAverageTimeDiff)}</Text>
                                )
                                }
                            </Grid>
                        </Accordion.Content>
                    </Accordion.Item>
                </Card>
            ))}
        </Accordion.Root>
)}

export default SplitsList;