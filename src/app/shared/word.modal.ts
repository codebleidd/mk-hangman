export class Word {
  private id: number;
  private word: string;
  constructor (id, word) {
    this.id = id;
    this.word = word.toLowerCase();
  }
  getLetterIndexes(letter: string): number[] {
    let indexes: number[] = [];
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        indexes.push(i);
      }
    }
    if (indexes.length > 0) {
      return indexes;
    } else {
      return [];
    }
  }
  getWord(): string {return this.word}
  getWordLength (): number {return this.word.length}
}
