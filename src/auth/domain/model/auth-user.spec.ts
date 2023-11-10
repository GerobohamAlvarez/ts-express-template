import { AuthUser } from "./auth-user.model";
import crypto from "node:crypto";
import { faker } from "@faker-js/faker";

describe("Domain: AuthUser" , () => {

  it("Should encrypt the password at build: " , () => {

      // GIVEN
      const login = faker.internet.email();
      const password = faker.internet.password({
        length: 10,
        memorable: true,
      });

      // WHEN
      const user: AuthUser = AuthUser.build(login , password);

      // THEN
      expect(user.login).toBe(login);
      expect(user.password).not.toBe(password);

  });

  it("Should throw error if password do not meet the requirements: " , () => {

    // GIVEN
    const login = faker.internet.email();
    const password = "root";

    // THEN
    expect(() => AuthUser.build(login , password))
      .toThrowError("Invalid password: do not meet requirements");

  });

  it("Should throw error if login do not meet the requirements: " , () => {

    // GIVEN
    const login = "kal";
    const password = faker.internet.password({
      length: 10,
      memorable: true,
    });

    // WHEN
    expect(() => AuthUser.build(login, password))
      .toThrowError("Invalid login: do not meet requirements");

  });

  it("Should autogenerate an unique id : " , () => {

    // GIVEN
    const customId = faker.string.uuid();
    const login = faker.internet.email();
    const password = faker.internet.password({
      length: 10,
      memorable: true,
    });

    // WHEN

    jest.spyOn(crypto , "randomUUID").mockReturnValue(customId as `${string}-${string}-${string}-${string}-${string}`);

    const user: AuthUser = AuthUser.build(login , password);

    // THEN
    expect(user.id).toBe(customId);
    expect(user.login).toBe(login);
    expect(user.password).not.toBe(password);

  });

  it("Should persist the given data from constructor: " , () => {

    // GIVEN
    const customId = faker.string.uuid();
    const login = faker.internet.email();
    const password = faker.internet.password({
      length: 10,
      memorable: true,
    });

    // WHEN
    const user = new AuthUser(customId , login , password);

    // THEN
    expect(user.id).toBe(customId);
    expect(user.login).toBe(login);
    expect(user.password).toBe(password);

  });

});