'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, array: number[]): number {
    // Write your code here
   const {count: result} = array.reduce(({colorSet,count}, num) => {
      if(colorSet.has(num)){
        colorSet.delete(num);
        return {colorSet, count: count+1};
      }else{
        colorSet.add(num);
        return {colorSet, count}
      }
    }, {colorSet: new Set<number>(), count: 0})

  return result;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: number = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
