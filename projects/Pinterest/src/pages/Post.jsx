import React, { useState, useEffect, useId } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import confService from "../services/confService.js";
// import authService from '../services/authService.js';
import { Logo } from '../components/index.js';
import { FaRegHeart, FaHeart ,FaRegComment, FaComment, FaUser } from "react-icons/fa";
import { FiSend } from "react-icons/fi";


function Post() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    
    const userId = useSelector((state) => state.auth.userData?.$id);

    const isAuthor = post && userId ? post.userId === userId : false;

    useEffect(() => {

        if (slug) {

            confService.getSinglePost(slug).then((post) => {

                if (post) {

                    setPost(post);
                    setLoading(false);
                }
                else {

                    navigate("/");
                }
            });          
        }
        else {

            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {

        confService.deletePost(post.$id).then((status) => {

            if(status) {

                confService.deleteFile(post.featuredImage);
                navigate("/");
            }
        })
    }

    const [like, setLike] = useState(false);

    
    const handleLike = () => {
        
        setLike(!like);
    }

    const [comment, setComment] = useState(false);

    const handleComment = () => {

        setComment(!comment);
    }


    return (
    <>
        <div className='w-8/12 my-4 m-auto px-6 py-8 bg-zinc-200 bg-opacity-70 rounded-lg'>

            <div className='text-center text-black font-medium text-3xl'>
                <h2>Explore post at Pinterest</h2>
            </div>

            {
                (!loading && post) ? (
                <>
                    <div>
                        <div className='mt-5 w-full h-96 m-auto p-4 border-2 border-red-600 rounded-xl relative z-0'>
                            <img 
                                src={confService.filePreview(post.featuredImage)} 
                                alt={post.title} 
                                className='w-full h-full object-contain  rounded-xl'
                            />

                            {
                                isAuthor && (
                                    <div className='flex items-center gap-4 absolute bottom-2 right-3'>
                                        <Link to={`/edit-post/${post.$id}`}>
                                            <button className='bg-[#E60023] text-white rounded-xl px-4 py-2 hover:bg-[#c2001d]'>Edit</button>
                                        </  Link>

                                        <button  className='bg-[#E60023] text-white rounded-xl px-4 py-2 hover:bg-[#c2001d]' onClick={deletePost}>Delete</button>
                                    </div>
                                )

                            }
                        </div>

                    </div>

                    <div className='mt-6 bg-white px-4 py-4 rounded-xl relative'>
                        <h2 className='text-xl font-extrabold'>{post.title}</h2>
                        <span className='absolute -top-3 right-2 bg-[#E60023] text-white px-2 rounded-full cursor-context-menu' title={`Status: ${post.status}`}>{post.status}</span>
                    </div>

                    <div className='mt-6 bg-white px-4 py-4 rounded-xl'>
                        <h3 className='text-lg font-medium italic'>{post.content}</h3>
                    </div>

                    <div className='mt-6 bg-white px-4 py-4 rounded-xl select-none'>

                        <div className='flex items-center my-2 gap-14'>
                            {/* <FaRegHeart size={"25px"} /> */}
                            <span className='flex items-center gap-2 text-md font-semibold'>

                                <span className='cursor-pointer' onClick={() => handleLike()}>
                                    {
                                        like ? (
                                        <>
                                            <FaHeart color={"#ff2626"} size={"25px"} /> 
                                        </>) : (
                                        <>
                                            <FaRegHeart color={"#ff2626"} size={"25px"} />
                                        </>
                                        )
                                    }
                                </span> 10.24k Likes

                            </span>
                            <span className='flex items-center gap-2 text-md font-semibold'>
                                <span className='cursor-pointer' onClick={() => handleComment()}>

                                    {
                                        comment ? (
                                        <>
                                            <FaComment color={"#ff2626"} size={"23px"} />
                                        </>
                                        ) : (
                                        <>
                                            <FaRegComment color={"#ff2626"} size={"23px"} /> 
                                        </>
                                        )

                                    }

                                </span> 8.02k Comments
                            </span>

                        </div>
                    </div>

                    {
                        (comment) ? (
                            <>
                            <div className='mt-6 bg-white px-4 py-4 rounded-xl'>
                                <div className='h-52 overflow-y-scroll'>
                                <p className='bg-zinc-200 w-full flex items-center gap-4 text-lg p-3 mt-4 rounded-lg'>

                                    <FaUser size={"23px"} />
                                    <span>Add some comment here...</span>

                                </p>
                                
                                <p className='bg-zinc-200 w-full flex items-center gap-4 text-lg p-3 mt-4 rounded-lg'>

                                    <FaUser size={"23px"} />
                                    <span>Add some comment here...</span>
                                </p>
                                <p className='bg-zinc-200 w-full flex items-center gap-4 text-lg p-3 mt-4 rounded-lg'>

                                    <FaUser size={"23px"} />
                                    <span>Add some comment here...</span>
                                </p>
                                
                                </div>

                                <div className='mt-4'>
                                    <form >
                                    <div className='flex items-center gap-4'>
                                    <input 
                                        type="text" 
                                        placeholder="Add a comment on post..." 
                                        className='w-full px-3 py-3 text-lg font-medium outline-none border-2 rounded-xl focus:border-blue-600'
                                    />

                                    <button 
                                        type='submit' 
                                        className='px-4 py-4 bg-[#eb2442] text-white rounded-xl hover:bg-[#ff082d]'
                                    ><FiSend size={"23px"} title='Post Comment...' /></button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            </>
                        ) : (null)
                    }
                </>
                ) : (
                    <div className='flex flex-col items-center justify-center w-full mt-8'>

                        <div className='w-20 h-20 border-2 border-[#df2121] rounded-full animate-spin border-t-transparent'></div>

                        <div className='flex items-center mt-10 bg-zinc-50 rounded-xl px-20 py-2'>
                            <Logo />
                        </div>

                    </div>
                )
            }

        </div>
    </>
    );
}

export default Post;