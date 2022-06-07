import React from 'react';

const Posts = ({ posts, user }: { posts: any, user: { id: string,  name: string }}) => {
    return(
        <>
            <div className="lg:pl-10">
                <h1 className="font-bold mb-4"> Posts from {user.name}</h1>
                {posts.map((post: any) => {
                    return (
                        <div key={post.id}>
                            <div className="p-6 shadow mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">{post.title}</h3>
                            </div>
                        </div>
                    )
                })};
            </div>
        </>
    );
};

export default Posts;