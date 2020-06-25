export const gachaChance = (chance: number = 0.6): boolean => {
  return Math.random() < chance
}
