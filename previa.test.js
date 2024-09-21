import { describe, it, expect } from "bun:test";
import {
  maiorNumero,
  //verificarParOuImpar,
  //contarCaracter,
  //atualizarPropriedade,
} from "./previa.js";

// Teste para a função maiorNumero
describe("maiorNumero", () => {
  it("deve retornar o maior número da lista", () => {
    expect(maiorNumero([1, 3, 5, 7, 2])).toBe(7);
  });
  it("deve retornar null para lista vazia", () => {
    expect(maiorNumero([])).toBe(null);
  });
  it("deve retornar null para entrada inválida", () => {
    expect(maiorNumero("não é uma lista")).toBe(null);
  });
});

