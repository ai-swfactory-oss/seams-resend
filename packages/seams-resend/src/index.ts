export interface ResendEmail {
  readonly from: string
  readonly to: readonly string[]
  readonly subject: string
  readonly text: string
}

export interface ResendSeam {
  readonly outbox: () => readonly ResendEmail[]
}

export const createResendSeam = (): ResendSeam => ({
  outbox: () => [],
})
