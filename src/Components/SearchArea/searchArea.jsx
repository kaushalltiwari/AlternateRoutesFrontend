import './searchArea.css'
import SearchAreaDesktop from '../searchAreaDesktop/searchAreaDesktop.jsx'

function SearchArea() {
    
    // const test = {width: 'auto', height: ''}


    return (
    <div className="container">
        <div className="row">
            <div className="col-12 d-none d-md-block">
                <SearchAreaDesktop></SearchAreaDesktop>
            </div>
            <div className="col-12 d-md-none">
                <p>This content is visible on mobile screens.</p>
            </div>
        </div>
    </div>  
    )
}

  
export default SearchArea
  