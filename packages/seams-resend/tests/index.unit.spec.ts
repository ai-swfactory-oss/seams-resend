import { describe, expect, it } from 'vitest'

import { createResendSeam } from '../src/index'
import { createFakeResendSeam } from '../src/testing/index'

describe('createResendSeam', () => {
  it('holds an empty outbox while the seam is a skeleton', () => {
    expect(createResendSeam().outbox()).toEqual([])
  })
})

describe('createFakeResendSeam', () => {
  it('holds an empty outbox by default', () => {
    expect(createFakeResendSeam().outbox()).toEqual([])
  })

  it('returns the outbox it was given', () => {
    const outbox = [{ from: 'a@example.com', to: ['b@example.com'], subject: 'Hi', text: 'Hello' }]
    expect(createFakeResendSeam(outbox).outbox()).toBe(outbox)
  })
})
