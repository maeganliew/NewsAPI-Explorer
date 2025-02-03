import image from "../assets/default.jpg"

export const Newsitem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2 d-inline-block" style={{maxWidth: "345px"}}> 
        <img src={src? src:image} style={{height: "200px", width: "325px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description? description.slice(0,90): "Information about something that has just happened"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
  )
}

/* values for the news are passed in, display different types of data in different sections of cards respectively*/