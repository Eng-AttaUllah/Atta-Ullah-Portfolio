import { useEffect, useState } from 'react'

interface ClockProps {
  className?: string
  seconds?: boolean
}

const formatter = (seconds: boolean) =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    ...(seconds ? { second: '2-digit' } : {}),
    hour12: false,
  })

export function Clock({ className, seconds = false }: ClockProps) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <time
      className={className}
      dateTime={now.toISOString()}
      title="Local time in Mardan, Pakistan"
    >
      {formatter(seconds).format(now)} PKT
    </time>
  )
}
