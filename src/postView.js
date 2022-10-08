import { useEffect, useState } from "react";

const PostView = () => {

const data = [
    {
        "name":"Siva",
        "location":"Bengaluru",
        "likes":64,
        "description": "Kick start your career",
        "PostImage": "https://images.unsplash.com/photo-1598559069352-3d8437b0d42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vcnRoJTIwY2Fyb2xpbmF8ZW58MHx8MHx8&w=1000&q=80",
        "date": "12/02/2022"
    },
    {
        "name":"Neeraj",
        "location":"Pune",
        "likes":30,
        "description": "Sample Description",
        "PostImage": "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        "date": "15/05/2022"
    },
    {
        "name":"Rahul",
        "location":"Hyderabad",
        "likes":30,
        "description": "Sample Description for Post",
        "PostImage": "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
        "date": "10/06/2022"
    },
    {
        "name":"Neeraj",
        "location":"Pune",
        "likes":30,
        "description": "Sample Description",
        "PostImage": "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
        "date": "15/05/2022"
    }
]

return(
        <>
        <div className="post-container">
                <div className='post-image'>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/245532/155-512.png" alt="avatar" />
                    <span className='post-name'>
                        Instaclone
                    </span>
                </div>
                <div className="cam">
                    <i className="fa fa-camera" id="camera" />
                </div>
            </div>
           {data.map((user, i) => {
            return(
                <div key={i}>          
                    <div className="card-container">
                        <div>
                            <span className="card-name">
                                {user.name}
                            </span>                            
                            <span>
                                <i className="fa fa-ellipsis-h" id="card-more"/>
                            </span>
                        </div>
                       <div>
                        <span className="card-location"> {data[i].location}</span>
                       </div>
                        <img className="card-img" src={data[i].PostImage} alt="avatar" />     
                            <i className="fa fa-heart" id="card-heart"/>
                            <i className="fa fa-paper-plane " id="card-send" />
                            <span id="card-date">{data[i].date}</span>
                            <p id="card-like">{data[i].likes} likes</p>                        
                            <div>
                            <p className="alignleft">{data[i].description}</p>
                            </div>
                    </div>
                </div>
            )
           })}           
        </>
    )
}

export default PostView;