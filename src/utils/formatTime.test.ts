import { expect, test } from 'vitest'
import formatTime from './formatTime';

test('reads correct times', () => {
  expect(formatTime(0)).toBe('0:00');
  expect(formatTime(1)).toBe('0:00');
  expect(formatTime(999)).toBe('0:00');
  expect(formatTime(1000)).toBe('0:01');
  expect(formatTime(150000)).toBe('2:30');
});