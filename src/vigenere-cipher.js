import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  encrypt(message, key, forward = true) {
    const { alph, direct } = this;
    if (!message || !key)
      throw Error('Incorrect arguments!');
    [message, key] = [message, key].map(x => x.toUpperCase());
    let res = [], j = 0;
    for (const x of message)
      if (!alph.includes(x))
        res.push(x);
      else {
        const shift = (forward ? 1 : -1) * alph.indexOf(key[j++ % key.length]);
        res.push(alph[(alph.indexOf(x) + shift + alph.length) % alph.length]);
      }
    return (direct ? res : res.reverse()).join('');
  }

  decrypt(message, key) {
    return this.encrypt(message, key, false);
  };
}
