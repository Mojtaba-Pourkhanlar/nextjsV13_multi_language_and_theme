import { Locale } from '@/i18n.config'
import { getDictionary } from '@/src/hook/dictionary'
import LandingPage from "@/src/components/Pages/Landing"

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <LandingPage lang={page} />
    </section>
  )
}
