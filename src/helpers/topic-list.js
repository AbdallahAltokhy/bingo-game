import _ from 'lodash';

let firstHalf = [
  { value: '0', clicked: false },
  { value: '1', clicked: false },
  { value: '2', clicked: false },
  { value: '3', clicked: false },
  { value: '4', clicked: false },
  { value: '5', clicked: false },
  { value: '6', clicked: false },
  { value: '7', clicked: false },
  { value: '8', clicked: false },
  { value: '9', clicked: false },
  { value: '10', clicked: false },
  { value: '11', clicked: false }]
let middleSquare = { value: '12', clicked: true }
let secondHalf = [
  { value: '13', clicked: false },
  { value: '14', clicked: false },
  { value: '15', clicked: false },
  { value: '16', clicked: false },
  { value: '17', clicked: false },
  { value: '18', clicked: false },
  { value: '19', clicked: false },
  { value: '20', clicked: false },
  { value: '21', clicked: false },
  { value: '22', clicked: false },
  { value: '23', clicked: false },
  { value: '24', clicked: false },
];

let topicList = [..._.shuffle(firstHalf), middleSquare, ..._.shuffle(secondHalf)];

export default topicList;