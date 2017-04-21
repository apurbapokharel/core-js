describe('Buffer', () => {

	it('has fromUnicode and toUnicode methods',() => {
		expect(Buffer.toUnicode(Buffer.fromUnicode('{x:"test"}'))(.toEquals('{x:"test"}');
	});
	
	it('has fromBase64 and toBase64 methods',() => {
		expect(Buffer.toBase64(Buffer.fromBase64('dGVzdA=='))).toEquals('dGVzdA==')
	});
	
	it('has an equals method',() => {
		const buffer1 = Buffer.fromUnicode('test1');
		const buffer2 = Buffer.fromUnicode('test2');
		const buffer3 = Buffer.fromUnicode('test3');
		
		expect(buffer1.equals(buffer2)).toEquals(true);
		expect(buffer1.equals(buffer3)).toEquals(false);
	});
});