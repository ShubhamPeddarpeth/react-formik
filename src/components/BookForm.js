// components/BookForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
});

const defaultValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
};

const BookForm = ({ initialValues = {}, onSubmit, onCancel, onDelete }) => {
    console.log('Initial Values:', initialValues);

    return (
        <Formik
            initialValues={{ ...defaultValues, ...initialValues }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <Field type="text" id="title" name="title" className="form-control" placeholder="Enter book title" />
                    <ErrorMessage name="title" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author:</label>
                    <Field type="text" id="author" name="author" className="form-control" placeholder="Enter book author" />
                    <ErrorMessage name="author" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="isbn" className="form-label">ISBN:</label>
                    <Field type="text" id="isbn" name="isbn" className="form-control" placeholder="Enter book ISBN" />
                    <ErrorMessage name="isbn" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="publicationDate" className="form-label">Publication Date:</label>
                    <Field type="date" id="publicationDate" name="publicationDate" className="form-control" />
                    <ErrorMessage name="publicationDate" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {onCancel && <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>}
                </div>
            </Form>
        </Formik>
    );
};

export default BookForm;
