import Thumbnail from "../Thumbnail/Thumbnail"

const MediaList = ({medialist}) => {

    return (
        <>
            {medialist.map((media)=> {
                return  <Thumbnail media={media} key={media._id}/>
            })}
        </>
    )
}

export default MediaList