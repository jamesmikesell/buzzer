import { TestBed } from '@angular/core/testing';
import { Encryption } from './encryption';

describe('encryption', () => {

  it('encrypt', async () => {
    let encrypt = new Encryption();
    let encrypted1 = await encrypt.encryptData("hello world", "secret");
    let encrypted2 = await encrypt.encryptData("hello world", "secret");
    let decrypted1 = await encrypt.decryptData(encrypted1, "secret")
    let decrypted2 = await encrypt.decryptData(encrypted2, "secret")
    expect(encrypted1).not.toEqual(encrypted2);
    expect(decrypted1).toEqual("hello world");
    expect(decrypted2).toEqual("hello world");
  });


  it('hash', async () => {
    expect(await Encryption.hashString("hello world")).toEqual("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");
    expect(await Encryption.hashString("testing")).toEqual("cf80cd8aed482d5d1527d7dc72fceff84e6326592848447d2dc0b0e87dfc9a90");
  });

});
