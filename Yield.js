function* process() {
    console.log('Start process 1');
    console.log('Pause process2 until call next()');

    yield;

    console.log('Resumed process2');
    console.log('Pause process3 until call next()');

    let parms = yield {age: 0};
    console.log("Passed by final process next(90): " + parms);

    console.log('Resumed process3');
    console.log('End of the process function');
}
let p = process();
p.next();
p.next();

let p1 = process();
p1.next();
p.next(20);
p.next();
p.next();
p.next();
p.next();
p.next();