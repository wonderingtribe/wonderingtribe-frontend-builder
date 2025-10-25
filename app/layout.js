export const metadata = {
  title: 'Frontend Builder',
  description: 'A Next.js frontend builder application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
