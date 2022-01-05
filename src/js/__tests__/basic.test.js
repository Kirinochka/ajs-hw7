import Validator from '../Validator';

test('should validate', () => {
  expect(Validator.validateUsername('wqe43r')).toBeTruthy();
  expect(Validator.validateUsername('wqe43-r')).toBeTruthy();
  expect(Validator.validateUsername('wqe433r')).toBeTruthy();
  expect(Validator.validateUsername('wqe43_-r')).toBeTruthy();
  expect(Validator.validateUsername('wqe43_-')).toBeFalsy();
  expect(Validator.validateUsername('1wqe43_-r')).toBeFalsy();
  expect(Validator.validateUsername('1wqe4344_-r')).toBeFalsy();
});
