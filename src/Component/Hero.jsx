
const Hero = () => {
    return (
<div
  className="hero rounded-2xl h-[600px]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/mJLv3xJ/portrait-indigenous-person-integrated-into-modern-life.jpg)",
  }}>
  {/* <div className="hero-overlay bg-opacity-60 py-24 rounded-2xl"></div> */}
  <div className="hero-content text-neutral-content text-center py-24">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-[#0BE58A] border-[#0BE58A]">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero;