import React from 'react'

const WorkoutSession = () => {
  return (
   <section className='workout'>
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>Achieve your fitness goals with our top-rated workout sessions! Whether you're a beginner or an athlete, we have the perfect training plan to help you build strength, endurance, and flexibility.</p>
        <img src="/img5.jpg" alt="workout"/>
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamp</h1>
        <p>Join our specialized bootcamps designed to push your limits and transform your body. Each program is crafted to target specific fitness goals with expert-led training.</p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>Build muscle and improve your overall strength with expert-designed weightlifting techniques, progressive overload, and core strengthening workouts.</p>
          </div>

          <div>
            <h4>HIIT Bootcamp (High-Intensity Interval Training)</h4>
            <p>Burn fat and boost endurance with short bursts of intense exercises followed by rest periods, maximizing calorie burn in minimal time.</p>
          </div>

          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>Elevate your heart rate with jump rope, sprints, and agility drills to improve cardiovascular health and stamina.</p>
          </div>

          <div>
            <h4>Functional Fitness Bootcamp</h4>
            <p>Enhance everyday movements with exercises that improve mobility, balance, and coordination, helping you stay strong in daily activities.</p>
          </div>

          <div>
            <h4>Yoga & Flexibility Bootcamp</h4>
            <p>Improve flexibility, reduce stress, and strengthen your core with guided yoga and stretching sessions, perfect for recovery days.</p>
          </div>

        </div>
      </div>
   </section>
  )
}

export default WorkoutSession
