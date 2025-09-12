import React, { useState } from 'react';
import './XythumTermsOfService.css';

const XythumTermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    { title: "1. Eligibility", content: (
      <p>You must be at least 18 years old or the age of majority in your jurisdiction to use our Website. By using the Website, you represent that you meet this requirement and are legally able to enter into these Terms.</p>
    )},
    { title: "2. Acceptable Use", content: (
      <>
        <p>By accessing or using our Website, you agree to:</p>
        <ol>
          <li>Use the Website only for lawful purposes and in accordance with these Terms.</li>
          <li>Refrain from engaging in any activity that could harm, disable, overburden, or impair the functionality of the Website.</li>
          <li>Not use the Website for fraudulent or malicious activities, including unauthorized access to data or systems.</li>
          <li>Respect our intellectual property rights and those of others.</li>
        </ol>
      </>
    )},
    { title: "3. Intellectual Property", content: (
      <>
        <ol>
          <li><strong>Ownership:</strong> All content on the Website, including text, graphics, logos, and software, is owned or licensed by Xythum AI and protected by applicable intellectual property laws.</li>
          <li><strong>License to Use:</strong> We grant you a limited, non-exclusive, and non-transferable license to access and use the Website for personal, non-commercial purposes. You may not copy, modify, distribute, or create derivative works based on our content without prior written consent.</li>
        </ol>
      </>
    )},
    { title: "4. User Content", content: (
      <>
        <p>If you submit feedback, suggestions, or other content ("User Content") to us:</p>
        <ol>
          <li>You grant Xythum AI a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display your User Content.</li>
          <li>You represent that you own or have the necessary rights to share the User Content and that it does not violate any laws or third-party rights.</li>
        </ol>
      </>
    )},
    { title: "5. Third-Party Services", content: (
      <p>Our Website may include links to third-party websites or services. Xythum AI is not responsible for the content, policies, or practices of these third-party websites. Your use of third-party services is at your own risk.</p>
    )},
    { title: "6. Disclaimer of Warranties", content: (
      <>
        <p>The Website is provided "as is" and "as available" without any warranties of any kind, express or implied. To the fullest extent permitted by law, Xythum AI disclaims all warranties, including but not limited to:</p>
        <ol>
          <li>The Website being error-free, secure, or uninterrupted.</li>
          <li>The accuracy or reliability of any content or information provided.</li>
        </ol>
      </>
    )},
    { title: "7. Limitation of Liability", content: (
      <>
        <p>To the maximum extent permitted by law, Xythum AI and its affiliates will not be liable for:</p>
        <ol>
          <li>Any indirect, incidental, or consequential damages arising from your use of or inability to use the Website.</li>
          <li>Any unauthorized access to or alteration of your data.</li>
        </ol>
        <p>Our total liability to you for any claims under these Terms is limited to the amount paid by you, if any, to access the Website.</p>
      </>
    )},
    { title: "8. Indemnification", content: (
      <>
        <p>You agree to indemnify and hold harmless Xythum AI and its affiliates from any claims, damages, or expenses (including attorney's fees) arising from:</p>
        <ol>
          <li>Your violation of these Terms.</li>
          <li>Your use of the Website.</li>
          <li>Any User Content you submit.</li>
        </ol>
      </>
    )},
    { title: "9. Modifications to the Terms", content: (
      <p>Xythum AI reserves the right to update or modify these Terms at any time. Changes will be effective when posted on the Website. Your continued use of the Website after changes are posted constitutes acceptance of the revised Terms.</p>
    )},
    { title: "10. Termination", content: (
      <p>We may terminate or suspend your access to the Website at our discretion, without prior notice, if you violate these Terms or engage in activities that harm Xythum AI or its users.</p>
    )},
    { title: "11. Governing Law", content: (
      <p>These Terms are governed by the laws of respective jurisdiction where Xythum AI fall under. Any disputes arising from or related to these Terms will be subject to the exclusive jurisdiction of the courts in [insert jurisdiction].</p>
    )},
    { title: "12. Contact Us", content: (
      <>
        <p>If you have questions about these Terms, please contact us at:</p>
        <p>Xythum AI</p>
        <p>Email: support@xythum.io</p>
      </>
    )},
  ];

  return (
    <div className="xythum-terms-of-service">
      <a href='/' className='sticky-back'>
        BACK
      </a >
      <div className="container">
        <h1>Xythum AI Terms of Service</h1>
        <p className="last-updated">Last Updated: Dec 16, 2024</p>
        <p className="effective-date">Effective Date: Dec 16, 2024</p>
        
        <section className="intro">
          <p>Welcome to Xythum AI ("Xythum," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website, www.xythum.io (the "Website"), and any related services provided by Xythum AI. By using the Website, you agree to these Terms. If you do not agree, you must not access or use the Website.</p>
        </section>

        {sections.map((section, index) => (
          <section key={index} className={`accordion ${activeSection === index ? 'active' : ''}`}>
            <h2 onClick={() => toggleSection(index)}>{section.title}</h2>
            <div className="content">{section.content}</div>
          </section>
        ))}

        <section className="conclusion">
          <p>By using the Website, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>
        </section>
      </div>
    </div>
  );
};

export default XythumTermsOfService;

