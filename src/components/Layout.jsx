import { Outlet } from 'react-router-dom';
import Header from './header';
function Layout() {
  return (
    <div className='root'>
    <div className='header'>
        <Header/>
    </div>
      {/* put nav bar here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;