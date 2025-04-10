import './Feature.css';

function Featured() {
  return (
    <div className="featured">
      <h2>Featured Movies</h2>
      <div className="posters">
        <img className="poster" src="endGame.jpg" alt="Movie 1" />
        <img className="poster" src="fatws.jpg" alt="Movie 2" />
        <img className="poster" src="infWar.jpg" alt="Movie 3" />
      </div>
    </div>
  );
}

export default Featured;