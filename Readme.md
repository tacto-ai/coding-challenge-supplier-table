# Frontend Coding Challenge

## Getting started

To get this challenge working you need to execute first `yarn install` in the
root directory to install all the dependencies. After that you can use
`yarn mockdata` which will spin up a server with mock data on port `3001`. To
start the frontend development environment you can use `yarn dev`. That will
spin up a react frontend application on port `3000`.

## Challenge Description

### Scenario

Among many other functionalities, the [Tacto App](https://tacto.ai) shows our
customers' information about their supplier relationships in various tables. The
goal of this task is to display a table with all suppliers. For this purpose,
further information is needed, such as the contact person or the articles. You
encounter here a not optimal API design from a frontend point of view. That
means you have to aggregate data from different endpoints.

### Task

Currently, the table shows the supplier id, the name and the number of users, we
have contact information from. Unfortunately your fellow engineer did not finish
the task and the number of users shows always zero. This should be fixed and
show the actual number.

In addition, the table should show the user with the role manager, if any is in
the data, with email and the full name. In another column, the number of items
purchased from this supplier should be displayed. If there is an article that is
only purchased from this one supplier, a red warning icon should be displayed in
another column, which shows on mouse hover which article it is (id and name).

![Mockup](/docs/images/mockup.jpg)

### Acceptance Criteria

The data should be fetched over the store. Most of the functions that you need
to interact with the API and load data into the store should already be there.
Feel free to add more hooks or functions to the store, but try to incorporate
them into the project conventions.

## Tech Stack

- React.js
- Typescript
- [MUI](https://mui.com/material-ui/getting-started/installation/)
- [zustand](https://github.com/pmndrs/zustand)

## Boundaries

- Do not install any new libraries.
- Do not change the mock data.
- Follow project conventions.
- Use typescript
