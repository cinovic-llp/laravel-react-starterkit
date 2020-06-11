import React from 'react';

const Users = React.lazy(() => import('./Module/Users/Views/Users'));
const Dashboard = React.lazy(() => import('./Module/Dashboard/Views/Dashboard'));

const routes = [
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/users', exact: true,  name: 'Users', component: Users }
];

export default routes;
