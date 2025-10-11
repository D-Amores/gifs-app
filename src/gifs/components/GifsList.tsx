import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock"


interface Props {
  gifs: Gif[];
}

const GifsList: FC<Props> = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {
        gifs.map(gif => (
          <div key={gif.id} className="gifs-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.width} x {gif.height} (1.5mb)</p>
          </div>
        ))
      }
    </div>
  )
}

export default GifsList
