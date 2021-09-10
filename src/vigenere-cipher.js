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
    this.direct = direct
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) == -1) {
        result.push(message[i]);
      } else {
        let count = (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])) % 26;
        result.push(alphabet[count]);
        if ((j + 1) == key.length) {
          j = 0;
        } else j += 1;
      }
    }
    return (!this.direct) ? result.reverse().join('') : result.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = [];
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (alphabet.indexOf(encryptedMessage[i]) == -1) {
        result.push(encryptedMessage[i]);
      } else {
        let count = (alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[j]) + 26) % 26;
        result.push(alphabet[count]);
        if ((j + 1) == key.length) {
          j = 0;
        } else j += 1;
      }
    }
    return (!this.direct) ? result.reverse().join('') : result.join('');
  }
}
