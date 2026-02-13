import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginModal from '../components/LoginModal'

describe('LoginModal', () => {
  const defaultProps = {
    onClose: vi.fn(),
    onLogin: vi.fn(),
  }

  function renderModal(props = {}) {
    return render(<LoginModal {...defaultProps} {...props} />)
  }

  it('affiche les champs email et mot de passe', () => {
    renderModal()

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Mot de passe')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /connexion/i })).toBeInTheDocument()
  })

  it('affiche une erreur si les champs sont vides a la soumission', async () => {
    const user = userEvent.setup()
    renderModal()

    await user.click(screen.getByRole('button', { name: /connexion/i }))

    expect(screen.getByText('Veuillez remplir tous les champs.')).toBeInTheDocument()
    expect(defaultProps.onLogin).not.toHaveBeenCalled()
  })

  it('appelle onLogin avec le mail et ferme la modale', async () => {
    const onClose = vi.fn()
    const onLogin = vi.fn()
    const user = userEvent.setup()
    renderModal({ onClose, onLogin })

    await user.type(screen.getByLabelText('Email'), 'test@mail.com')
    await user.type(screen.getByLabelText('Mot de passe'), 'motdepasse')
    await user.click(screen.getByRole('button', { name: /connexion/i }))

    expect(onLogin).toHaveBeenCalledWith('test@mail.com')
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('ferme la modale au clic sur le bouton fermer', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    renderModal({ onClose })

    await user.click(screen.getByRole('button', { name: /fermer/i }))

    expect(onClose).toHaveBeenCalledOnce()
  })

  it('efface le message d\'erreur quand on tape dans un champ', async () => {
    const user = userEvent.setup()
    renderModal()

    await user.click(screen.getByRole('button', { name: /connexion/i }))
    expect(screen.getByText('Veuillez remplir tous les champs.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email'), 'a')
    expect(screen.queryByText('Veuillez remplir tous les champs.')).not.toBeInTheDocument()
  })
})
