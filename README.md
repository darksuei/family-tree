<h1> Family Tree </h1>
This is a web application that allows users to input their family tree and view others. Users can sign up and sign in to access the application's features. The application is built using JavaScript, D3, Express, and MongoDB.

<h2>Features</h2>
<ul>
<li>User authentication: users can sign up and sign in to access the application's features.</li>
<li>Family tree input: users can input their family tree and save it to the database.</li>
<li>Family tree visualization: family trees are visualized using D3.</li>
<li>User profiles: users can view their own family tree as well as others.</li>
<li>Search: users can search for other family trees by name.</li>
</ul>

<h2>Requirements</h2>
<p>To run this application, you will need to have the following installed on your system:</p>
<ul>
<li>Node.js (v12 or later)</li>
<li>MongoDB</li>
</ul>

<h2>Installation</h2>
<ol>
<li>Clone the repository:
git clone https://github.com/your-username/family-tree-web-app.git
cd family-tree-web-app
  </li>
<li>Install the dependencies:
npm install
  </li>
<li>Create a .env file in the root directory and add the following:
  <ol>
    <li>PORT=3000</li>
    <li>MONGODB_URI=mongodb://localhost/family-tree-web-app</li>
    <li>SESSION_SECRET=your_session_secret</li>
Replace your_session_secret with a random string that will be used to sign session cookies.
  </li>
<li>Start the application:
npm start
  </li>
  </ol>
The application should now be running on http://localhost:3000.

<h2>Usage</h2>
<ol>
<li>Sign up for an account.</li>
<li>Sign in to access the application's features.</li>
<li>Input your family tree using the form provided.</li>
<li>View your family tree as well as others by searching for them by name.</li>
</ol>
<h2>Contributing</h2>
  <p>Contributions to this project are welcome. To contribute:</p>
<ol>
<li>Fork the repository.</li>
<li>Create a new branch for your changes.</li>
<li>Make your changes and commit them with descriptive commit messages.</li>
<li>Push your changes to your fork.</li>
<li>Create a pull request to merge your changes into the main repository.</li>
</ol>
<h2>License</h2>
This project is licensed under the MIT License.





