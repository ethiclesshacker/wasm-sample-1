use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: u32, b: u32) -> u32 {
    return a + b;
}

#[wasm_bindgen]
pub fn evens(start: i32, end: i32) -> Vec<i32> {
    let mut n = start;
    let mut nums = Vec::new();
    while n <= end {
        if n % 2 == 0 {
            nums.push(n);
        }
        n = n + 1;
    }
    return nums;
}
