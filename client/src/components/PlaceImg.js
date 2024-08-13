const PlaceImg = ({place, index=0}) => {

    if(!place.photos?.length)
    {
        return("");
    }

    return(
            <img className="object-cover" src={"https://airbnb-hd8f.onrender.com/uploads/"+place.photos[index]} alt={place.title}/> 
    );
}

export default PlaceImg;