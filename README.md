# AirQ: Be Aware of Your Air

## Overview

AirQ is an application that enables you to monitor and explore air quality data across the globe. It provides detailed insights into air quality indices (AQI), particulate matter levels, temperature, humidity, and forecasts, presented through an intuitive interface. It is designed for both informational and practical use, with three main pages:

- **Dashboard**: Displays detailed air quality data for a selected location.
- **Map**: Allows users to explore AQI values on a global map and view further details in the dashboard page.
- **Info**: Provides additional details about AQI statuses and their meanings.

---

## Features

### Dashboard Page

- **Selected Location Details**:
  - Current temperature.
  - Last updated timestamp.
  - Overall air quality status (e.g., "Moderate," "Unhealthy").
- **Gauge Graphs**:
  - Displays particulate matter levels (PM2.5 and PM10) and their corresponding statuses.
- **Humidity Pie Chart**:
  - Displays the current humidity levels visually.
- **Forecast Line Graphs**:
  - Shows forecasts for various air quality parameters over time.

### Map Page

- **Global AQI Map**:
  - Interactive map displaying AQI values through markers for different locations.
  - Clicking on a location marker shows a popup that allows the user to navigate to the Dashboard for detailed information on said location.

### Info Page

- **AQI Status Table**:
  - Comprehensive table listing different AQI statuses and their numerical ranges, as well as associated health implications and cautionary statements.

---

## How to Use

Open [this link](https://air-q-nine.vercel.app/) in a modern web browser to access the website.

---

## Technologies Used

- **Vite**: Fast build tool and development server.
- **React**: Frontend framework for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Material-UI**: Component library for building modern and responsive user interfaces.
- **React Router Dom**: For routing and navigation between pages.
- **Leaflet**: For rendering the interactive global AQI map.
- **Recharts**: For visualizing data in charts (e.g., pie charts, line graphs, gauge graphs).
- **Font Awesome**: For using scalable vector icons.

---

## Future Enhancements

- Add a search bar for easier navigation to specific locations.
- Add support for saving favorite locations.
- Enable real-time data updates via WebSockets or server-sent events.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear messages.
4. Submit a pull request.

---

## Acknowledgments

Special thanks to the providers of air quality data APIs and the contributors to open-source libraries used in this project.
