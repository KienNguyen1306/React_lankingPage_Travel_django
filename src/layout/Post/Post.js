import { useEffect, useState } from 'react';


import './Post.css';
import PostItem from './PostItem';
// import { PostDatas } from '~/datas/datas';

function Post() {
    const [PostDatas,setPostDatas] = useState([])
    useEffect(()=>{
        fetch('/api/postDatas/')
            .then((response) => response.json())
            .then((data) => {
                setPostDatas(data)
            });
    },[])



    return (
        <div className="wrapper">
            <div className="container">
                <div className="post">
                    <h2 className="post_header" data-aos="zoom-in-up">
                        Recent Posts
                    </h2>
                    <div className="post_content">
                        {PostDatas.slice(0, 4).map((data, index) => {
                            return <PostItem key={index} datas={data} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
