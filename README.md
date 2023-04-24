# Five Factor Model Personality Class

This npm package provides an easy-to-use JavaScript class for working with the Five Factor Model (FFM) of human personality. It allows you to create, manipulate, and analyze personality profiles based on the FFM.

## Installation

To install the package via npm, run the following command in your project directory:

\`\`\`bash
npm install scrypted-ffm
\`\`\`

## Usage

To use the \`FFM\` class in your project, first require it:

\`\`\`javascript
const { FFM } = require('five-factor-model-personality').Scrypted;
\`\`\`

Then, create a new \`FFM\` object with the specified personality trait values (all trait values must be between 0 and 1.0 inclusive):

\`\`\`javascript
const personality = new FFM(openness, conscientiousness, extraversion, agreeableness, neuroticism);
\`\`\`

Alternatively, you can create a default "average" personality where all traits are set to 0.5 using the following helper function:

\`\`\`javascript
const personality = FFM.createAveragePersonality();
\`\`\`

The class provides several functions for working with the FFM object:

### Public Functions

- \`FFM.createAveragePersonality()\`: Creates a new "Average" FFM object with personality trait values of 0.5 for each of the five traits.

- \`FFM.calculateLikertScore(value)\`: Calculate the Likert score of a personality trait value on a scale of 1-5.

- \`personality.describe()\`: Generates a sentence describing the personality traits of the current FFM object based on the Five Factor model.

- \`personality.toJSON()\`: Returns a JSON-compatible object representing the current FFM object with normalized and Likert scores for each trait.

- \`personality.toString()\`: Returns a custom string representation of the current FFM object in shorthand format.

### Getters and Setters

The FFM class also provides getters and setters for each of the five personality traits:

- \`personality.openness\`: Get or set the openness trait value.
- \`personality.conscientiousness\`: Get or set the conscientiousness trait value.
- \`personality.extraversion\`: Get or set the extraversion trait value.
- \`personality.agreeableness\`: Get or set the agreeableness trait value.
- \`personality.neuroticism\`: Get or set the neuroticism trait value.

These can be used to access and modify the individual trait values of an FFM object.

## Example

\`\`\`javascript
const FFM = require('scrypted-ffm');

const personality = new FFM(0.7, 0.5, 0.9, 0.6, 0.3);
console.log(personality.describe());

personality.openness = 0.8;
console.log(personality.toString());
\`\`\`