function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

function sortString(str) {
    if (!str) {
      return;
    }
    str = str.split('');
    str = bubbleSort(str);
    str = str.join('');
    return str;
  }

const strings = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const result = [];

function groupingAnagram(strings) {
  const anagram = {}
  strings.forEach((el) => {
    const sortedString = sortString(el);
    if (anagram[sortedString]) {
      return anagram[sortedString].push(el);
    }
    anagram[sortedString] = [el];
  });
  return anagram;
}

const groupedAnagram = groupingAnagram(strings);
for (const sortedString in groupedAnagram) {
  result.push(groupedAnagram[sortedString])
}

console.log(result)

