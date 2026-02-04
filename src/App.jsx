import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

// Hero image hosted on Cloudinary with auto-format (f_auto) and auto-quality (q_auto) optimizations
const heroImage = 'https://res.cloudinary.com/dmhbf8kc7/image/upload/f_auto,q_auto/v1770207607/WhatsApp_Image_2026-02-04_at_18.04.01_qdvpq8.jpg'

// API configuration
const API_URL = 'https://api.musegala.com.au'

function App() {
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
      const response = await fetch(`${API_URL}/api/v1/newsletterSubscription/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! You\'ll be the first to know.' })
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
    <div className="coming-soon-container">
      {/* Left side - Hero Image */}
      <div className="image-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>

      {/* Right side - Content */}
      <div className="content-section">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Title */}
        <h1 className="title uppercase">The Muse Arrives Soon.</h1>

        {/* Subtitle */}
        <p className="subtitle ">
          We're setting the scene. Something amazing is on the way.
          Join the list before the doors open.
        </p>

        {/* Subscription form */}
        <form className="subscription-form" onSubmit={handleSubmit}>
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
            className="subscribe-button"
            disabled={isLoading}
            aria-label="Subscribe"
          >
            {isLoading ? (
              <div className="spinner" />
            ) : (
              <svg
                className="arrow-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            )}
          </button>
        </form>

        {/* Status message */}
        {status.message && (
          <div className={`message ${status.type}`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
