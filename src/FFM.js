/**
 * @fileoverview This module exports the FFM class, which represents a human personality based on the Five Factor Model.
 * The Five Factor Model (FFM) is a widely used model of human personality that includes five traits: openness,
 * conscientiousness, extraversion, agreeableness, and neuroticism. The FFM class allows you to create, manipulate, and
 * describe personality profiles with these traits.
 * @module FFM
 */

/**
 * @class
 * @classdesc This class represents a human personality based on the Five Factor Model.
 * It includes five personality traits: openness, conscientiousness, extraversion, agreeableness, and neuroticism.
 * Each trait has a value between 0 and 1.0, with 0 representing the lowest possible score and 1.0 representing the highest.
 * The class provides methods for creating, manipulating, and describing personality profiles.
 * The normalized values can be converted to Likert scale (1-5) as well.
 */

class FFM {
    /**
     * Creates a new FFM object with the specified personality trait values.
     *
     * @param {number} openness - The openness trait value (must be between 0 and 1.0 inclusive).
     * @param {number} conscientiousness - The conscientiousness trait value (must be between 0 and 1.0 inclusive).
     * @param {number} extraversion - The extraversion trait value (must be between 0 and 1.0 inclusive).
     * @param {number} agreeableness - The agreeableness trait value (must be between 0 and 1.0 inclusive).
     * @param {number} neuroticism - The neuroticism trait value (must be between 0 and 1.0 inclusive).
     *
     * @throws {Error} If any of the trait values are outside the valid range of 0 to 1.0 inclusive.
     */
    constructor(openness, conscientiousness, extraversion, agreeableness, neuroticism) {
        if (!FFM.trait_isInRange(openness) || !FFM.trait_isInRange(conscientiousness) || !FFM.trait_isInRange(extraversion) || !FFM.trait_isInRange(agreeableness) || !FFM.trait_isInRange(neuroticism)) {
            throw new Error('Personality trait values must be between 0 and 1.0 inclusive.');
        }

        this._openness = openness;
        this._conscientiousness = conscientiousness;
        this._extraversion = extraversion;
        this._agreeableness = agreeableness;
        this._neuroticism = neuroticism;
    }

    /**
     * Creates a new "Average" FFM object with personality trait values of 0.5 for each of the five traits.
     *
     * @returns {FFM} The new FFM object with personality trait values of 0.5 for each of the five traits.
     */
    static createAveragePersonality() {
        return new FFM(FFM.TRAIT_VALUE_AVG, FFM.TRAIT_VALUE_AVG, FFM.TRAIT_VALUE_AVG, FFM.TRAIT_VALUE_AVG, FFM.TRAIT_VALUE_AVG);
    }

    /**
     * The minimum valid value for a personality trait.
     *
     * @type {number}
     */
    static get TRAIT_VALUE_MIN() {
        return 0.0;
    }

    /**
     * The maximum valid value for a personality trait.
     *
     * @type {number}
     */
    static get TRAIT_VALUE_MAX() {
        return 1.0;
    }

    /**
     * The average value for a personality trait.
     * 
     * @type {number}
     */
    static get TRAIT_VALUE_AVG() {
        return 0.5;
    }

    /**
    * Checks if a given personality trait value is within the valid range.
    *
    * @param {number} value - The personality trait value to check.
    *
    * @returns {boolean} - `true` if the personality trait value is within the valid range, `false` otherwise.
    */
    static trait_isInRange(value) {
        return value >= FFM.TRAIT_VALUE_MIN && value <= FFM.TRAIT_VALUE_MAX;
    }

    /**
     * Calculate the Likert score of a personality trait value on a scale of 1-5.
     * 
     * @param {number} value - The personality trait value.
     * 
     * @returns {number} The rounded Likert score on a scale of 1-5.
     * 
     * @throws {Error} If the personality trait value is not between 0 and 1.0 inclusive.
     */
    static calculateLikertScore(value) {
        if (!FFM.trait_isInRange(value)) {
            throw new Error('Personality trait values must be between 0 and 1.0 inclusive.');
        }

        const epsilon = 1e-10;
        const score = Math.ceil((value + epsilon) * 5);
        return Math.min(Math.max(score, 1), 5);
    }

    /**
    * Returns the openness trait value.
    *
    * @type {number}
    * @readonly
    */
    get openness() {
        return this._openness;
    }

    /**
     * Sets the openness trait value.
     *
     * @param {number} value - The new openness trait value to set.
     *
     * @throws {Error} If the value is outside the valid range of 0 to 1.0 inclusive.
     */
    set openness(value) {
        if (!FFM.trait_isInRange(value)) {
            throw new Error('Openness value must be between 0 and 1.0 inclusive.');
        }
        this._openness = value;
    }

    /**
     * Returns the conscientiousness trait value.
     *
     * @type {number}
     * @readonly
     */
    get conscientiousness() {
        return this._conscientiousness;
    }

    /**
     * Sets the conscientiousness trait value.
     *
     * @param {number} value - The new conscientiousness trait value to set.
     *
     * @throws {Error} If the value is outside the valid range of 0 to 1.0 inclusive.
     */
    set conscientiousness(value) {
        if (!FFM.trait_isInRange(value)) {
            throw new Error('Conscientiousness value must be between 0 and 1.0 inclusive.');
        }
        this._conscientiousness = value;
    }

    /**
     * Returns the extraversion trait value.
     *
     * @type {number}
     * @readonly
     */
    get extraversion() {
        return this._extraversion;
    }

