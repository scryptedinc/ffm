const FFM = require('../src/FFM');

describe('FFM', () => {
    describe('constructor', () => {
        it('should create an FFM object with the specified personality trait values', () => {
            const openness = 0.2;
            const conscientiousness = 0.3;
            const extraversion = 0.4;
            const agreeableness = 0.5;
            const neuroticism = 0.6;

            const ffm = new FFM(openness, conscientiousness, extraversion, agreeableness, neuroticism);

            expect(ffm.openness).toBe(openness);
            expect(ffm.conscientiousness).toBe(conscientiousness);
            expect(ffm.extraversion).toBe(extraversion);
            expect(ffm.agreeableness).toBe(agreeableness);
            expect(ffm.neuroticism).toBe(neuroticism);
        });

        it('should throw an error if any of the trait values are outside the valid range of 0 to 1.0 inclusive', () => {
            expect(() => {
                new FFM(0.2, 1.1, 0.4, 0.5, 0.6);
            }).toThrow();

            expect(() => {
                new FFM(0.2, 0.3, 0.4, -0.5, 0.6);
            }).toThrow();

            expect(() => {
                new FFM(0.2, 0.3, 0.4, 0.5, 1.5);
            }).toThrow();
        });
    });

    describe('createAveragePersonality', () => {
        it('should create an FFM object with trait values of 0.5 for each trait', () => {
            const avgFFM = FFM.createAveragePersonality();
            expect(avgFFM.openness).toBe(FFM.TRAIT_VALUE_AVG);
            expect(avgFFM.conscientiousness).toBe(FFM.TRAIT_VALUE_AVG);
            expect(avgFFM.extraversion).toBe(FFM.TRAIT_VALUE_AVG);
            expect(avgFFM.agreeableness).toBe(FFM.TRAIT_VALUE_AVG);
            expect(avgFFM.neuroticism).toBe(FFM.TRAIT_VALUE_AVG);
        });
    });

    describe('trait_isInRange', () => {
        it('should return true if the given value is between 0 and 1.0 inclusive', () => {
            expect(FFM.trait_isInRange(0)).toBe(true);
            expect(FFM.trait_isInRange(0.5)).toBe(true);
            expect(FFM.trait_isInRange(1.0)).toBe(true);
        });

        it('should return false if the given value is less than 0 or greater than 1.0', () => {
            expect(FFM.trait_isInRange(-0.1)).toBe(false);
            expect(FFM.trait_isInRange(1.1)).toBe(false);
        });
    });

    describe('constant values', () => {
        describe('TRAIT_VALUE_MIN', () => {
            test('should return 0', () => {
                expect(FFM.TRAIT_VALUE_MIN).toEqual(0);
            });
        });

        describe('TRAIT_VALUE_MAX', () => {
            test('should return 1', () => {
                expect(FFM.TRAIT_VALUE_MAX).toEqual(1);
            });
        });

        describe('TRAIT_VALUE_AVG', () => {
            test('should return 0.5', () => {
                expect(FFM.TRAIT_VALUE_AVG).toEqual(0.5);
            });
        });
    });

    describe('getters and setters', () => {
        let ffm;

        beforeEach(() => {
            ffm = new FFM(0.1, 0.2, 0.3, 0.4, 0.5);
        });

        it('should get the correct value for openness', () => {
            expect(ffm.openness).toBe(0.1);
        });

        it('should set the correct value for openness', () => {
            ffm.openness = 0.3;
            expect(ffm.openness).toBe(0.3);
        });

        it('should throw an error if the openness value is less than 0', () => {
            expect(() => {
                ffm.openness = -0.1;
            }).toThrow(Error('Openness value must be between 0 and 1.0 inclusive.'));
        });

        it('should throw an error if the openness value is greater than 1', () => {
            expect(() => {
                ffm.openness = 1.1;
            }).toThrow(Error('Openness value must be between 0 and 1.0 inclusive.'));
        });

        it('should get the correct value for conscientiousness', () => {
            expect(ffm.conscientiousness).toBe(0.2);
        });

        it('should set the correct value for conscientiousness', () => {
            ffm.conscientiousness = 0.7;
            expect(ffm.conscientiousness).toBe(0.7);
        });

        it('should throw an error if the conscientiousness value is less than 0', () => {
            expect(() => {
                ffm.conscientiousness = -0.1;
            }).toThrow(Error('Conscientiousness value must be between 0 and 1.0 inclusive.'));
        });

        it('should throw an error if the conscientiousness value is greater than 1', () => {
            expect(() => {
                ffm.conscientiousness = 1.1;
            }).toThrow(Error('Conscientiousness value must be between 0 and 1.0 inclusive.'));
        });

        it('should get the correct value for extraversion', () => {
            expect(ffm.extraversion).toBe(0.3);
        });

        it('should set the correct value for extraversion', () => {
            ffm.extraversion = 0.9;
            expect(ffm.extraversion).toBe(0.9);
        });

        it('should throw an error if the extraversion value is less than 0', () => {
            expect(() => {
                ffm.extraversion = -0.1;
            }).toThrow(Error('Extraversion value must be between 0 and 1.0 inclusive.'));
        });

        it('should throw an error if the extraversion value is greater than 1', () => {
            expect(() => {
                ffm.extraversion = 1.1;
            }).toThrow(Error('Extraversion value must be between 0 and 1.0 inclusive.'));
        });

        it('should get the correct value for agreeableness', () => {
            expect(ffm.agreeableness).toBe(0.4);
        });

        it('should set the correct value for agreeableness', () => {
            ffm.agreeableness = 0.7;
            expect(ffm.agreeableness).toBe(0.7);
        });

        it('should throw an error if the agreeableness value is less than 0', () => {
            expect(() => {
                ffm.agreeableness = -0.1;
            }).toThrow(Error('Agreeableness value must be between 0 and 1.0 inclusive.'));
        });

        it('should throw an error if the agreeableness value is greater than 1', () => {
            expect(() => {
                ffm.agreeableness = 1.1;
            }).toThrow(Error('Agreeableness value must be between 0 and 1.0 inclusive.'));
        });

        it('should get the correct value for neuroticism', () => {
            expect(ffm.neuroticism).toBe(0.5);
        });

        it('should set the correct value for neuroticism', () => {
            ffm.neuroticism = 0.8;
            expect(ffm.neuroticism).toBe(0.8);
        });

        it('should throw an error if the neuroticism value is less than 0', () => {
            expect(() => {
                ffm.neuroticism = -0.1;
            }).toThrow(Error('Neuroticism value must be between 0 and 1.0 inclusive.'));
        });

        it('should throw an error if the neuroticism value is greater than 1', () => {
            expect(() => {
                ffm.neuroticism = 1.1;
            }).toThrow(Error('Neuroticism value must be between 0 and 1.0 inclusive.'));
        });
    });

    describe('describe()', () => {
        test('returns a string sentence describing the personality traits of the current FFM object', () => {
            const ffm = new FFM(0.8, 0.4, 0.6, 0.9, 0.2);
            const expectedDescription = 'According to the Five Factor Model this personality is: strongly open, somewhat conscientious, moderately extraverted, strongly agreeable, and slightly neurotic.';
            expect(ffm.describe()).toEqual(expectedDescription);
        });

        test('returns a string sentence with "not" for traits with a Likert score of 5', () => {
            const ffm = new FFM(0.1, 0.2, 0.3, 0.4, 1.0);
            const expectedDescription = 'According to the Five Factor Model this personality is: not open, slightly conscientious, slightly extraverted, somewhat agreeable, and strongly neurotic.';
            expect(ffm.describe()).toEqual(expectedDescription);
        });

        test('returns a string sentence with "slightly" for traits with a Likert score of 4', () => {
            const ffm = new FFM(0.6, 0.5, 0.4, 0.7, 0.3);
            const expectedDescription = 'According to the Five Factor Model this personality is: moderately open, somewhat conscientious, somewhat extraverted, moderately agreeable, and slightly neurotic.';
            expect(ffm.describe()).toEqual(expectedDescription);
        });

        test('returns a string sentence with "somewhat" for traits with a Likert score of 3', () => {
            const ffm = new FFM(0.2, 0.7, 0.3, 0.9, 0.4);
            const expectedDescription = 'According to the Five Factor Model this personality is: slightly open, moderately conscientious, slightly extraverted, strongly agreeable, and somewhat neurotic.';
            expect(ffm.describe()).toEqual(expectedDescription);
        });

        test('returns a string sentence with "moderately" for traits with a Likert score of 2', () => {
            const ffm = new FFM(0.4, 0.6, 0.8, 0.1, 0.5);
            const expectedDescription = 'According to the Five Factor Model this personality is: somewhat open, moderately conscientious, strongly extraverted, not agreeable, and somewhat neurotic.';
            expect(ffm.describe()).toEqual(expectedDescription);
        });

        test('returns a string sentence with "strongly" for traits with a Likert score of 1', () => {
            const ffm = new FFM(1.0, 0.8, 0.5, 0.3, 0.6);
            const expectedDescription = 'According to the Five Factor Model this personality is: strongly open, strongly conscientious, somewhat extraverted, slightly agreeable, and moderately neurotic.';
            expect(ffm.describe()).toEqual(expectedDescription);
        });
    });

    describe('toJSON', () => {
        it('should return an object with normalized and likert scores for each trait (zero)', () => {
            const ffm = new FFM(0.0, 0.3, 0.5, 0.7, 0.9);
            const expectedJSON = {
                normalized: {
                    openness: 0.0,
                    conscientiousness: 0.3,
                    extraversion: 0.5,
                    agreeableness: 0.7,
                    neuroticism: 0.9,
                },
                likert: {
                    openness: 1,
                    conscientiousness: 2,
                    extraversion: 3,
                    agreeableness: 4,
                    neuroticism: 5,
                },
            };
            expect(ffm.toJSON()).toEqual(expectedJSON);
        });

        it('should return an object with normalized and likert scores for each trait (odds)', () => {
            const ffm = new FFM(0.1, 0.3, 0.5, 0.7, 0.9);
            const expectedJSON = {
                normalized: {
                    openness: 0.1,
                    conscientiousness: 0.3,
                    extraversion: 0.5,
                    agreeableness: 0.7,
                    neuroticism: 0.9,
                },
                likert: {
                    openness: 1,
                    conscientiousness: 2,
                    extraversion: 3,
                    agreeableness: 4,
                    neuroticism: 5,
                },
            };
            expect(ffm.toJSON()).toEqual(expectedJSON);
        });

        it('should return an object with normalized and likert scores for each trait (evens)', () => {
            const ffm = new FFM(0.2, 0.4, 0.6, 0.8, 1.0);
            const expectedJSON = {
                normalized: {
                    openness: 0.2,
                    conscientiousness: 0.4,
                    extraversion: 0.6,
                    agreeableness: 0.8,
                    neuroticism: 1.0,
                },
                likert: {
                    openness: 2,
                    conscientiousness: 3,
                    extraversion: 4,
                    agreeableness: 5,
                    neuroticism: 5,
                },
            };
            expect(ffm.toJSON()).toEqual(expectedJSON);
        });
    });

    describe('toString', () => {
        it('should return a string with normalized and likert scores for each trait (zero)', () => {
            const ffm = new FFM(0.0, 0.3, 0.5, 0.7, 0.9);
            const expectedString = 'FFM[Normalized:{O:0, C:0.3, E:0.5, A:0.7, N:0.9}, Likert:{O:1, C:2, E:3, A:4, N:5}]';
            expect(ffm.toString()).toBe(expectedString);
        });

        it('should return a string with normalized and likert scores for each trait (odds)', () => {
            const ffm = new FFM(0.1, 0.3, 0.5, 0.7, 0.9);
            const expectedString = 'FFM[Normalized:{O:0.1, C:0.3, E:0.5, A:0.7, N:0.9}, Likert:{O:1, C:2, E:3, A:4, N:5}]';
            expect(ffm.toString()).toBe(expectedString);
        });


        it('should return a string with normalized and likert scores for each trait (evens)', () => {
            const ffm = new FFM(0.2, 0.4, 0.6, 0.8, 1.0);
            const expectedString = 'FFM[Normalized:{O:0.2, C:0.4, E:0.6, A:0.8, N:1}, Likert:{O:2, C:3, E:4, A:5, N:5}]';
            expect(ffm.toString()).toBe(expectedString);
        });
    });
});