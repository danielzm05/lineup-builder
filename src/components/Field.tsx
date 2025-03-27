import { Player } from "./Player"
import "../styles/field.css"

interface FieldProps {
  teamName: string, 
  formation: string, 
  gridArea: string, 
  fieldStyle: string, 
  jerseyColor:string,
  rotate: boolean
}

export const Field:React.FC<FieldProps> = ({teamName, formation, gridArea, fieldStyle, jerseyColor, rotate}) => {
  return(
    <section className="field-container ">
    <header>
      <p>{teamName}</p>
      <p>{formation}</p>
    </header>
    <div
      className={`field ${rotate && "rotate"}`}
      style={{ gridTemplateAreas: gridArea, backgroundImage: fieldStyle }}
    >
      <Player number={1} name={"Player 1"} jerseyColor={jerseyColor}/>
      <Player number={2} name={"Player 2"} jerseyColor={jerseyColor} />
      <Player number={3} name={"Player 3"} jerseyColor={jerseyColor}/>
      <Player number={4} name={"Player 4"} jerseyColor={jerseyColor}/>
      <Player number={5} name={"Player 5"} jerseyColor={jerseyColor}/>
      <Player number={6} name={"Player 6"} jerseyColor={jerseyColor}/>
      <Player number={7} name={"Player 7"} jerseyColor={jerseyColor}/>
      <Player number={8} name={"Player 8"} jerseyColor={jerseyColor}/>
      <Player number={9} name={"Player 9"} jerseyColor={jerseyColor}/>
      <Player number={10} name={"Player 10"} jerseyColor={jerseyColor}/>
      <Player number={11} name={"Player 11"} jerseyColor={jerseyColor}/>
      <div className="area">
        <div className="area-2"></div>
      </div>
    </div>
  </section>
  )
}