    /**
     * Sets the extraversion trait value.
     *
     * @param {number} value - The new extraversion trait value to set.
     *
     * @throws {Error} If the value is outside the valid range of 0 to 1.0 inclusive.
     */
    set extraversion(value) {
        if (!FFM.trait_isInRange(value)) {
            throw new Error('Extraversion value must be between 0 and 1.0 inclusive.');
        }
        this._extraversion = value;
    }

    /**
     * Returns the agreeableness trait value.
     *
     * @type {number}
     * @readonly
     */
    get agreeableness() {
        return this._agreeableness;
    }

    /**
     * Sets the agreeableness trait value.
     *
     * @param {number} value - The new agreeableness trait value to set.
     *
     * @throws {Error} If the value is outside the valid range of 0 to 1.0 inclusive.
     */
    set agreeableness(value) {
        if (!FFM.trait_isInRange(value)) {
            throw new Error('Agreeableness value must be between 0 and 1.0 inclusive.');
        }
        this._agreeableness = value;
    }

    /**
     * Returns the neuroticism trait value.
     *
     * @type {number}
     * @readonly
     */
    get neuroticism() {
        return this._neuroticism;
    }

    /**
     * Sets the neuroticism trait value.
     *
     * @param {number} value - The new neuroticism trait value to set.
     *
     * @throws {Error} If the value is outside the valid range of 0 to 1.0 inclusive.
     */
    set neuroticism(value) {
        if (!FFM.trait_isInRange(value)) {
            throw new Error('Neuroticism value must be between 0 and 1.0 inclusive.');
        }
        this._neuroticism = value;
    }

    /**
     * Generates a sentence describing the personality traits of the current FFM object based on the Five Factor model.
     * It has 3,125 unique possible descriptive statements based on 5 levels and 5 traits.
     *
     * @returns {string} A sentence that describes the personality traits of the current FFM object.
     * The sentence includes the level of each trait based on Likert scale numbers and is formatted as follows:
     * "According to the Five Factor model this personality is: [level of openness], [level of conscientiousness],
     * [level of extraversion], [level of agreeableness], and [level of neuroticism]."
     * The levels are indicated by adverbs such as "strongly", "moderately", "somewhat", "slightly", and "not".
     * The written trait names are "open", "conscientious", "extraverted", "agreeable", and "neurotic".
     */
    describe() {
        const traits = {
            open: this._openness,
            conscientious: this._conscientiousness,
            extraverted: this._extraversion,
            agreeable: this._agreeableness,
            neurotic: this._neuroticism,
        };

        const descriptions = {
            open: '',
            conscientious: '',
            extraverted: '',
            agreeable: '',
            neurotic: '',
        };

        for (const trait in traits) {
            const score = FFM.calculateLikertScore(traits[trait]);
            if (score === 1) {
                descriptions[trait] = `not ${trait}`;
            } else if (score === 2) {
                descriptions[trait] = `slightly ${trait}`;
            } else if (score === 3) {
                descriptions[trait] = `somewhat ${trait}`;
            } else if (score === 4) {
                descriptions[trait] = `moderately ${trait}`;
            } else if (score === 5) {
                descriptions[trait] = `strongly ${trait}`;
            }
        }

        return `According to the Five Factor Model this personality is: ${descriptions.open}, ${descriptions.conscientious}, ${descriptions.extraverted}, ${descriptions.agreeable}, and ${descriptions.neurotic}.`;
    }

    /**
     * Returns a JSON-compatible object representing the current FFM object with normalized and Likert scores for each trait.
     *
     * @returns {object} JSON object with normalized and Likert scores for each personality trait.
     * The keys correspond to "openness", "conscientiousness", "extraversion", "agreeableness", and "neuroticism".
     * The values are floating point numbers between 0 and 1 inclusive.
     */
    toJSON() {
        const likert = {
            openness: FFM.calculateLikertScore(this._openness),
            conscientiousness: FFM.calculateLikertScore(this._conscientiousness),
            extraversion: FFM.calculateLikertScore(this._extraversion),
            agreeableness: FFM.calculateLikertScore(this._agreeableness),
            neuroticism: FFM.calculateLikertScore(this._neuroticism),
        };

        return {
            normalized: {
                openness: this._openness,
                conscientiousness: this._conscientiousness,
                extraversion: this._extraversion,
                agreeableness: this._agreeableness,
                neuroticism: this._neuroticism,
            },
            likert,
        };
    }

    /**
     * Returns a custom string representation of the current FFM object in shorthand format.
     *
     * @returns {string} A string in the format "FFM[O:<openness>, C:<conscientiousness>, E:<extraversion>, A:<agreeableness>, N:<neuroticism>]".
     * The trait names and values are enclosed in square brackets and separated by commas.
     * The trait values are floating point numbers between 0 and 1 inclusive.
     */
    toString() {
        const normalized = `O:${this._openness}, C:${this._conscientiousness}, E:${this._extraversion}, A:${this._agreeableness}, N:${this._neuroticism}`;
        const likert = `O:${FFM.calculateLikertScore(this._openness)}, C:${FFM.calculateLikertScore(this._conscientiousness)}, E:${FFM.calculateLikertScore(this._extraversion)}, A:${FFM.calculateLikertScore(this._agreeableness)}, N:${FFM.calculateLikertScore(this._neuroticism)}`;
        return `FFM[Normalized:{${normalized}}, Likert:{${likert}}]`;
    }
}

module.exports = FFM;