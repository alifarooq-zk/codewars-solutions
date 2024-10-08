// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

export class Kata {
  static duplicateEncode(word: string): string {
    const mp: { [index: string]: number } = {};
    word = word.toLowerCase(); 

    for (let w of word) {
      if (w in mp) mp[w]++;
      else mp[w] = 1;
    }

    let res = "";

    for (let w of word) {
      if (mp[w] > 1) res += ")";
      else res += "(";
    }

    return res;
  }
}

console.log(Kata.duplicateEncode("(( @"));
