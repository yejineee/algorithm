function solution(participant, completion) {
  const personCountMap = new Map();

  participant.forEach((person) => {
    if (personCountMap.has(person)) {
      personCountMap.set(person, personCountMap.get(person) + 1);
    } else {
      personCountMap.set(person, 1);
    }
  });

  completion.forEach((person) => {
    const nextCount = personCountMap.get(person) - 1;
    if (nextCount === 0) {
      personCountMap.delete(person);
    } else {
      personCountMap.set(person, nextCount);
    }
  });

  return [...personCountMap.keys()][0];
}
