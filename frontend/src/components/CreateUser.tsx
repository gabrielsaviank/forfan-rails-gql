import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_USER = gql`
    mutation CreateUser($name: String!, $email: String!){
        createUser(input: { name: $name, email :$email}){
            user {
                id
                name
                email
                postCount
            }
            errors
        }
    }
`;

const CreateUser = () => {
    const [name, setName ] = useState('')
    const [email, setEmail] = useState('');

    const onSubmit = (e: any, createUser: any) => {
        e.preventDefault();
        createUser({variables: { name, email }})
    }
    return(
        <Mutation
            mutation={CREATE_USER}
            update={onCreateUser}
        >
            {createUserMutation => (
                <div>
                    <form className="lg:px-8 pt-2 pb-2" onSubmit={e => onSubmit(e, createUserMutation)}>
                        <div>
                            <h4>Create New User</h4>
                            <div className="lg:pr-4 mb-2">
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="name"
                                    onChange={e => setName({ name: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="Email"
                                    onChange={e => setName({ email: e.target.value })}
                                />
                            </div>
                            <button type="submit">
                                CreateUser
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </Mutation>
    );
};

export default CreateUser;