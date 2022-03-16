
@nearBindgen
export class Counter {
    private counter: i32 = 0;
    incrementCounter(value: i32): void {
        this.counter += value;
    }
    decrementCounter(value: i32) : void{
        this.counter -= value;
    }
    getCounter(): i32 {
        return this.counter;
    }
    resetCounter() : void{
        this.counter = 0;
    }
}
