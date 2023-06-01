const {isInRangeDay, isInRangeYear} = require('./script');

test( 'test the day is valid', () => {
    expect(isInRangeDay(1)).toBe(true);
})

test( 'test the year is valid', () => {
    expect(isInRangeYear(2012)).toBe(true);
})


