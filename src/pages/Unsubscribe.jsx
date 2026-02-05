import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Unsubscribe.css'

// API configuration
const API_URL = 'https://api.musegala.com.au'

function Unsubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email address' })
      return
    }

    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(`${API_URL}/api/v1/newsletterSubscription/unsubscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'You have been successfully unsubscribed.' })
        setEmail('')
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to connect. Please try again later.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="unsubscribe-container">
      {/* Header with Logo */}
      <header className="unsubscribe-header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Muse Gala Logo" className="unsubscribe-logo" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="unsubscribe-content">
        {/* Title */}
        <h1 className="unsubscribe-title">Unsubscribe</h1>

        {/* Subtitle */}
        <p className="unsubscribe-subtitle">
          We're sorry to see you go. Enter your email below to unsubscribe from our mailing list.
        </p>

        {/* Unsubscribe form */}
        <form className="unsubscribe-form" onSubmit={handleSubmit}>
          <div className="email-input-wrapper">
            <input
              type="email"
              className="email-input"
              placeholder="Email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              aria-label="Email address"
            />
          </div>
          <button
            type="submit"
            className="unsubscribe-button"
            disabled={isLoading}
            aria-label="Unsubscribe"
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              'Unsubscribe'
            )}
          </button>
        </form>

        {/* Status message */}
        {status.message && (
          <p className={`message ${status.type}`}>
            {status.message}
          </p>
        )}

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

export default Unsubscribe
