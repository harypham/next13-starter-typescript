'use client'
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
    return (
        <div >
            <div className='my-3'>
                <Link href={"/blogs"}> Go Back</Link>
            </div>
            <Card className="text-center">
                <Card.Header>Title</Card.Header>
                <Card.Body>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">author</Card.Footer>
            </Card>
        </div>
    )
}

export default ViewDetailBlog;