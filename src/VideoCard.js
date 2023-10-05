function VideoCard(props) {
    return <div className="video-preview">
        <div className="thumbnail-row">
        <img className="thumbnail" src={props.videoUrl} alt="Video thumbnail"/>
        </div>
        <div className="video-info-grid">
            <div className="channel-picture">
                <img className="profile-picture"   src={ props.videoChannelImg} alt="Video channel image" />
            </div>
            <div className="video-info">
                <p className="video-title"> {props.videoTitle} </p>
                <p className="video-author"> {props.videoChannelName} </p>
            <div className="video-info2">
                <p className="views"> {props.videoViews} views </p>
                <p className="likes"> {props.videoLikes} likes </p>
            </div>
            </div>
        </div>
    </div>

}

export default VideoCard;