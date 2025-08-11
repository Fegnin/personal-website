import es from './es'
import en from './en'

export async function getDictionary(locale: 'es' | 'en') {
  return locale === 'es' ? es : en
}