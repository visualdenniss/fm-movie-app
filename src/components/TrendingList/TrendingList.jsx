import TrendingThumbnail from "./TrendingThumbnail/TrendingThumbnail"

const TrendingList = ({medialist}) => {

    return (
        <>
            {medialist.map((media)=> {
                return  <TrendingThumbnail media={media} key={media._id}/>
            })}
        </>
    )
}

export default TrendingList