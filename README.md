# Front-End Developer Tech Task

Hi 👋, thanks for interviewing with us and taking the time to work on this task. 

We are interested to learn more about how you approach structuring, styling and testing applications. This is a small exercise that will help us understand how you approach building and composing components and provide you with an opportunity to make design decisions which we can discuss together afterwards. 

If you have any questions or need further clarification of the exercise, we're here to help! Helping each other out is a big part of working at AFS. Just give us a shout at `careers@accommodationforstudents.com` and we'll gladly help. 👍




## Requirements 

The task is to build a simplified version of a proposed redesign to our search functionality.
The search bar has two filters, property type and number of bedrooms which can be combined, allowing the user
to view the properties that most closely match their criteria. We have provided some mock data, `properties.json`, which
we would like you to use to render the search results.

Please build and style the task per the design and also provide test coverage.
The design is not responsive, and you only need to build for desktop. 

## Resources

- You can find the designs and assets for the task in Figma here: [Figma design file](https://www.figma.com/design/fLyFZKFp63XUHzpdLPvWfi/Front-End-Tech-Task---June-2024?node-id=0-1&t=RY0yllktWqUmMEi6-1).
- Our brand font `Apax` that is required for the task can be found in `/public/fonts`.
- The mock property data is located in `src/data/properties.json`

## Functionality

Below is an explanation of how the search bar filters should function:

- When no filters are applied, all results are shown
- When a property type filter is applied, only the relevant property types are shown in the results, i.e. applying the `House` filter only shows houses
- Multiple property type filters can be applied at the same time, i.e filtering by both `House` and `Flat`
- When the bedroom filter is applied only properties with that specific number of bedrooms are shown, i.e. the 5 bedrooms filter is applied, only 5 bedroom properties are shown
- Filters can be combined, i.e. property type filters `House` and `Flat` with number of bedrooms 5
- The filter count on the property type indicates how many property type filters are applied, i.e. if `House` and `Flat` are both applied the filter count shows 2
- The design is not responsive, you only need to build for desktop.
