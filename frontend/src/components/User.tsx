import React from 'react';
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

import UserAvatar from "./UserAvatar";
import Posts from './Posts'

const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
       posts {
            id
            title
       }
    }
  } 
`;

const User = ({ user, selectUser }: {
        user: { id: string, email: string, name: string, postCount: number },
        selectUser: any }) => {
    const { loading, error, data } = useQuery(GET_USER, {
       variables: { id: user.id }
    });

    console.log(data)

    // if(loading) return "Loading...";
    // if(error) return `Error ${error.message}`;

    return (
        <>
            <div className="flex flex-wrap my-4">
                <button
                    className="bg-gray-200 hove:bg-gray-499 text-gray-900 font-bold py-2 px-4 rounded"
                    onClick={selectUser.bind(this, null)}
                >
                    Zurück!
                </button>
            </div>

            <div className="flex flex-wrap items-start mb-4">
                <div className="lg:w-1/4 w-full rounded text-center">
                    <UserAvatar user={user}/>
                </div>

                <div className="pox-4 flex-1 w-full">
                    <Posts posts={data.user.posts} user={user}/>
                </div>
            </div>
        </>
    );
};

export default User;