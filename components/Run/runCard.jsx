import { useRouter } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

import { msToTime } from "@/utils/time";

const RunCard = ({ run }) => {
    const router = useRouter();

    const handleClick = (event) => {
        router.push(`/runs/${event.currentTarget.id}/`);
    }

    return (
        <Card asChild style={{width: '30vw'}}>
            <button id={run.id} onClick={handleClick}>
                <Flex direction="column">
                    <Heading>{run.game_name}</Heading>
                    <Text>{run.category_name}</Text>
                    <Text>{msToTime(run.time)}</Text>
                    <Text>By Semirare</Text>
                </Flex>
            </button>
        </Card>
    );
};

export default RunCard;