# seams-resend

seams-resend is the seam for the Resend email API: a typed SDK the rest of the code sends email through, with a fake under `./testing` for tests.

This repository holds only the guarded skeleton so far: `createResendSeam()` returns a seam whose `outbox()` holds no email, and `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-resend`: the Resend seam, with a fake under `./testing`.

## Licence

MIT
