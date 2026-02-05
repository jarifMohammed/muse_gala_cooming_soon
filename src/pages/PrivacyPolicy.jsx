import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {/* Header with Logo */}
      <header className="privacy-header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Muse Gala Logo" className="privacy-logo" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="privacy-content">
        {/* Title Section */}
        <div className="privacy-title-section">
          <h1 className="privacy-main-title">Privacy Policy</h1>
          <p className="privacy-description">
            Muse Gala respects your privacy and is committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data, 
            in compliance with the Australian Privacy Principles under the Privacy Act 1988 (Cth).
          </p>
        </div>

        {/* Policy Sections */}
        <ol className="policy-list">
          <li>
            <span className="policy-item-title">Information We Collect</span>
            <p className="policy-item-description">
              We collect personal details such as name, email, phone, billing and
              shipping address, account credentials, and payment information.
              Lenders may also provide business details, ABNs, and payout
              information. Technical data such as IP address, device, browser, and
              usage patterns are also collected via cookies and analytics.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Use of Information</span>
            <p className="policy-item-description">
              Your data is used to provide services, process payments, fulfill
              bookings, improve platform performance, manage accounts, and ensure
              security. With your consent, it may also be used for marketing
              updates and promotional offers.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Disclosure of Information</span>
            <p className="policy-item-description">
              Information may be shared with trusted third-party providers (e.g.
              payment processors, couriers, technical support) only as required.
              If mandated by law, data may be shared with government authorities.
              We do not sell or rent personal information to third parties.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Data Security</span>
            <p className="policy-item-description">
              We apply reasonable measures to protect data against unauthorized
              access, misuse, or loss. Payments are processed via secure,
              PCI-compliant gateways and not stored on our servers. Only
              authorised staff may access personal information.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Data Retention</span>
            <p className="policy-item-description">
              Data is retained only as long as required for service or legal
              obligations. Once no longer necessary, it is securely deleted or
              anonymised.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Marketing Communications</span>
            <p className="policy-item-description">
              You may opt in to receive updates and offers from Muse Gala and
              unsubscribe at any time. Transactional communications (e.g.
              confirmations, delivery updates) will always be sent.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Cookies and Website Analytics</span>
            <p className="policy-item-description">
              Cookies are used to enhance experience, track performance, and
              deliver personalised content. Blocking cookies may limit
              functionality.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Access and Correction</span>
            <p className="policy-item-description">
              You may access or update your information anytime via your account.
              For corrections, contact us and we will respond within a reasonable
              timeframe.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Third-Party Links</span>
            <p className="policy-item-description">
              Our platform may link to third-party sites. Muse Gala is not
              responsible for their privacy practices and encourages you to review
              their policies.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Policy Updates</span>
            <p className="policy-item-description">
              We may update this Privacy Policy from time to time. Changes will be
              posted here with an updated effective date. Continued use of the
              platform constitutes acceptance of revised terms.
            </p>
          </li>

          <li>
            <span className="policy-item-title">Contact</span>
            <p className="policy-item-description">
              For privacy-related questions or requests, contact us at:
              <br />
              <span className="contact-email">Email:</span> support@musegala.com.au
            </p>
          </li>
        </ol>

        {/* Summary */}
        <p className="policy-summary">
          Summary — Muse Gala is committed to protecting your privacy by ensuring
          transparency, security, and compliance with applicable privacy laws.
        </p>

        {/* Back to Home Link */}
        <div className="back-link-container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
