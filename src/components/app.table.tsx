'use client'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
  blogs: IBlog[];
}

function Footer(props: IProps) {
  const { blogs } = props;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [updateModalCreate, setUpdateModalCreate] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    if (confirm(`Do you want to delete this blog (id = ${id})`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
      }).then(res => res.json())
        .then(res => {
          if (res) {
            toast.success("Delete succeed !...~")
            mutate("http://localhost:8000/blogs")
          }
        })
    }
  }

  return (
    <div>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Blogs</h3>
        <Button variant='secondary'
          onClick={() => setShowModalCreate(true)}>Add New</Button>
      </div>
      <Table bordered hover size='sm'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs && blogs.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href={`/blogs/${item.id}`}>
                    <button className='btn btn-primary'>View</button>
                  </Link>
                  <Button variant='warning' className='mx-3' onClick={() => {
                    setBlog(item)
                    setUpdateModalCreate(true)
                  }}>Edit</Button>
                  <Button variant='danger'
                    onClick={() => handleDelete(item.id)}>Delete</Button>
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
      <UpdateModal
        updateModalCreate={updateModalCreate}
        setUpdateModalCreate={setUpdateModalCreate}
        blog={blog}
        setBlog={setBlog}
      />
    </div>
  );
}

export default Footer;
