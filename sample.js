const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000, 'foo'));
const promise1 = Promise.resolve(3);

const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result)));

// expected output:
// "fulfilled"
// "rejected"


class A{
  constructor
}
