import { useRouter } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

const GameCard = ({ game }) => {
    const router = useRouter();

    const handleClick = (event) => {
        console.log(event.currentTarget.id);
        router.push(`/games/${event.currentTarget.id}/`);
    }

    return (
        <Card asChild style={{width: '30vw'}}>
            <button id={game.id} onClick={handleClick}>
                <Flex direction="column">
                    <Heading>{game.name}</Heading>
                    <Text>{game.num_runs} Runs</Text>
                </Flex>
            </button>
        </Card>
    );
};

export default GameCard;