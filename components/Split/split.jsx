

const Split = ( {name, time, totalTime, goldTime }) => {

    return (
        <tr>
            <td>{name}</td>
            <td>{time}</td>
            <td>{goldTime}</td>
            <td>{totalTime}</td>
        </tr>
    )
}

export default Split;