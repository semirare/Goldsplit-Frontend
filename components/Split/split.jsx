import * as Accordion from '@radix-ui/react-accordion';
import { Grid, Flex } from '@radix-ui/themes'

const Split = ( {name, time, totalTime, goldTime, averageTime }) => {

    return (
        <Accordion.Root
            collapsible
        >
            <Accordion.Item value='split'>
                <Accordion.Trigger>
                    <Grid columns='5'>
                        <div>{name}</div>
                        <div>{time}</div>
                        <div>{goldTime}</div>
                        <div>{averageTime}</div>
                        <div>{totalTime}</div>
                    </Grid>
                </Accordion.Trigger>
                <Accordion.Content>
                    <Grid columns='5'></Grid>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
/*         <tr>
            <td>{name}</td>
            <td>{time}</td>
            <td>{goldTime}</td>
            <td>{averageTime}</td>
            <td>{totalTime}</td>
        </tr> */
    )
}

export default Split;