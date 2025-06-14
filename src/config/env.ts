import { z } from 'zod'

const envSchema = z.object({
  // Variáveis públicas (expostas no client)
  WHATSAPP: z
    .string()
    .min(8, 'Número de WhatsApp inválido')
    .max(15, 'Número de WhatsApp inválido'),
  EMAIL: z.string().email('E-mail inválido'),
})

const _env = {
  WHATSAPP: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  EMAIL: process.env.NEXT_PUBLIC_EMAIL,
}

const parsed = envSchema.safeParse(_env)

if (!parsed.success) {
  console.error('❌ Erro ao validar variáveis de ambiente:')
  console.error(parsed.error.format())
  throw new Error(
    '⚠️ Variáveis de ambiente inválidas. Corrija o arquivo `.env`.'
  )
}

export const env = parsed.data
