import React, { Component, useState } from 'react';
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

class CreateUser extends Component<any, any> {
    state = {
        name: '',
        email: ''
    }

    onSubmit = (e: any, createUser: any) => {
        e.preventDefault();
        createUser({ variables: this.state });
        this.setState({ name: '', email: '' })
    }

    render() {
        return (
            <Mutation
                mutation={CREATE_USER}
                update={this.props.onCreateUser}
            >
                {(createUserMutation: any) => (
                    <div>
                        <form className="lg:px-8 pt-2 pb-2" onSubmit={e => this.onSubmit(e, createUserMutation)}>
                            <div>
                                <h4>Create New User</h4>
                                <div className="lg:pr-4 mb-2">
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        placeholder="Name"
                                        onChange={e => this.setState({ name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        placeholder="Email"
                                        onChange={e => this.setState({ email: e.target.value })}
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
        )
    }
}

export default CreateUser;

// const CreateUser = () => {
//     const [name, setName ] = useState('')
//     const [email, setEmail] = useState('');
//
//     const onSubmit = (e: any, createUser: any) => {
//         e.preventDefault();
//         createUser({variables: { name, email }})
//         setName('');
//         setEmail('');
//     };
//
//     return(
//         <Mutation
//             mutation={CREATE_USER}
//             update={CreateUser}
//         >
//             {(createUserMutation: any) => (
//                 <div>
//                     <form className="lg:px-8 pt-2 pb-2" onSubmit={e => onSubmit(e, createUserMutation)}>
//                         <div>
//                             <h4>Create New User</h4>
//                             <div className="lg:pr-4 mb-2">
//                                 <input
//                                     type="text"
//                                     value={name}
//                                     placeholder="Name"
//                                     onChange={e => setName({ name: e.target.value })}
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={name}
//                                     placeholder="Email"
//                                     onChange={e => setEmail({ email: e.target.value })}
//                                 />
//                             </div>
//                             <button type="submit">
//                                 CreateUser
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}
//         </Mutation>
//     );
// };
//
// export default CreateUser;