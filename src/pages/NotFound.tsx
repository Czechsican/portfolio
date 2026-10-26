import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

interface NotFoundProps {
  message?: string
  backTo?: string
  backLabel?: string
}

export function NotFound({
  message = 'That page doesn’t exist.',
  backTo = '/',
  backLabel = 'Back to the home page',
}: NotFoundProps) {
  useDocumentTitle('Not found')

  return (
    <div className="page" data-channel="ink">
      <h1 className="page__title">Page not found</h1>
      <p className="page__intro">{message}</p>
      <p>
        <Link to={backTo}>{backLabel}</Link>
      </p>
    </div>
  )
}
