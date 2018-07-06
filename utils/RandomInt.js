module.exports = {
    name: 'getRandomInt',
    description: 'Get a random int between "min" and "max"',
    execute(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
    },
};