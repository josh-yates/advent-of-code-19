const values: string[] = [];

const doMaths = (val: number): number => {
    return Math.floor(val / 3) - 2;
};

const result = values.map(v => doMaths(Number(v))).reduce((a, b) => a + b, 0);
console.log(result);