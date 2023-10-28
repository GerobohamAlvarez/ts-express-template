import crypto , { Hash } from "crypto";
import { IHashtable } from "../../../domain/core/security/hash.interface";

export class CypherHash implements IHashtable {

  private hash: Hash;

  constructor() {
    this.hash = crypto.createHash("sha256");
  }

  async encode(message: string): Promise<string> {
    return this.hash.update(message).digest("hex");
  }

}