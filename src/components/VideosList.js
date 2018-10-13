import React from 'react';
import VideosListItem from './VideosListItem'

const VideoList = (props) => {
    return(
        <div>
            <ul>
            {props.videos.map((video)=>{
        return <VideosListItem 
        onVideoSelect={props.onVideoSelect}
        key={ video.etag } 
        video={video}/>    
    })}  
            </ul>
        </div>
    )
}

export default VideoList;