import { Encrypter } from '@/domain/forum/application/cryptography/encryptyer'

export class FakeEncrypter implements Encrypter {
  async encrypt(payload: Record<string, unknown>) {
    return JSON.stringify(payload)
  }
}
