import { describe, it, expect } from "vitest";
import { average, roundTo, calculatePercentage } from "../services/mathService";

describe("mathService", () => {
  it("calcule la moyenne d'un tableau de nombres", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = average(numbers);
    expect(result).toBe(3);
  });

  it("arrondi à 2 décimales", () => {
    const num = 2.345;
    const result = roundTo(num);
    expect(result).toBe(2.35);
  });

  it("calcule le pourcentage", () => {
    const part = 25;
    const total = 100;
    const result = calculatePercentage(part, total);
    expect(result).toBe(25);
  });

  // Cas de valeurs invalides

  it("la moyenne renvoie 0 si le tableau de moyenne est vide", () => {
    const numbers = [];
    const result = average(numbers);
    expect(result).toBe(0);
  });

  it("le pourcentage renvoie 0 sur la valeur du total est 0", () => {
    const part = 25;
    const total = 0;
    const result = calculatePercentage(part, total);
    expect(result).toBe(0);
  });
});
