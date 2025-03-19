const Saints = ({saints}) => {
    return (
        <>
            <h1>Saints</h1>
            {saints.map((saint) => (<p key={saint.id}>{saint.name}</p>))}
        </>
    )
}
export default Saints;