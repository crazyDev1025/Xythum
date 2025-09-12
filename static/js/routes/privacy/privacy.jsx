import React, { useState } from 'react';
import './PrivacyPolicy.css';

const XythumPrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    { title: "1. Information We Collect", content: (
      <>
        <p>We may collect the following types of information from you:</p>
        <h4>a. Information You Provide</h4>
        <ul>
          <li>Contact Information: Name, email address, phone number, or any other details provided when filling out a form, signing up for updates, or contacting us.</li>
          <li>Feedback or Support Requests: Details you share when providing feedback or reaching out for support.</li>
        </ul>
        <h4>b. Automatically Collected Information</h4>
        <ul>
          <li>Usage Data: Information about how you interact with our Website, such as IP address, browser type, operating system, pages visited, and time spent on the Website.</li>
          <li>Cookies and Similar Technologies: Data collected through cookies, pixel tags, and other technologies to enhance user experience and analyze Website performance.</li>
        </ul>
        <h4>c. Third-Party Information</h4>
        <p>We may collect information about you from third-party sources, such as analytics providers or social media platforms, when you interact with our content on their platforms.</p>
      </>
    )},
    { title: "2. How We Use Your Information", content: (
      <ul>
        <li>Website Operation and Maintenance: To provide and improve our Website and ensure its functionality.</li>
        <li>Communication: To respond to your inquiries, send updates, and notify you about changes to our services.</li>
        <li>Analytics and Research: To analyze usage patterns and improve the Website and user experience.</li>
        <li>Legal Compliance: To comply with applicable laws, regulations, or legal processes.</li>
        <li>Security: To detect, prevent, and address fraud or other security concerns.</li>
      </ul>
    )},
    { title: "3. How We Share Your Information", content: (
      <>
        <p>We do not sell or rent your personal information. We may share your information in the following cases:</p>
        <ul>
          <li>Service Providers: With trusted third-party service providers who assist us in operating our Website or analyzing Website performance.</li>
          <li>Legal Obligations: When required to comply with legal obligations, enforce our terms, or protect our rights.</li>
          <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
        </ul>
      </>
    )},
    { title: "4. Cookies and Tracking Technologies", content: (
      <p>Cookies are text files, containing small amounts of information, which are downloaded to your browsing device (such as a computer or smartphone) when you visit a website. Cookies can be recognized by the website that downloaded them — or other websites that use the same cookies. Cookies enable websites to know if the browsing device has visited the website before. We use cookies and similar technologies to enhance your experience and collect analytics data. You can manage your cookie preferences through your browser settings.</p>
    )},
    { title: "5. Your Privacy Rights", content: (
      <>
        <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
        <ul>
          <li>Access and Correction: Request access to or correction of the information we hold about you.</li>
          <li>Data Deletion: Request deletion of your personal information.</li>
          <li>Opt-Out: Opt out of receiving marketing communications from us.</li>
        </ul>
        <p>To exercise these rights, contact us at hello@xythum.io.</p>
      </>
    )},
    { title: "6. Data Retention", content: (
      <p>We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
    )},
    { title: "7. Data Security", content: (
      <p>We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
    )},
    { title: "8. Third-Party Links", content: (
      <p>Our Website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those websites. Please review their privacy policies before sharing your information.</p>
    )},
    { title: "9. International Data Transfers", content: (
      <p>If you are accessing our Website from outside your country, note that your information may be transferred to and processed in a country with different data protection laws. By using our Website, you consent to this transfer.</p>
    )},
    { title: "10. Updates to This Privacy Policy", content: (
      <p>We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page indicates when it was last revised. Your continued use of the Website after updates constitutes your acceptance of the revised Privacy Policy.</p>
    )},
    { title: "11. Contact Us", content: (
      <p>If you have questions or concerns about this Privacy Policy or our data practices, contact us at: hello@xythum.io</p>
    )},
  ];

  return (
    <div className="xythum-privacy-policy">
      <a href='/' className='sticky-back'>
        BACK
      </a >
      <div className="container">
        <h1>Xythum AI Privacy Policy</h1>
        <p className="last-updated">Last Updated: Dec 16, 2024</p>
        <p className="effective-date">Effective Date: Dec 16, 2024</p>
        
        <section className="intro">
          <p>Welcome to Xythum AI ("Xythum," "we," "our," or "us"). Protecting your privacy is our priority. This Privacy Policy explains how we collect, use, and share your information when you visit our website, www.xythum.io (the "Website"), and engage with our services. By accessing or using our Website, you agree to the terms of this Privacy Policy.</p>
        </section>

        {sections.map((section, index) => (
          <section key={index} className={`accordion ${activeSection === index ? 'active' : ''}`}>
            <h2 onClick={() => toggleSection(index)}>{section.title}</h2>
            <div className="content">{section.content}</div>
          </section>
        ))}

        <section className="conclusion">
          <p>By using our Website, you agree to this Privacy Policy. Thank you for trusting Xythum AI.</p>
        </section>
      </div>
    </div>
  );
};

export default XythumPrivacyPolicy;

