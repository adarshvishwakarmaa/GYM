import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BMICalculator = () => {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [gender, setgender] = useState("");
  const [bgmi, setbgmi] = useState("");

  const bmiHandler = (e) =>{
    e.preventDefault();

    if(!height || !weight || !gender){
      toast.error("Please enter valid heignt,weight, and gender");
      return;
    }

    const heightInMeters = height / 100;
    const bmivalue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setbgmi(bmivalue)

    if(bmivalue < 18.5){
      toast.warning("You are underweight. Consider advice from a Healthcare Provider")
    }
    else if(bmivalue >= 18.5 && bmivalue < 24.9){
      toast.success(
        "You have normal weight. keep maintaing a healthy lifestyle"
      )//backend  kabh se bol rha baaki h vo sayad email ke use karega utna bakend nhi h isme 
    }
    else if(bmivalue >= 25 && bmivalue < 29.9){
      toast.warning(
        "You are overweight. Consider advice from a Healthcare Provider"
      )
    }else{
      toast.error(
        "You are in the obese range. It is recommended to advice from Healthcare Specailist.."
      )
    }
  }
  return (
    <section className="bmi">
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={bmiHandler}>
            <div>
              <label>Height (cm)</label>
              <input 
              type='number'
              value={height}
              onChange={(e)=>setheight(e.target.value)}
              />
            </div>   

            <div>
              <label>Weight (kg)</label>
              <input 
              type='number'
              value={weight}
              onChange={(e)=>setweight(e.target.value)}
              />
            </div> 

            <div>
              <label>Gender</label>
              <select 
              value={gender}
              onChange={(e)=>setgender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>  
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage"  />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
