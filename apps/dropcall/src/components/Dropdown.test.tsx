import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  it('renders the button with default label', () => {
    render(<Dropdown />)
    expect(screen.getByRole('button', { name: /Privacy Settings/i })).toBeInTheDocument()
  })

  it('renders a custom button label', () => {
    render(<Dropdown buttonLabel="My Settings" />)
    expect(screen.getByRole('button', { name: /My Settings/i })).toBeInTheDocument()
  })

  it('menu is hidden by default', () => {
    render(<Dropdown />)
    expect(screen.queryByText('Settings')).not.toBeInTheDocument()
  })

  it('opens menu on button click', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Privacy Settings/i })
    await user.click(button)
    expect(screen.getAllByText('Settings').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('Notification')).toBeInTheDocument()
  })

  it('closes menu on second click', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Privacy Settings/i })
    await user.click(button)
    expect(screen.getByText('Account')).toBeInTheDocument()
    await user.click(button)
    expect(screen.queryByText('Account')).not.toBeInTheDocument()
  })

  it('menu has two columns', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/i }))
    const columns = screen.getAllByText('Settings')
    expect(columns.length).toBe(2)
  })

  it('column 1 has Settings and Account', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/i }))
    expect(screen.getByText('Account')).toBeInTheDocument()
    const settings = screen.getAllByText('Settings')
    expect(settings.length).toBe(2)
  })

  it('column 2 has Settings and Notification', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/i }))
    expect(screen.getByText('Notification')).toBeInTheDocument()
  })

  it('menu items have descriptions', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/i }))
    expect(screen.getByText(/Customize your privacy preferences/)).toBeInTheDocument()
    expect(screen.getByText(/Manage your account details/)).toBeInTheDocument()
    expect(screen.getByText(/Adjust notification settings/)).toBeInTheDocument()
    expect(screen.getByText(/Control your notification preferences/)).toBeInTheDocument()
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Dropdown />
        <div data-testid="outside">Outside element</div>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /Privacy Settings/i }))
    expect(screen.getByText('Account')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByText('Account')).not.toBeInTheDocument()
  })

  it('sets aria-expanded to false when closed', () => {
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Privacy Settings/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('sets aria-expanded to true when open', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Privacy Settings/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-haspopup on the button', () => {
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Privacy Settings/i })
    expect(button).toHaveAttribute('aria-haspopup', 'true')
  })
})
