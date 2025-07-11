import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { createQuestionRoute } from './HTTP/routes/create-question.ts'
import { createRoomRoute } from './HTTP/routes/create-rooms.ts'
import { getRoomQuestions } from './HTTP/routes/get-room-questions.ts'
import { getRoomsRoute } from './HTTP/routes/get-rooms.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: env.PORT })

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.get('/health', () => {
  return 'OK'
})

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestions)
app.register(createQuestionRoute)
