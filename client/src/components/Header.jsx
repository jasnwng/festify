import '../App.css'
import helpers from '../helpers/helpers';
import moment from 'moment';

function Header({ festival, setFestival }) {

  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return moment(date).format('MMM DD')
  }
  
  // reset festival to begin search again
  const resetFestival = () => setFestival('');

  return (
    <div className="header">
      <div className="header-row-1">
        <div onClick={resetFestival} id="header-festify" className="festify-title-container">
          <h1 id="header-festify-text" className="festify-title">F</h1>
        </div>
        <div className="header-festival">
          <h1>{festival.name}</h1>
        </div>
      </div>
      <div className="header-row-2">
        <h3>{formatDate(festival.startDate)} {festival.startDate === festival.endDate ? '' : `- ${formatDate(festival.endDate)}`} </h3>
      </div>
    </div>
  )
}

export default Header
