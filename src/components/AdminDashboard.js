// components/AdminDashboard.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Jumbotron } from 'react-bootstrap';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const AdminDashboard = () => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [editBookIndex, setEditBookIndex] = useState(null);
    const [editAuthorIndex, setEditAuthorIndex] = useState(null);

    const handleBookSubmit = (values) => {
        if (editBookIndex !== null) {
            const updatedBooks = [...books];
            updatedBooks[editBookIndex] = values;
            setBooks(updatedBooks);
            setEditBookIndex(null);
        } else {
            setBooks([...books, values]);
        }
    };

    const handleAuthorSubmit = (values) => {
        if (editAuthorIndex !== null) {
            const updatedAuthors = [...authors];
            updatedAuthors[editAuthorIndex] = values;
            setAuthors(updatedAuthors);
            setEditAuthorIndex(null);
        } else {
            setAuthors([...authors, values]);
        }
    };

    const handleEditBook = (index) => {
        setEditBookIndex(index);
    };

    const handleEditAuthor = (index) => {
        setEditAuthorIndex(index);
    };

    const handleCancelEditBook = () => {
        setEditBookIndex(null);
    };

    const handleCancelEditAuthor = () => {
        setEditAuthorIndex(null);
    };

    const handleDeleteBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
    };

    const handleDeleteAuthor = (index) => {
        const updatedAuthors = [...authors];
        updatedAuthors.splice(index, 1);
        setAuthors(updatedAuthors);
    };

    return (
        <Container fluid>
           <Container className="bg-info text-white text-center mb-4 p-3">
        <h1>Admin Dashboard</h1>
      </Container>


            <Row className="mb-4">
                <Col>
                    <h3>Add/Edit Book</h3>
                    <BookForm
                        initialValues={editBookIndex !== null ? books[editBookIndex] : null}
                        onSubmit={handleBookSubmit}
                        onCancel={handleCancelEditBook}
                        onDelete={handleDeleteBook}
                    />
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <h3>Book Records</h3>
                    {books.map((book, index) => (
                        <Card key={index} className="mb-2">
                            <Card.Body>
                                <Card.Title>{book.title} by {book.author}</Card.Title>
                                <Card.Text>
                                    ISBN: {book.isbn} (Published on: {book.publicationDate})
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleEditBook(index)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDeleteBook(index)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <h3>Add/Edit Author</h3>
                    <AuthorForm
                        initialValues={editAuthorIndex !== null ? authors[editAuthorIndex] : null}
                        onSubmit={handleAuthorSubmit}
                        onCancel={handleCancelEditAuthor}
                        onDelete={handleDeleteAuthor}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3>Author Records</h3>
                    {authors.map((author, index) => (
                        <Card key={index} className="mb-2">
                            <Card.Body>
                                <Card.Title>{author.name}</Card.Title>
                                <Card.Text>
                                    Born on: {author.birthDate}, Bio: {author.bio}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleEditAuthor(index)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDeleteAuthor(index)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
