import init, { add, evens } from './pkg/wasm_sample_1.js';

async function run() {
    console.log("New Script");
    await init();
    window.add_fun = add;
    window.evens = evens;

    const result = add(1, 2);
    console.log(`1 + 2 = ${result}`);

    const evs = evens(1, 100);
    evs.forEach(element => {
        console.log(element);
    });
}

run();