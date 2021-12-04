'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine: string[], note: string[]): void {
    // Write your code here
  const wordCountMap = magazine.reduce((prevWordCountMap, word) => {
    const count = prevWordCountMap.has(word) ? prevWordCountMap.get(word) + 1 : 1;
    prevWordCountMap.set(word, count);
    return prevWordCountMap;
  }, new Map());

  const isInvalid = note.some((word) => {
    const count : number | null = wordCountMap.get(word)
    if(!count){
      return true;
    }
    wordCountMap.set(word, count-1);
    return false;
  });

  const result = isInvalid ? 'No' : 'Yes';
  console.log(result);
}

function main() {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const m: number = parseInt(firstMultipleInput[0], 10);

    const n: number = parseInt(firstMultipleInput[1], 10);

    const magazine: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const note: string[] = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}
