import React from 'react';
import Navbar from '../../components/navbar'
import style from './registration.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material';
import main from '../../public/assets/main.png';
import Image from 'next/image';
import About from '../../components/about';
function Registration(){
    return (
      <>
        <Navbar />
        <section className={style.home}>
          <div className="container">
            <div className={style.content}>
              <div className={style.aligncont}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={6}  >
                    <p className={style.keep}>Keep Touching</p>
                    <p className={style.langcont}>
                      helping with any of your language barrier
                    </p>
                    <p className={style.unlock}>
                      unlock the power of your{" "}
                      <span className={style.spanlang}>Language</span>
                    </p>
                    <p className={style.unlock}>
                      <span className={style.spanlang}>Learn English</span>
                    </p>
                    <button className={style.coursebtn}>
                      View all courses
                    </button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}  lg={6}>
                    <div className={style.homepng}>
                      <Image src={main} alt="learn" className={style.learn} />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </section>
        <About />
      </>
    );
}

export default Registration;