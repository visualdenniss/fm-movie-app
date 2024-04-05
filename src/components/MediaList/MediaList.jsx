import Thumbnail from "../Thumbnail/Thumbnail"

const MediaList = ({medialist}) => {

    return (
        <>
            {medialist.map((media)=> {
                return  <Thumbnail media={media}/>
            })}
        </>
    )
}

export default MediaList