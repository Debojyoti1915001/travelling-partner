import React from 'react'
import './Feed.css'
import Card from './Card'
import sdata from './sdata.json'


const Feed = ({data}) => {
    //use for loop to loop through all the posts
    return (
        <>
            <div className="main-feed">
                <div className="feed">
                    <div className="feed-top">
                        <img className='fimg' src="./images/feedpic.png" alt="" />
                        <form action="">
                            <input className='ftext' type="text" placeholder='What you would like to share?' />
                        </form>
                    </div>
                    <div className="feed-bottom">
                        <div className="photo">
                            <img src="./images/photo.png" alt="" />
                            <p>Photo</p>
                        </div>
                        <div className="video">
                            <img src="./images/video.png" alt="" />
                            <p>Video</p>
                        </div>
                        <div className="article">
                            <img src="./images/article.png" alt="" />
                            <p>Article</p>
                        </div>
                        <button className='post'>Post</button>
                    </div>
                </div>
                {data.map((post, i) =>
                <Card 
                    imgsrc = {sdata[0].imgsrc}
                    uname = {sdata[0].uname}
                    mainimg = {sdata[0].mainimg}
                    about = {sdata[0].about}
                    intro = {post.desc}
                />
                )}
               
                


            </div>
        </>
    )
}

export default Feed