import React from 'react';

const VideosListItem = ({video, onVideoSelect})=>{
 const imageUrl = video.snippet.thumbnails.default.url;
 const videoTitle = video.snippet.title;
 
    return (
<div>
<li>
    <div onClick={()=>onVideoSelect(video)}>
        <h2>{videoTitle}</h2>
        <img src={imageUrl} alt={videoTitle}/>
    </div>
</li>
</div>
    )
}

export default VideosListItem;
