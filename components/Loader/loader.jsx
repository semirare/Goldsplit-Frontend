import { Flex } from '@radix-ui/themes';

import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Flex justify='center' align='center'>
            <CirclesWithBar
                height="100"
                width="100"
                visible={true}
                outerCircleColor="#FFC53D"
                innerCircleColor="#FFC53D"
                barColor="#FFC53D"
                ariaLabel='circles-with-bar-loading'
            />
        </Flex>
    );
};

export default Loader;