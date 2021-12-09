/**
 * https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 */
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

interface Player {
    name: string;
    score: number;
}
class Checker {
    compare (o1 : Player, o2: Player) {
        if(o1.score !== o2.score){
            return o2.score - o1.score;
        }
        return o1.name.localeCompare(o2.name);
    }

}

function main() {
    // Enter your code here
  const inputArray: Player[] = [];
    
    while(true) {
        let value = readLine();
        
        if(!value) {
            break;
        }
        
        const playerData = value.split(' ');
        
        if(playerData.length > 1) {
            inputArray.push({name: playerData[0], score: Number(playerData[1])})
        }
    }
    
    const checker = new Checker();
    const sortedInput = inputArray.sort((a, b) => checker.compare(a, b));
    sortedInput.forEach(player => console.log(player.name, player.score));
}
