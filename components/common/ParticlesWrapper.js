import style from "../../styles/particle.module.css";

const ParticlesWrapper = ({ children }) => {
  return (
    <div className={style.space}>
      <div className={style.particle}></div>
      <div className={style.particle}></div>
      <div className={style.particle}></div>
      <div className={style.particle}></div>
      {children}
    </div>
  );
};

export default ParticlesWrapper;
