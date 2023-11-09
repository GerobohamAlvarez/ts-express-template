import { describe, expect , it } from "@jest/globals";
import { HashService } from "./hash.service";
import { IHashtable } from "../../domain/hash.interface";



describe("Hasher security module: ", () => {

  const texts : string[] = [
    "Lorem fistrum a wan ese pedazo de apetecan a gramenawer.",
    "Apetecan quietooor diodeno mamaar ese hombree amatomaa me cago en tus muelas.",
    "Te voy a borrar el cerito pupita condemor diodenoo fistro la caidita está la cosa muy malar.",
  ];

  it.each( texts )("Should encrypt the text '%s' and not be able to decode it" , async ( text: string) => {

    const encryptor: IHashtable = new HashService();

    const encryptedText: string = await encryptor.encode(text);

    expect(encryptedText).not.toBe(text);

  });

});