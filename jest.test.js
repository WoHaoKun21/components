// 通用的测试工具

test("test common matcher", () => {// toBe表示完全相同，类似于===
    expect(2 + 2).toBe(4); // 2+2等于4
    expect(2 + 2).not.toBe(5); // 2+2不等于4/5
})

test("test to be true or false", () => {
    expect(1).toBeTruthy(); // 1是true
    expect(0).toBeFalsy(); // 0是false
});

test("test number", () => {
    expect(4).toBeGreaterThan(3); // 4比3要大
    expect(2).toBeLessThan(3); // 指定值比目标值小
})

test("test object", () => {
    expect({ name: "石鹏飞" }).toEqual({ name: "石鹏飞" })
})