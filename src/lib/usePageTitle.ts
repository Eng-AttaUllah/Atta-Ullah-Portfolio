import { useEffect } from 'react'

const BASE_TITLE = 'Atta Ullah — AI & Software Engineer'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Atta Ullah` : BASE_TITLE
  }, [title])
}
