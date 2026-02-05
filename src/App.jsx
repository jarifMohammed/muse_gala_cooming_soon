import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Unsubscribe from './pages/Unsubscribe'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
    </Routes>
  )
}

export default App
