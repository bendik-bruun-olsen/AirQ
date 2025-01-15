- MapComponent:
  Load marker initially, instead of only on movement
  Should center on the last selected location (from context)

- MapPopup:
  Fix handling of popups that appear gray (AQI is 0); missing data

- InfoPage:
  Fix colors in table; too bright

- LocalStorage
  Add selected location(in context) to localstorage

- DashboardPage
  Add select menu for previous searches/selections

- ForecastGraph
  Filter out stats/days that contain null value
  Only display fields/values included in forecast.daily object

Add:

- Search function in Dashboard
