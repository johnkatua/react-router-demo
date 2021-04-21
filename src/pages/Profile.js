import React from 'react';
import { useParams } from 'react-router-dom';
import withAuth from '../components/withAuth';

const Profile = () => {
  const {name} = useParams();
  return (
    <div>
      <h1 className='title is-1'>This is the profile page</h1>
      <article className='message is dark' style={{marginTop: 40}}>
        <div className='message-header'>
          <p>{name}</p>
        </div>
        <div className='message-body'>
          jjdjkjskjds
          ndsjkdsjsd
          jndfkjjerfjekw
          fdjewjejrioewjdfewjfdewjjqi0i40rojfjf
          nfjejfocvdnjdnkjskjfojsxjdnw.
        </div>
      </article>
    </div>
  )
};

export default withAuth(Profile);