'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';

interface IProps {
    blogs: IBlog[]
}

const AppTable = (props: IProps) => {
    const { blogs } = props;

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

    return (
        <>
            <div
                className='mb-3'
                style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Blogs</h3>
                <Button variant="secondary"
                    onClick={() => setShowModalCreate(true)}
                >Add New</Button>
            </div>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant='warning' className='mx-3'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
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
    )
}

export default AppTable;