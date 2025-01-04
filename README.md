# 🕰️ 25 + 5 Clock Web App

A simple **Pomodoro Timer** built with **React** and **Tailwind CSS**. This app helps you manage your work and break intervals by allowing you to set a customizable session and break length. The timer will alternate between sessions and breaks, providing a productivity-focused timer with a beep when the time is up.

---

## 🚀 Live Demo  

Check out the live version of the 25+5 Clock:  
🔗 [25+5 Clock Web App](https://golam-rabby-25-5-clock.netlify.app/)

---

## 📸 Preview
![image](https://github.com/user-attachments/assets/baebc523-32aa-4e92-8714-56a6f452ffe1)


## 📝 Features  

- **Customizable Session & Break Length**: Set session and break times between 1 and 60 minutes.  
- **Start/Stop Functionality**: Start, pause, and resume the timer with a single button.  
- **Reset Functionality**: Resets the session and break lengths to default values (25 minutes for session and 5 minutes for break).  
- **Session & Break Switching**: Automatically switches between session and break when one completes, with a label indicating the current phase.  
- **Countdown Timer**: Displayed in `mm:ss` format with real-time updates.  
- **Audio Alert**: A beep sound plays when the countdown reaches zero to signal the end of the session or break.  
- **Responsive Design**: Fully responsive layout designed with Tailwind CSS for seamless use across devices.  
- **Increment/Decrement Functionality**: Easily change the session and break lengths with increment and decrement buttons.

---

## 📚 User Stories  

1. **Break Length Label**: Displays a label indicating the break length (e.g., `Break Length`).
2. **Session Length Label**: Displays a label indicating the session length (e.g., `Session Length`).
3. **Decrement Buttons**: Two buttons (`break-decrement`, `session-decrement`) to decrease break and session lengths.
4. **Increment Buttons**: Two buttons (`break-increment`, `session-increment`) to increase break and session lengths.
5. **Default Values**: Initial values for break and session lengths are 5 and 25 minutes respectively.
6. **Timer Label**: Displays `Session` or `Break` based on the active timer.
7. **Time Left Display**: Shows the remaining time in `mm:ss` format.
8. **Start/Stop Button**: Toggles the start and stop functionality of the timer.
9. **Reset Button**: Resets the timer and default values when clicked.
10. **Session Decrement**: Clicking `session-decrement` decreases session time by 1 minute.
11. **Session Increment**: Clicking `session-increment` increases session time by 1 minute.
12. **Break Decrement**: Clicking `break-decrement` decreases break time by 1 minute.
13. **Break Increment**: Clicking `break-increment` increases break time by 1 minute.
14. **Limits**: Session and break lengths cannot be less than or greater than 0 and 60 respectively.
15. **Start Timer**: Timer starts from the current session length when the start button is clicked.
16. **Time Countdown**: Updates the time every second in `mm:ss` format.
17. **Pause Timer**: Clicking the start button while the timer is running pauses the countdown.
18. **Resume Timer**: Timer resumes from the paused point when the start button is clicked again.
19. **Session Switch**: When session reaches 00:00, the timer switches to the break countdown.
20. **Break Switch**: When break reaches 00:00, the timer switches to the session countdown.
21. **Sound Alert**: A beep sound is played when either session or break ends.
22. **Beep Rewind**: The beep sound stops and rewinds when the reset button is clicked.
23. **Audio Element**: A `beep` audio element with a length of at least 1 second is used to signal the timer end.

---

## 🛠️ Technologies Used  

- **Frontend**:  
  - React  
  - Tailwind CSS  

- **Additional Libraries**:  
  - No additional libraries were used beyond React and Tailwind CSS.

---

## 🌟 Customizations  

- **Responsive Layout**: Designed to be fully responsive for mobile and desktop screens using Tailwind CSS.  
- **Timer Functionality**: Timely switching between session and break periods, with automatic countdowns.  
- **Audio Alerts**: Beep sound is integrated for notifying when the session or break ends.  

---

## 🔧 Setup and Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Golam-Rabby821/25-5-clock.git
   cd 25-5-clock
