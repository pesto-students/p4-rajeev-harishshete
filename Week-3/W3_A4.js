function createStack() {
  let items= [];  
  return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      },
      display(){
        console.log(items);
      }
    };
  }
  
  const stack = createStack();
  console.log("Array At Beggining");
  stack.display();
  stack.push(10);
  stack.push(5);
  //stack.pop(); // => 5
  console.log("Array After Push operation");
  stack.display();
  console.log("Attempted to access array directly:" + stack.items);
  
  





  //console.log(stack.items); // => [10]
  
  //stack.items = [10, 100, 1000]; // Encapsulation broken!
  //console.log("Final Stack " + stack.items);