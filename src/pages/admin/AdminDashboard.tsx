import { Layout } from '@/components/Layout';
import DisplayPage from '@/pages/DisplayPage';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';

export default function AdminDashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <PWAInstallPrompt />
        <DisplayPage />
      </div>
    </Layout>
  );
}