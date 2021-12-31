CRUX Climbing Inc - Website
===========================

This is the code for the CRUX Climbing Inc. website. It can be accessed at

climbcrux.org
cruxclimbing.org
lgbtrockclimbing.com
gayrockclimbing.com

If you see a bug on the site and would like a change to be made please leave
an issue or contact website@climbcrux.org.


Setup
-----
You need to have a few things configured before you can contribute to the
website.

#. Ask the site admins to add you as a contributor on this repo
#. Setup SSH keys & add to your GitHub account (this is how we know it's you
committing code). `Instructions here
<https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh>`_
#. Install `node` and `npm` on your computer. `Instructions here
<https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>`_
#. Clone this GitHub repo ::

    $ git clone git@github.com:climbcrux/climbcrux.github.io.git

#. Navigate to the cloned repo and install dependencies ::

    $ cd climbcrux.github.io
    $ npm install

#. Setup local environment variable files

#. Sign in to Netlify ::

    $ netlify login

Making & Publishing Changes
---------------------------

You can make changes to the website by creating a new development branch and
running the Netlify development server locally ::

#. Create a new branch ::

  $ git checkout -b [BRANCH_NAME]

#. Run Netlify development server

  $ netlify dev

Once you're ready to publish your changes:

#. Commit your changes to GitHub ::

  $ git commit -am [COMMIT MESSAGE]

#. Open a PR in GitHub
#. Be sure the Netlify build succeeds and generates a Preview site
#. Have your PR changes reviewed

Once your PR is approved, you'll be able to deploy your site changes by:

#. Squash & Merging changes from your GitHub PR

Netflify will automatically build and publish site changes.
