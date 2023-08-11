import { Grid } from '@mui/material';
import style from './about.module.css';
import Image from 'next/image';
import group from '../public/assets/group.webp.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  
export default function About(){
    return (
      <>
        <section className={style.about}>
          <div className={style.abtcont}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div className={style.abtmain}>
                  <div className="container">
                    <div className={style.abtmaincont}>
                      <div className='container'>
                        <p className={style.abtpara}>
                          being multilingual is a fundamental skill you need to
                          acquire
                        </p>
                        <p className={style.abtadpara}>
                          In today’s increasingly interdependent and
                          hyper-connected world, it has become essential for
                          everyone to learn a foreign language and master
                          communication skills.
                        </p>
                        <button className={style.abtbtn}>
                      Learn More
                    </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div className={style.imagcont}>
                <Image src={group} alt="group" className={style.groupimg}/>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </>
    );
}