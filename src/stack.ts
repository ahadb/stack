/**
 * @description Creates a stack based on an array. A stack is a simple data structure that has order
 * @module Stack
 * @author: Ahad Bokhari
 */

export default class Stack {

  public stack: Array<any>;
  public length: number;

  constructor() {
    this.stack = [];
    this.length = 0;
  }

  /**
   * @public method
   * @description push an item that gets added to the top of the stack
   * @param {*} value
   */
  push(value: any): void {
    this.length++;
    this.stack.push(value);
  }

  /**
   * @public method
   * @description remove item from the top of the stack
   * @return {item}
   */
  pop(): any {
    if (this.length === 0) {
      return;
    }

    this.length--;
    return this.stack.pop();
  };

  /**
   * @public method
   * @description see which element is next in line
   * @return {element}
   */
  peek(): number {
    return this.stack[this.length - 1];
  };

  /**
   * @public method
   * @description converts stack to string
   * @return {element}
   */
  toString(): string {
    return this.stack.toString();
  };
}
