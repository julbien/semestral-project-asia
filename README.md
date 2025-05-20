Project Overview
This is a web-based application designed to monitor and visualize student academic performance and attendance statistics. The dashboard provides real-time insights into student demographics, grades distribution, attendance patterns, and subject-wise performance.

Key Features
- Real-time student statistics
- Gender distribution visualization
- Grade trends analysis
- Attendance monitoring
- Pass/Fail ratio tracking
- Subject-wise student distribution
- Interactive charts and graphs

Dataset 
Student Performance

Database Schema
1. Students Table
   - Student demographics
   - Academic performance
   - Subject enrollment
   - Pass/Fail status

2. Attendance Table
   - Daily attendance records
   - Attendance status tracking
   - Student attendance history

---------------------------------------------------------------------------------------------------------
Installation Steps

1. Clone the Repository
bash
git clone [your-repository-url]
cd semestral-project-main

2. Backend Setup

1. Navigate to the backend directory:
bash
cd backend

2. Install dependencies:
bash
npm install

3. Create a `.env` file in the backend directory with the following content:
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=student_dashboard
PORT=3000

Replace `your_password` with your MySQL password.

---------------------------------------------------------------------------------------------------------
4. Set up the database:
   - Open MySQL command line
   - Go to backend folder and open the data.sql
   - Copy and paste it to mysql command line
---------------------------------------------------------------------------------------------------------
3. Frontend Setup

1. Navigate to the frontend directory:
bash
cd ../frontend


2. No additional installation is needed for the frontend as it uses CDN links.

---------------------------------------------------------------------------------------------------------
Running the Application

1. Start the backend server:
bash
cd backend
npm start

You should see:
Server is running on port 3000
Database connected successfully


2. Open the frontend:
   - Navigate to the `frontend` folder
   - Open `index.html` in your web browser
   - Or right click to index.html file and open with live server
          
---------------------------------------------------------------------------------------------------------
API Endpoints

The application provides the following REST API endpoints:

1. Student Statistics:
   - `GET /api/total-students` - Total student count
   - `GET /api/total-female` - Female student count
   - `GET /api/total-male` - Male student count

2. Academic Performance:
   - `GET /api/grades-trend` - Grade distribution
   - `GET /api/pass-fail` - Pass/Fail statistics

3. Attendance:
   - `GET /api/attendance-rate` - Attendance statistics

4. Subject Analysis:
   - `GET /api/student-subject` - Subject-wise distribution

---------------------------------------------------------------------------------------------------------
Dependencies List

Backend Dependencies
json
{
  "dependencies": {
    "express": "^4.18.2",    // Web framework
    "cors": "^2.8.5",        // Cross-origin resource sharing
    "dotenv": "^16.3.1",     // Environment variables
    "mysql2": "^3.6.1"       // MySQL database driver
  },
  "devDependencies": {
    "nodemon": "^3.0.1"      // Development server
  }
}


Frontend Dependencies
html
<!-- CDN Dependencies -->
- Bootstrap 5.3.0
- Font Awesome 6.4.0
- Chart.js (Latest)

System Dependencies
- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- Modern web browser

