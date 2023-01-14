import { useLayoutEffect, useState, useEffect } from 'react';

import Hero from '~/layout/Hero/Hero';

import PostItem from '~/layout/Post/PostItem';
// import { PostDatas } from '~/datas/datas';
import './Blog.css';

function Blog() {
    const [page, setpage] = useState(4);
    const [PostDatas, setPostDatas] = useState([]);

    useEffect(() => {
        fetch('/api/postDatas/')
            .then((response) => response.json())
            .then((data) => {
                setPostDatas(data);
            });
    }, []);

    function handolLoadmore() {
        setTimeout(() => {
            setpage((prev) => {
                return prev + 4;
            });
        }, 500);
    }
    return (
        <>
            <Hero
                title="Blog"
                sub="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                image="https://untree.co/demos/sterial/images/hero_2.jpg"
                className="blog"
            />
            <div className="wrapper">
                <div className="container">
                    <div className="post_content blog">
                        {PostDatas.slice(0, page).map((data, index) => {
                            return <PostItem key={index} datas={data} />;
                        })}
                    </div>
                    {page <= PostDatas.length && (
                        <button onClick={handolLoadmore} className="blog_load_more">
                            Loar More
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Blog;
