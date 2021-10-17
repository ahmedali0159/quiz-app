import Video from "./Video";
import { Link } from "react-router-dom";
import UseVideos from "../Hooks/UseVideos";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {
  const { error, loading, videos, hasMore } = UseVideos();
  const [page, setPage] = useState(1);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) => (
            <Link to={{
              pathname: `/quiz/${video.youtubeID}`,
              state: {
                videoTitle: video.title
              },
            }} 
            key={video.youtubeID}>
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            </Link>
          ))}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>no data found</div>}
      {error && videos.length === 0 && <div>There was an error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
