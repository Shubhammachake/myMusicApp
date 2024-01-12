import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { trackItem } from "../myReducers";
function TopRated() {
  const apiKey = "3550f81f642ac50d858b9e3cd5fcb92f";
  const [topTracks, setTopTracks] = useState([]);
  const dispatch = useDispatch();

  const handleTrackClick = (item) => {
    dispatch(trackItem(item));
  };

  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.tracks && data.tracks.track) {
          setTopTracks(data.tracks.track);
        } else {
          console.log("No tracks found");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  // console.log("TRACK DATA", topTracks);

  return (
    <div className="lengthy">
      <h1 className="head">Top Rated</h1>
      <div className="grid-container">
        {topTracks.map((track, index) => (
          <div className="grid-item" key={index}>
            <img
              src="https://www.last.fm/static/images/lastfm_logo_facebook.15d8133be114.png"
              alt="Track"
            />
            <br />
            <br />
            <strong>{track.name}</strong>
            <p>by {track.artist.name}</p>

            <a
              href={track.url}
              target="blank"
              className="urllink"
              onClick={() => handleTrackClick(track)}
            >
              Click to play
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRated;
