// pages/privacy-policy.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | ContigoU, Inc.</title>
                <meta name="description" content="Privacy Policy for ContigoU, Inc." />
            </Head>

            <div className="bg-gray-50 min-h-screen">
                <header className="bg-white shadow-sm">
                    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                            <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:p-6 prose max-w-none">
                                <p className="text-gray-700 mb-4">
                                    Please read this privacy policy (&quot;Privacy Policy&quot;) below before using this website.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    This Privacy Policy governs the manner in which we collect, use, maintain and disclose information collected from users of this website. This privacy policy applies only to information collected by this website and not to any information collected by us off-line or pursuant to other websites or other means of electronic communications. BY ACCESSING, VISITING, SUBMITTING ANY INFORMATION TO OR OTHERWISE USING THIS WEBSITE OR ANY OF ITS WEBPAGES, SUBDOMAINS OR FEATURES, YOU ARE ACCEPTING THE PRACTICES DESCRIBED IN THIS PRIVACY POLICY, AS WELL AS OUR TERMS AND CONDITIONS OF USE.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Amendments To This Privacy Policy
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    We may update this Privacy Policy at any time. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    What information do we collect?
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We collect information from you when you respond to a survey, send a greeting or fill out a form. You may be asked to enter the following: name, e-mail address, mailing address, or phone number. You may, however, also visit our site anonymously.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    We may also collect non-personal identification information about you whenever you interact with this website. Non-personal identification information may include the browser name, the type of device and technical information about your means of connection to our website, such as the operating system, IP address, and the Internet service providers utilized and other similar information.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    We may collect information in the form of website server logs. These logs are files that record activity on the website and gather statistics about users&apos; activities, such as:
                                </p>

                                <ol className="list-decimal ml-6 mb-6 space-y-1 text-gray-700">
                                    <li>how many users have visited the website;</li>
                                    <li>how often;</li>
                                    <li>how many hits the website and a particular webpage has received;</li>
                                    <li>sign-in and sign-off times for the website;</li>
                                    <li>type and quality of the user&apos;s Internet connection to the website;</li>
                                    <li>identification of the user&apos;s hardware and software accessing the website;</li>
                                    <li>the features on the website you used;</li>
                                    <li>the frequency of use.</li>
                                </ol>

                                <p className="text-gray-700 mb-6">
                                    The entries comprising the logs contain IP addresses, user IDs, and identification of the Internet service provider that provides your connection to the Internet. Generally, we use the Logs to operate and improve the website, to identify the popularity of certain features, to assist with internal marketing and demographic studies, to enable us to assess overall efficiency and activity on the website, and to assess users&apos; web-browsing activities, preferences, and habits. We also use the logs to monitor traffic on the website and to troubleshoot technical problems.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    What do we use your information for?
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    In addition to what is set forth above, any of the information we collect from you may be used to improve customer service, survey or other site feature or to send periodic emails. The email address you provide may be used to send you information, respond to inquiries, and/or other requests.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    How do we protect your information?
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Do we use cookies?
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Yes cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information. We use cookies to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. You may choose to set your browser to refuse cookies, or to alert you when cookies are being sent. If you do, please note that some parts of the website may not function properly.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Do we disclose any information to outside parties?
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others&apos; rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    California Online Privacy Protection Act Compliance
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Children&apos;s Online Privacy Protection Act Compliance
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    We are in compliance with the requirements of COPPA (Children&apos;s Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    California Privacy Rights Under California Civil Code Section 1798.83
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    If you are a resident of California, in addition to the rights set forth in this Privacy Policy, you generally have the right to request information from us regarding the manner in which we share certain categories of personal information with third parties for their direct marketing purposes. However, under the law, a business is not required to provide this information if it adopts and discloses to the public in its privacy policy a practice of not disclosing a user&apos;s personal information to third parties for their direct marketing purposes unless the user first affirmatively agrees to the disclosure. Rather, the business may comply with the law by notifying California users of their rights to prevent disclosure of personal information and providing a cost free means to exercise that right.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    As stated above, we do not share personal information with third parties for their direct marketing purposes unless you have requested us to do so, or have otherwise consented, and then subject to your right to opt-out of sharing your personal information for third party marketing purposes.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Please note that whenever you opt-in to receive future communications from a third party, your information will be subject to the third party&apos;s privacy policy. If you later decide that you do not want that third party to use your information, you will need to contact the third party directly, as we have no control over how third parties use your information. You should always review the privacy policy of any party that collects your information to determine how that entity will handle your information.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    California users may request further information about our compliance with this law by e-mailing: admin@heritagemanorcare.com. Please note that we only are required to respond to one request per user each year, and we are not required to respond to requests made by means other than through this e-mail address.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Online Privacy Policy Only
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    This online privacy policy applies only to information collected through our website and not to information collected offline.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Terms and Conditions
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Your Consent
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    By using our site, you consent to our privacy policy.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Changes to our Privacy Policy
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    If we decide to change our privacy policy, we will post those changes on this page.
                                </p>

                                <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Contacting Us
                                </h2>
                                <p className="text-gray-700 mb-2">
                                    If there are any questions regarding this privacy policy you may contact us using the information below.
                                </p>

                                <div className="text-gray-700 mt-4">
                                    <p className="font-medium">ContigoU, Inc.</p>
                                    <p>15934 Hesperian Blvd, Suite 140</p>
                                    <p>San Lorenzo, CA 94580</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-white border-t border-gray-200 py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} ContigoU, Inc. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default PrivacyPolicy;