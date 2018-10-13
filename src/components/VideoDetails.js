import React from 'react';

const VideoDetails = ({video}) =>{
    if(!video){
        return <p>Loading....</p>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`
    return(
        <div>
<div>
    <iframe src={url} ></iframe>
</div>

<div>{video.snippet.title}</div>
<div>{video.snippet.description}</div>
        </div>
    )
}

export default VideoDetails;