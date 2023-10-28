import { describe, expect , it } from "@jest/globals";
import { Encryptor } from "./encryptor";
import { IEncrypt } from "../../../domain/core/security/encrypt.interface";

describe("Encrypt security module: ", () => {

    const texts : string[] = [
      "Lorem fistrum a wan ese pedazo de apetecan a gramenawer.",
      "Apetecan quietooor diodeno mamaar ese hombree amatomaa me cago en tus muelas.",
      "Te voy a borrar el cerito pupita condemor diodenoo fistro la caidita está la cosa muy malar.",
    ];

    it("Should fail if secret do not meet requirements." , () => {

        expect(() => new Encryptor("a")).toThrow("Invalid key: The secret does not meet minimum requirements.");

    });

    it.each( texts )("Should encrypt the text '%s' and be able to decode it" , async ( text: string) => {

      const encryptor: IEncrypt = new Encryptor("randoms-256-bits-string-32-chars");

      const encryptedText: string = await encryptor.encode(text);
      const decodedText: string = await encryptor.decode(encryptedText);

      expect(encryptedText).not.toBe(text);
      expect(encryptedText).not.toBe(decodedText);
      expect(decodedText).toBe(text);

    });

});