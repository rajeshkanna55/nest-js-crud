import 'bootstrap/dist/css/bootstrap.min.css';
import style from './navbar.module.css';
import yuva from '../public/assets/Yuyan-Logo-for-WEBSITE-Black.png.png';
import Image from 'next/image';
export default function Navbar(){
    const menuItems = ['Home','about','courses','Services','blog',"FAQ's", 'contacts'];
    return (
      <>
        <header>
          <div className={style.navbar}>
            <div className={style.logocomp}>
            <div className={style.sitename}>
              <Image
                src={yuva}
                alt={yuva}
                width={150}
                height={90}
                className={style.navimage}
              />
              </div>
              <div className={style.optcomp}>
                <ul className={style.optcont}>
                  {menuItems.map((values, index) => (
                    <li className={style.option} key={index}>
                      {values}
                    </li>
                  ))}
                </ul>
                <button className={style.signup}>
                  <a href="/signin" className={style.optbut}>
                    Login
                  </a>
                  /
                  <a href="/registration" className={style.optbut}>
                    Sing Up
                  </a>
                </button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}