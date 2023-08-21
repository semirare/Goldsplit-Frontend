import * as Accordion from '@radix-ui/react-accordion';
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
                                <Grid columns='5'>
                                        <div>{split.name}</div>
                                        <div>{msToTime(split.time)}</div>
                                        <div>{msToTime(split.gold_time)}</div>
                                        <div>{msToTime(split.average_time)}</div>
                                        <div>{msToTime(split.total_time)}</div>
                                </Grid>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <Grid columns='5' justify='end'>
                                <div>Diff</div>
                                <div></div>
                                <div><Text color='tomato'>+{msToTime(split.time - split.gold_time)}</Text></div>
                                <div>
                                    {split.average_time > split.time ?
                                    <Text color='green'>-{msToTime(split.average_time - split.time)}</Text> :
                                    <Text color='tomato'>+{msToTime(split.time - split.average_time)}</Text> 
                                    }
                                </div>
                                <div></div>
                            </Grid>
                        </Accordion.Content>
                    </Accordion.Item>
                </Card>
            ))}
        </Accordion.Root>
)}

export default SplitsList;