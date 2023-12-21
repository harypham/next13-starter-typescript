'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
interface IProps {
  blogs: IBlog[];
}

function AppTable(props: IProps) {

  const { blogs } = props;

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  return (
    <>
    <div className='mb-3' style={{display: "flex", justifyContent: "space-between"}}>
      <h3>Table Blogs</h3>
      <Button variant="primary" onClick={() => setShowModalCreate(true)}>Add New</Button>
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, index) => {
          return (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>
                <Button variant="success" className='mx-3'>View</Button>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" className='mx-3'>Delete</Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    <CreateModal 
      showModalCreate={showModalCreate}
      setShowModalCreate={setShowModalCreate}
    />
    </>
  );
}

export default AppTable;