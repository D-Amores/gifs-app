import { useState } from "react"
import GifsList from "./gifs/components/GifsList"
import PreviousSearches from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log(term);
  }

  const handleSearch = (query: string) => {
    console.log({query});
  }

  return (
    <>

      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gifs perfecto"
      />

      <SearchBar
        placeholder="Buscar gifs..."
        onQuery={handleSearch}
      />

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <GifsList gifs={mockGifs} />
    </>
  )
}

