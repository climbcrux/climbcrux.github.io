CRUX Climbing Inc - Website
===========================

This is the code for the CRUX Climbing Inc. website. It can be accessed at

climbcrux.org
cruxclimbing.org
lgbtrockclimbing.com
gayrockclimbing.com

If see a bug on the site and would like a change to be made please leave
an issue or contact website@climbcrux.org.


Pre-reqs
--------
You need to have a few things configured before you can contribute to the
website.

1. Ask the site admins to add you as a contributor on this repo

2. Setup SSH keys & add to your GitHub account (this is how we know it's you
committing code). `Instructions here
<https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh>`_

3. Access to CRUX's `credentials.js` file (you can find this in our ZoHo vault)


Setup
-----

To develop locally you must have `npm` installed. To install `npm`:

1. For Mac/Linux (via `Homebrew <https://brew.sh/>`_) ::

    >>> brew install node

2. For Windows:

    http://blog.teamtreehouse.com/install-node-js-npm-windows

Clone the repo ::

    >>> git clone git@github.com:climbcrux/climbcrux.github.io.git

Install dependencies ::

    >>> cd climbcrux.github.io
    >>> npm install


Local Development
-----------------

To run the code locally and see changes in a local browser ::

    >>> npm start

Before Deploying
----------------

Before deploying any code make sure that the following things have been done:

1. If adding a new page

   - Make sure the page has GA tracking added
   - Make sure the page has been added to the site structure & is preset in
     the footer
   - Make sure that the new route has been added to the sitemap

2. Otherwise

   - Make sure that the sitemap is updated with the last updated time

Deploying
---------

Before deploying code please have it reviewed in a branch.

To build your code change and push it to a branch for review ::

    >>> git checkout -b NEW_BRANCH_NAME
    >>> npm build
    >>> git add .
    >>> git commit -am "INSERT APPROPRIATE COMMIT MESSAGE"
    >>> git push origin NEW_BRANCH_NAME

Once the code is reviewed we'll merge it into master and it will be
served to the site within ~ 10 minutes.
