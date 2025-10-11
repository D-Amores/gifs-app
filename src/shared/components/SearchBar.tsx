
interface Props {
  placeholder?: string;
}

const SearchBar = ({ placeholder = 'Buscar...' }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>Buscar</button>
    </div>
  )
}

export default SearchBar
