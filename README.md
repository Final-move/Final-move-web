Development/Preview Deployment : https://signfiremanofficial.netlify.app

Hosting Platform : Vercel

Current development branch : main

Framework
REACT JS
Styling
Scss (core)
Tailwind CSS 
State Management
Context API
Major Dependencies & Libraries
React-icons - For dynamic icons (https://react-icons.github.io/react-icons/)
React-iconly - For dynamic icons (https://react-iconly.jrgarciadev.com/)
Lucide-React - For dynamic icons (https://lucide.dev)
React-Slick - For sliding animation (https://react-slick.neostack.com/docs/get-started)
Always try to minimize dependencies usage and write custom componenents, please feel free to create any custom functions that can replace some of these dependencies.

Dev. & Package Manager
Yarn
VsCode - Coding Editor
How to Contribute
Clone to your PC

Pre-requisites: Yarn, NPM, NEXT JS, React - Ensure you have these installed on your PC

run yarn install to install all dependencies

run yarn start to startup the server

For now, the most recent branch is the latest branch. Switch to the branch and then checkout to a new branch in this format name/task e.g git checkout imsigne029/blog-card where insigne029 is the name and blog is the task you want to work on or the bug you want to fix.

Run yarn run lint to get rid of any linting errors before pushing, otherwise it won't get deployed

When you are done developing, Open a PR to the dev branch or your branch on the main repo and request a review from finalmove.

Your code will be tested and reviewed. When valid, it'll be pulled into a branch that will be used for the next production deployment. This might not necessarily be the main branch and it will be deployed.

Style Guides
All components should be in the components folder, end with .jsx and the follow the naming convention. 
check the component folder structure to better understand
Create all contexts in the context folder.
Put all hooks in the hooks folder
Put all reusable functions in the utils folder
All pages should be lowercase and separated by hyphen if a single word cannot describe. Ideally a single word should describe a page
Accessibility
Minimize the use of divs and rather use appropriate html tags if it exists
Use titles, labels and appropriate aria labels in components
