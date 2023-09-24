import { Locale } from '@/i18n.config'
import { getDictionary } from '@/src/hook/dictionary'
import AboutPage from "@/src/components/Pages/About"

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <AboutPage lang={page} />
    </section>
  )
}
