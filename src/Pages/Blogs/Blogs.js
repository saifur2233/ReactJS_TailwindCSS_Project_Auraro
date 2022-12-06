import React from "react";

const Blogs = () => {
  return (
    <div className="bg-base-200 py-12">
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            There are four main types of state you need to properly manage in
            React apps:
          </p>
          <ol>
            <li>1. Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
          </ol>
          <p className="font-bold">Local (UI) state</p>
          <p>
            Local state is data we manage in one or another component. Local
            state is most often managed in React using the useState hook. For
            example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs.
          </p>
          <p className="font-bold">Global (UI) state</p>
          <p>
            Global state is data we manage across multiple components. Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least. A common example of
            global state is authenticated user state. If a user is logged into
            our app, it is necessary to get and change their data throughout our
            application. Sometimes state we think should be local might become
            global.
          </p>
          <p className="font-bold">Server state</p>
          <p>
            Data that comes from an external server that must be integrated with
            our UI state. Server state is a simple concept, but can be hard to
            manage alongside all of our local and global UI state. There are
            several pieces of state that must be managed every time you fetch or
            update data from an external server, including loading and error
            state. Fortunately there are tools such as SWR and React Query that
            make managing server state much easier.
          </p>
          <p className="font-bold">URL state</p>
          <p>
            Data that exists on our URLs, including the pathname and query
            parameters. URL state is often missing as a category of state, but
            it is an important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state. Try to imagine building a
            blog without being able to fetch a post based off of its slug or id
            that is located in the URL!
          </p>
        </div>
      </div>
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            How does prototypical inheritance work?
          </h2>
          <p>
            prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function. All JavaScript objects inherit
            properties and methods from a prototype:
          </p>
          <ul>
            <li>1. Date objects inherit from Date.prototype.</li>
            <li>2. Array objects inherit from Array.prototype.</li>
            <li>3. Player objects inherit from Player.prototype.</li>
          </ul>
          <p>
            The Object.prototype is on top of the prototype inheritance chain. ​
            Date objects, Array objects, and Player objects all inherit from
            Object.prototype.
          </p>
        </div>
      </div>
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            Unit testing is a type of software testing where individual units or
            software components are tested. Its purpose is to validate that each
            unit of code performs as expected. A unit can be anything you want
            it to be — a line of code, a method, or a class.
          </p>
          <ul>
            <li>
              1. Unit tests save time and money. Usually, we tend to test the
              happy path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. The time to fix these issues
              could’ve been used to build new features or optimize the existing
              system. Bear in mind that fixing bugs without running tests could
              also introduce new bugs into the system.
            </li>
            <li>
              2. Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions.
            </li>
            <li>3. It simplifies the debugging process.</li>
            <li>
              4. Unit testing is an integral part of extreme programming.
              Extreme programming is basically a
              “test-everything-that-can-possibly-break” programming strategy.
            </li>
            <li>
              5. Unit tests make code reuse easier. If you want to reuse
              existing code in a new project, you can simply migrate both the
              code and tests to your new project, then run your tests to make
              sure you have the desired results.
            </li>
            <li>
              6. Unit testing improves code coverage. A debatable topic is to
              have 100% code coverage across your application.
            </li>
          </ul>
        </div>
      </div>
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">React vs. Angular vs. Vue?</h2>
          <p className="font-bold">Angular:</p>
          <p>
            Angular has a steep learning curve, considering it is a complete
            solution, and mastering Angular requires you to learn associated
            concepts like TypeScript and MVC. Even though it takes time to learn
            Angular, the investment pays dividends in terms of understanding how
            the front end works.
          </p>
          <p className="font-bold">React:</p>
          <p>
            React offers a Getting Started guide that should help one set up
            React in about an hour. The documentation is thorough and complete,
            with solutions to common issues already present on Stack Overflow.
            React is not a complete framework and advanced features require the
            use of third-party libraries. This makes the learning curve of the
            core framework not so steep but depends on the path you take with
            additional functionality.
          </p>
          <p className="font-bold">Vue:</p>
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option. However, simplicity and flexibility of Vue is a
            double-edged sword — it allows poor code, making it difficult to
            debug and test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
