The user interface is based on React. Most components are derived from Material-UI components and customized for their usage in the application.

The Pending Requests page uses the Card component to display orders that have already been placed. The details of the order are passed along as the component's properties. Clicking on "Accept Request" will take you to the respective accept-request port of the order where the person accepting the request is supposed to enter their details. After confirming, the backend makes changes to the database and removes it from pending_orders_list.

The navigation bar at the top of each page is a modified Material-UI AppBar. Another React component that has been used extensively is the 