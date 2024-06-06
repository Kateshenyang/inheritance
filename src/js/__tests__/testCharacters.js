import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character.js';

describe('Character classes tests', () => {
  test('Character creation with valid parameters', () => {
    const character = new Character('Archer', 'Bowman');
    expect(character.name).toBe('Archer');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });

  test('Character creation with invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length from 2 to 10 characters');
    expect(() => new Character('LongNameIsInvalid', 'Bowman')).toThrow('Name must be a string with length from 2 to 10 characters');
  });

  test('Character creation with invalid type', () => {
    expect(() => new Character('Archer', 'InvalidType')).toThrow('Incorrect character type');
  });

  test('Bowman creation with valid name', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('Swordsman creation with valid name', () => {
    const swordsman = new Swordsman('Knight');
    expect(swordsman.name).toBe('Knight');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician creation with valid name', () => {
    const magician = new Magician('Wizard');
    expect(magician.name).toBe('Wizard');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Daemon creation with valid name', () => {
    const daemon = new Daemon('Demon');
    expect(daemon.name).toBe('Demon');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Undead creation with valid name', () => {
    const undead = new Undead('Ghost');
    expect(undead.name).toBe('Ghost');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Zombie creation with valid name', () => {
    const zombie = new Zombie('Dead');
    expect(zombie.name).toBe('Dead');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
