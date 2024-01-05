// components/AuthorForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Author name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    bio: Yup.string().required('Author bio is required'),
});

const AuthorForm = ({ initialValues = {}, onSubmit, onCancel, onDelete }) => {
    console.log('AuthorForm initialValues:', initialValues);

    return (
        <Formik
            initialValues={{ name: '', birthDate: '', bio: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Author Name:</label>
                    <Field type="text" id="name" name="name" className="form-control" placeholder="Enter author name" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="birthDate" className="form-label">Birth Date:</label>
                    <Field type="date" id="birthDate" name="birthDate" className="form-control" />
                    <ErrorMessage name="birthDate" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">Author Bio:</label>
                    <Field as="textarea" id="bio" name="bio" className="form-control" placeholder="Enter author bio" />
                    <ErrorMessage name="bio" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {onCancel && <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>}
                </div>
            </Form>
        </Formik>
    );
};

export default AuthorForm;
