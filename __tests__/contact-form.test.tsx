import { render, screen, fireEvent } from '@testing-library/react'
import { ContactFormSection } from '../components/sections/contact-form-section'
import { vi, describe, it, expect } from 'vitest'

// Mock useLanguage
vi.mock('@/lib/i18n', () => ({
  useLanguage: () => ({
    t: {
      contactForm: {
        rocket: {
          title: 'Start your project',
          text: 'We are ready',
          highlight: 'to help',
          subtext: { call: 'Call us', or: ' or ', whatsapp: 'WhatsApp', form: 'fill the', response: 'form' }
        },
        form: {
          services: {
            placeholder: 'Select a service',
            options: { web: 'Web', store: 'Store', marketing: 'Marketing', ai: 'AI', apps: 'Apps', other: 'Other' }
          },
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          message: 'Message',
          privacy: { text: 'I accept', link: 'privacy policy' },
          submit: 'Send',
          submitting: 'Sending...',
          success: { title: 'Success', message: 'Message sent', button: 'Close' },
          error: 'Error sending'
        }
      }
    }
  })
}))

// Mock Next.js Link
vi.mock('next/link', () => ({
  default: ({ children }: { children: React.ReactNode }) => <a>{children}</a>
}))

// Mock DataLayer
vi.mock('@/lib/gtm', () => ({
  pushToDataLayer: vi.fn()
}))

// Mock Confetti
vi.mock('@/components/ui/confetti', () => ({
  Confetti: () => null
}))

describe('ContactFormSection', () => {
  it('renders the form correctly', () => {
    render(<ContactFormSection />)
    
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByText('Send')).toBeInTheDocument()
  })

  it('updates form fields when typing', () => {
    render(<ContactFormSection />)
    
    const nameInput = screen.getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    expect(nameInput).toHaveValue('John Doe')
  })
})