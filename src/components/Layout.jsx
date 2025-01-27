import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='root'>

      {/* put nav bar here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;