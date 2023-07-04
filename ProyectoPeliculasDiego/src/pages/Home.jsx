import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Home.css" 

const Home = () => {
const [series, setSeries] = useState([])
const [searchTerm, setSearchTerm] = useState('')


useEffect(() => {
  fetch ('https://api.tvmaze.com/shows')
  .then(response => response.json())
  .then(data => setSeries(data))
  .catch(error => console.log(error))

}, [])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredSeries = series.filter(serie => {
    return serie.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
    
  const topSeries = series.sort((s1,s2) => 
    (s1.rating.average) < (s2.rating.average) ? 1 : (s1.rating.average) > (s2.rating.average) ? -1 : 0)
    console.log(topSeries.slice(0,10))

  const muestrarioSeries = series.sort((id1, id2) =>
    (id1.id) > (id2.id) ? 1 : (id1.id) < (id2.id) ? -1 : 0)

  return (
    <>
    <div>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div>
      <div className="carousel-item active">
        <img src={topSeries.image?.orginal[0]} className="d-block w-50" />
      </div>
      {/* <div className="carousel-item active">
        <img src={topSeries.image?.original[1]} className="d-block w-25" />
      </div> */}
    </div>
  </div> 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    <div className='container'>
      <h1>Series</h1>

    <form className='form-inline my-2 my-lg-0 w-75'>
        <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleInputChange} />
    </form>
        <div className='row'>
        {filteredSeries.map(serie => (
        <div className='col-sm-4 mb-4' key={serie.id}>
            <div className='card'>
                <img className='card-img-top' src={serie.image?.original} alt={serie.id} />
                <div className='card-body'>
                  <h3 className='card-title'>{serie?.rating.average}</h3>
                <Link to={`/show/${serie.url.split('/')[4]}`}>
                    <h4 className='card-title'>{serie?.name}</h4>
                </Link>
            </div>
            </div>
        </div>
        ))}
        </div>
    </div>
  </>
  )
}

export default Home