import React from 'react';
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

import UserAvatar from './UserAvatar';
// import CreateUser from './createUser';

const GET_USERS = gql`
 {
    users {
        id
        name
        email
        postCount
    }
 }
`;

const Users = ({ selectUser }: any) => {
    const { loading, error, data } = useQuery(GET_USERS)
    // if (loading) return 'Loading...'
    // if (error) return `Error ${error.message}`;

    return (
        <div className="flex flex-wrap items-center pb-16">
            {data.users.map((user: {
                id: string,
                name:string,
                email: string,
                postCount: number }) => {
                return(
                    <div
                        key={user.id}
                        className="lg:w-1/3 w-full p-4 text-center inline"
                        onClick={selectUser.bind(this, user)}
                        >
                        <UserAvatar user={user}/>
                    </div>
                );
            })}
            <p>users</p>
        </div>
    );
};

export default Users;