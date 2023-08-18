

const Split = ( {name, time, totalTime, goldTime, averageTime }) => {

    return (
        <tr>
            <td>{name}</td>
            <td>{time}</td>
            <td>{goldTime}</td>
            <td>{averageTime}</td>
            <td>{totalTime}</td>
        </tr>
    )
}

export default Split;