import type { ResendEmail, ResendSeam } from '../index'

export const createFakeResendSeam = (outbox: readonly ResendEmail[] = []): ResendSeam => ({
  outbox: () => outbox,
})
