import { useState } from 'react';
import { getArtSearch } from '../../service/article'

function InputSearchComponent(props) {
  const [searchInput, setSearchInput] = useState(null)

    const handlerSearchInput = (e) => {
        (e.target && e.target.value) ? setSearchInput(e.target.value) : setSearchInput(null)
    }

    const clickSearchInput = async () => {
        const { data } = await getArtSearch(searchInput)
        props.cbUpdate(data.articles)
    }

    return (
        <div className="input-group search">
            <span className="input-group-text">Enter word to search</span>
            <input type="text" className="form-control" onChange={handlerSearchInput}/>
            <button className="btn btn-outline-secondary" onClick={clickSearchInput} >Search</button>
        </div>)
}

export default InputSearchComponent;
