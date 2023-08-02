'use client'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSWR from "swr";
import Link from 'next/link';
import styles from '@/styles/app.module.css';

const HomePage = () => {

    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    return (
        <Row className='mt-5'>
            {data?.slice(0, 3)?.map((blog: IBlog) => {
                return (
                    <Col
                        xs={12} md={4} className='mb-5'
                    >
                        <Card>
                            <Card.Header as="h5">Author: {blog.author}</Card.Header>
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text className={styles["cut-text"]}>
                                    {blog.content}
                                </Card.Text>
                                <Link
                                    className='btn btn-primary'
                                    href={`/blogs/${blog.id}`}>View Detail</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>

    )
}

export default HomePage;