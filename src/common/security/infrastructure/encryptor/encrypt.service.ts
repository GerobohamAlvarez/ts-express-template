import crypto , { Cipher , Decipher } from "crypto";
import { IEncrypt } from "common/security/domain/encrypt.interface";

export class EncryptService implements IEncrypt {

  private cipher:  Cipher;
  private decipher: Decipher;

  constructor(
    private secret: string,
    private algorithm: string = "aes-256-cbc",
  ) {

    if(!this.isValidKey(secret)){
      throw Error("Invalid key: The secret does not meet minimum requirements.");
    }

    // Generate IV
    const iv: Buffer = crypto.randomBytes(16);
    // Create Decipher object
    this.decipher = crypto.createDecipheriv(this.algorithm, this.secret, iv);
    // Create Cipher object
    this.cipher = crypto.createCipheriv(this.algorithm, this.secret, iv);
  }

  async decode(message: string): Promise<string> {

    // decrypt the data
    let decryptedText = this.decipher.update(message, "hex", "utf-8");

    // finalize the decryption
    decryptedText += this.decipher.final("utf-8");

    return decryptedText;
  }

  async encode(message: string): Promise<string> {

    // encrypt the data
    let encryptedText = this.cipher.update(message, "utf-8", "hex");

    // finalize the encryption
    encryptedText += this.cipher.final("hex");

    return encryptedText;

  }

  private isValidKey ( secret : string ): boolean {

      // Key should have 32 chars or 256 bits
      return secret.length === 32;
  }

}