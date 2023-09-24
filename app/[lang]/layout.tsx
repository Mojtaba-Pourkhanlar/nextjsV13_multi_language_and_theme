import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from '@/src/components/Material/Layout/header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dir = params.lang === "ed" ? "rtl" : "lte"
  return (
    <html lang={params.lang} dir={dir}>
      <body >
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}