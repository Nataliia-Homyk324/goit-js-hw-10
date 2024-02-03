const form = document. querySelector ('form');
  form.addEventListener('submit', createPromise);

  function createPromise(event) {
    event.preventDefault();
  
    const delayInput = document.querySelector('input[name="delay"]');
    const stateInput = document.querySelector('input[name="state"]:checked');
  
    const delay = delayInput.value;
    const state = stateInput.value;
  
    const promise = new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        setTimeout(() => resolve(delay), delay);
      } else if (state === 'rejected') {
        setTimeout(() => reject(delay), delay);
      }
    });
  
    promise.then((delay) => {
      console.log(`Fulfilled promise in ${delay}ms`);
    }).catch((delay) => {
      console.log(`Rejected promise in ${delay}ms`);
    });
  }
