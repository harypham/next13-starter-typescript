'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
interface IProps {
  blogs: IBlog[];
}

function AppTable(props: IProps) {

  const { blogs } = props;

  return (
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
  );
}

export default AppTable;