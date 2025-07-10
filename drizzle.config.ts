import { defineConfig } from 'drizzle-kit'
import { env } from './src/env.ts'

export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/**.ts', // entender que todos os arquivos da pasta schema podem ser uma tabela
  out: './src/db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
