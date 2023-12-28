import { useSelector } from "react-redux";

function WatchList() {
  const items = useSelector((state) => state.token);
  console.log("myITEMS=>", items.item);

  // Filter out duplicate items based on ID and store unique items

  return (
    <div className="watchHistory">
      <div className="grid-container">
        {items.item.map((items, index) => (
          <div className="grid-item" key={index}>
            <img
              src="https://www.last.fm/static/images/lastfm_logo_facebook.15d8133be114.png"
              alt="Error"
            />
            <p>{items.item.name}</p>
            <p>{items.item.artist.name}</p>
            <a href={items.item.url} target="blank">
              Click to Play
            </a>
            {/* Add other item properties as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
