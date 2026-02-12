function ValidationMessage({ firstName }) {
  return (
    <div className="validation-message" role="alert">
      <p>Merci {firstName} ! Vous serez notifié dès que le produit sera disponible.</p>
    </div>
  )
}

export default ValidationMessage
