import { useRouter } from "next/navigation";
import { Card, Flex, Text } from "@radix-ui/themes";

import { msToTime } from "@/utils/time";

const RunCard = ({ run }) => {
    const router = useRouter();

    const handleClick = (event) => {
        router.push(`/runs/${event.currentTarget.id}/`);
    }

    return (
        <Card asChild style={{width: '30vw'}}>
            <button id={run.id} onClick={handleClick}>
                <Flex justify='center'>
                    <Text size='5'>{run.category_name} in {msToTime(run.time)} by Semirare</Text>
                </Flex>
            </button>
        </Card>
    );
};

export default RunCard;