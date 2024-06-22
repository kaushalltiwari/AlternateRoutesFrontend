import './searchArea.css'

function SearchArea() {
    
    // const test = {width: 'auto', height: ''}


    return (
      <div>
        <div className="card ms-5 me-5">
          <div className="card-body">
              This is some text within a card body.
          </div>
        </div>
        <div className="card ms-5 me-5">
          <div className="card-body">             
            <div className="card">
              <div className="card-body">
                <div className="container">
                  <div className="row align-items-end">
                    <div className="col-4 border-end">
                      <div className="dropdown">
                        <div className="d-flex flex-column">
                            <p className="mb-n5">From</p>
                            <h3 className="mt-n5">Delhi</h3>
                            <p>New Dehi Railway Station</p>
                        </div>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                      </div>
                    </div>  
                    <div className="col-4 border-end">
                    <div className="d-flex flex-column">
                          <p>From</p>
                          <h3>Delhi</h3>
                          <p>New Dehi Railway Station</p>
                      </div>
                    </div>
                    <div className="col-2 border-end">
                    <div className="d-flex flex-column">
                          <p>From</p>
                          <h3>Delhi</h3>
                          <p>New Dehi Railway Station</p>
                      </div>
                    </div>
                    <div className="col-2">
                    <div className="d-flex flex-column">
                          <p>From</p>
                          <h3>Delhi</h3>
                          <p>New Dehi Railway Station</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

  
export default SearchArea
  