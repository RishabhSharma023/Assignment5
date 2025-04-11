import './Feature.css';

function Featured() {
    return (
        <div className="featured">
            <h2>Other Shows and Movies You May Like:</h2>
            <div className="posters">
                <img class="poster" src="infWar.jpg" alt="" />
                <img class="poster" src="endGame.jpg" alt="" />
                <img class="poster" src="fatws.jpg" alt="" />
            </div>
        </div>
    );
}

export default Featured;