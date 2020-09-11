# Covi19 Data Scheduler (API) 🌐

A node server API that gathers daily statistic and geospatial data of the COVID-19 pandemic in Colombia.

## Tech/framework used

<b>Built with</b>

- [Express.js](https://expressjs.com)

## **API Endpoints**

**_By Department_**

(**GET**) Getting statistics of **ALL** departments from an especific date (yyyy-mm-dd):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/statistics/department/*yyyy-mm-dd*/

(**GET**) Getting statistics of an **especific department** (name) in an especific date (yyyy-mm-dd):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/statistics/department/*yyyy-mm-dd*/*name-of-the-department*

(**GET**) Getting geospatial data from an **especific department** (index):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/geometry/d/*index*

(**GET**) Getting **ALL** geospatial data from the departments (Sorted alphabetically by index):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/geometry/d/all

**_By Municipality_**

(**GET**) Getting statistics of **ALL** municipalities from an especific date (yyyy-mm-dd):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/statistics/municipality/*yyyy-mm-dd*/

(**GET**) Getting statistics of an **especific department** (name) in an especific date (yyyy-mm-dd):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/statistics/municipality/*yyyy-mm-dd*/*name-of-the-municipality*

(**GET**) Getting geospatial data from an **especific department** (index):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/geometry/m/*index*

(**GET**) Getting **ALL** geospatial data from the departments (Sorted alphabetically by index):

- https://covid19-datascheduler-api.herokuapp.com/api/v1/geometry/m/all

## Credits

Credits to roneryo for the project idea, insights and cooperation. Profile: https://github.com/roneryo

## License

MIT © [Gustavo Rios]()
