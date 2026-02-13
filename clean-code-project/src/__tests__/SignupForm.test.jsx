import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignupForm from '../components/SignupForm'

describe('SignupForm', () => {
  it('affiche le formulaire avec tous les champs', () => {
    render(<SignupForm />)

    expect(screen.getByLabelText('Nom')).toBeInTheDocument()
    expect(screen.getByLabelText('Prénom')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Date de naissance')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /réserver/i })).toBeInTheDocument()
  })

  it('affiche les erreurs de validation quand le formulaire est soumis vide', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: /réserver/i }))

    expect(screen.getByText('Le nom est requis.')).toBeInTheDocument()
    expect(screen.getByText('Le prénom est requis.')).toBeInTheDocument()
    expect(screen.getByText("L'email est requis.")).toBeInTheDocument()
    expect(screen.getByText('La date de naissance est requise.')).toBeInTheDocument()
  })

  it('affiche le message de validation avec le bon prénom après soumission', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByLabelText('Nom'), 'Dupont')
    await user.type(screen.getByLabelText('Prénom'), 'Marie')
    await user.type(screen.getByLabelText('Email'), 'marie@test.com')
    await user.type(screen.getByLabelText('Date de naissance'), '2000-05-15')

    await user.click(screen.getByRole('button', { name: /réserver/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Merci Marie')
  })

  it('réinitialise le formulaire après une soumission réussie', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByLabelText('Nom'), 'Dupont')
    await user.type(screen.getByLabelText('Prénom'), 'Marie')
    await user.type(screen.getByLabelText('Email'), 'marie@test.com')
    await user.type(screen.getByLabelText('Date de naissance'), '2000-05-15')

    await user.click(screen.getByRole('button', { name: /réserver/i }))

    expect(screen.getByLabelText('Nom')).toHaveValue('')
    expect(screen.getByLabelText('Prénom')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
  })

  it('efface une erreur quand le champ est modifié', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: /réserver/i }))
    expect(screen.getByText('Le nom est requis.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Nom'), 'D')
    expect(screen.queryByText('Le nom est requis.')).not.toBeInTheDocument()
  })
})
