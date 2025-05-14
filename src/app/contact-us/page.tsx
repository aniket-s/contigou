"use client"
import { useState, ChangeEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactUsPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // In a real application, you would send this data to a backend service
    };

    const resetForm = (): void => {
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

                    {submitted ? (
                        <div className="text-center">
                            <div className="mb-4 text-green-500 text-xl">Thank you for your message!</div>
                            <p className="mb-6 text-gray-600">We&apos;ll get back to you as soon as possible.</p>
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    resetForm();
                                }}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                                >
                                    Send Message
                                </button>

                                <button
                                    onClick={resetForm}
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Reset Form
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-gray-50 px-6 py-4">
                    <div className="text-center text-sm text-gray-600">
                        <p className="mb-2">Or reach us directly:</p>
                        <p className="mb-1">Email: contact@company.com</p>
                        <p className="mb-1">Phone: (123) 456-7890</p>
                        <p>Address: 123 Business Street, City, Country</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;