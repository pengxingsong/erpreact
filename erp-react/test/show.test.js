import functions from '../src/Show';

test('test:/src/show.sum', () => {
  console.log(functions.sum(2, 2))
  expect(functions.sum(2, 2)).toBe(4);
});
test('test:/src/show.fetchUser', () => {
    return functions.fetchUser().then(data => {
      console.log(data)
      expect(data.id).toBe(1);
    });
})