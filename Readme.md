# Frontend Coding Challenge

## Getting started

To get this challenge working you need to execute first `yarn install` in the
root directory to install all the dependencies. After that you can use
`yarn mockdata` which will spin up a server with mock data on `http://localhost:3001`. To
start the frontend development environment you can use `yarn dev`. That will
spin up a react frontend application on `http://localhost:3000`.

## Challenge Description

### Scenario

Among many other functionalities, the [Tacto App](https://tacto.ai) shows our
customers' information about their supplier relationships in various tables. The
goal of this task is to display a table with all suppliers. For this purpose,
further information is needed, such as the contact person or the articles. You
encounter here a not optimal API design from a frontend point of view. That
means you have to aggregate data from different endpoints.

### Task

Currently, the table displays the supplier ID, the name, and the number of
contacts/users we have from that supplier. Unfortunately, your fellow engineer
did not finish the task, and the number of users always shows as zero. This
issue should be fixed, and the table should reflect the actual number.

In addition, the table should display the user with the role manager, if such
a user exists in the data, along with their email and full name. In another
column, the number of items purchased from this supplier should be shown. If
there is an article that is exclusively purchased from this supplier, a red
warning icon should be displayed in a separate column. Upon hovering the mouse
over this icon, the details of the article (ID and name) should be revealed.

![Mockup](/docs/images/mockup.jpg)

**Checklist:**

- [ ] Show number of contacts of the supplier
- [ ] Display user with role `manager`
- [ ] Warning about exclusivly purchased articles
  - [ ] Show articles on hover

### Acceptance Criteria

The data should be fetched over the store. Most of the functions that you need
to interact with the API and load data into the store should already be there.
Feel free to add more hooks or functions to the store, but try to incorporate
them into the project conventions.

## Submission

Please fork this repository privately add commit on top of the already made
changes.

Please use proper commit messages and divide your task into several useful
commits, where the commit message documents your decisions made.

Invite the following Tacto employees to your private fork, so that we can
see your changes:

- [@bentocin](https://github.com/bentocin)
- [@Linus-Boehm](https://github.com/Linus-Boehm)

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
