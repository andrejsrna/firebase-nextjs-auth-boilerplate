// pages/dashboard.tsx (Pages Directory)

'use client'; // Ensure this is a Client Component

import withAuth from '@/hoc/withAuth';
import DashboardContent from '@/components/DashboardContent';

const DashboardPage = withAuth(DashboardContent);

export default DashboardPage;
