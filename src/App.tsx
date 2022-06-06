const DevicePage = lazy(() => import('./pages/Device/device.page'));

import { ReactNotifications } from 'react-notifications-component'
import { lazy, Suspense } from 'react';
import Loading from './components/Loading/loading.component';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ReactNotifications />
      <DevicePage />
    </Suspense>
  );
}

export default App;
