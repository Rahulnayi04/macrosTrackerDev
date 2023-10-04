import './Hero.css'
import Typewriter from './Typewriter';
const Hero = () => {
    return (
        <>
        <div className='app-container'>
        <div className="spherical-info">
        <Typewriter
  textArray={[
    "Tracking macros empowers healthy choices.",
    "Whole foods fuel a balanced lifestyle.",
    "Macro balance supports fitness goals.",
    "Prioritize real food for lasting health."
  ]}
/>
        <p>
          Macros-Tracker is an innovative app that helps you track your daily macronutrient intake.
          Whether you're trying to lose weight, gain muscle, or maintain a healthy diet, Macros-Tracker
          makes it easy to monitor your protein, carbohydrates, and fat consumption.
        </p>
      </div>
      </div>
      </>
    )
}

export default Hero;