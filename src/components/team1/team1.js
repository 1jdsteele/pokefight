
export default function Team1({nextPoke}) {
    if (!nextPoke) {
        return <h2>No Pokemon Selected</h2>
    } else if (nextPoke === "mistake") {
        return <h2>Sorry, that's not a valid entry</h2>
    }



    return(
        <div className="team1">
            
            <h2>{nextPoke.name}</h2>
            <img src={Object.values(nextPoke.sprites.other)[2].front_default} alt="" />

        </div>
    )
}