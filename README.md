XOrithm — Status of the Server
This project is a straightforward web application built with Next.js that lets users log in and view a dashboard with server status data.
It demonstrates how to use Next.js Router for easy navigation, a Material-UI interface for clean styling, and localStorage for user authentication.

How to Run the Application:
1.Clone the Repository-->
git clone https://github.com/mariareda/xorithm-server-status.git
cd xorithm-server-status
2.Install Dependencies--->npm install
3.Run the Development Server--->npm run dev
4.Open in Browser --->http://localhost:3000

 Overview of the Authentication Implementation
The application stores user information (email and password) in localStorage.
During login, data is retrieved from localStorage and compared.
If credentials match, the user is redirected to /dashboard.
Otherwise, an alert is shown for invalid credentials.

State Management
Email and password form input fields are managed using React’s useState.
Next.js useRouter handles navigation and page redirection.

Pages
1.Login Page (/login)
Includes email and password fields.
Compares credentials with localStorage data.

2.Signup Page (/signup)
Allows new users to register and saves their credentials locally.

3.Dashboard Page (/dashboard)
Displays server status data after successful login.

 Deployment
The app is deployed publicly on Vercel.
🔗 Live Demo -->https://drive.google.com/file/d/1vBFOlaZA_d4G-zIoT2EDHzKjkYzbXEFO/view?usp=sharing
💻 Source Code --> https://xorithm-server-status-jpix.vercel.app/
