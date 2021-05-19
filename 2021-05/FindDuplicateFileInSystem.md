# [LeetCode] Find Duplicate File in System (in JS)

### 📖 문제

[Find Duplicate File in System](https://leetcode.com/explore/challenge/card/may-leetcoding-challenge-2021/600/week-3-may-15th-may-21st/3747/)
```
"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
```
file content가 같은 파일들의 path의 리스트를 반환하라

### 💡 Fact
- file content가 같은 path끼리 그룹을 지어야 한다. 이때, file content를 key로 둔 HashMap을 사용하면, 탐색시간이 O(1)이 된다. 

### 🚎 접근
- key가 content, value는 path list인 Map을 선언한다.
- paths들을 순회한다.
  - `' '` 로 path를 나누었을 때, 첫 번째는 directory이고, 나머지는 파일의 정보들이다.
  - 파일의 정보들을 순회한다.
    - 파일 정보를 file name과 file content로 분리한다.
    - file content인 키가 Map에 존재하면, 기존 value에 해당 파일 directory / file name을 추가한다.
    - 없으면, 새롭게 file content가 key이고, value가 dir/name인 리스트를 추가한다.
- Map의 value 중에서 길이가 하나인 것은 중복된 것이 아니므로, 길이가 2이상인 것들을 골라낸다.
- 위의 결과를 반환한다.

### 🧭 복잡도
path의 길이 N에 각 path가 분리될 수 있는 길이 x
- 공간 복잡도 : O(N * x) 
- 시간 복잡도 : O(N * x)

### 📝 코드

```javascript
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function (paths) {
  const contentMap = new Map();

  paths.forEach((path) => {
    const [dir, ...fInfoList] = path.split(' ');

    fInfoList.forEach((fInfo) => {
      const [fname, fcontent] = fInfo.match(/[\w\d. ]+/g);
      const dupList = contentMap.has(fcontent) ? contentMap.get(fcontent) : [];
      contentMap.set(fcontent, [...dupList, `${dir}/${fname}`]);
    });
  });

  const result = [...contentMap.values()].filter(
    (dupList) => dupList.length > 1
  );
  return result;
};
```
