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
