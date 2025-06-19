import { merge } from "../merge";

describe('merge sorted arrays function', () => {

  test('All arrays empty', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('One element each, all distinct', () => {
    expect(merge([1], [3], [2])).toEqual([1, 2, 3]);
  });

  test('Only collection_1 has elements', () => {
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
  });

  test('Only collection_2 has elements', () => {
    expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
  });

  test('Only collection_3 has elements', () => {
    expect(merge([], [], [4, 5, 6])).toEqual([4, 5, 6]);
  });

  test('All arrays with overlapping values', () => {
    expect(merge([1, 5, 6], [6, 4, 2], [5, 6, 10])).toEqual([1, 2, 4, 5, 5, 6, 6, 6, 10]);
  });

  test('All arrays with unique values', () => {
    expect(merge([1, 3, 5], [6, 4, 2], [7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});