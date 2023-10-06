export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container hero-1">
        <h1 className="heading-primary title">
          ComfyZone - Where Home and Street Styles Converge!
        </h1>
        <p className="hero-description">
          Our clothing effortlessly goes from home to the streets, providing you
          with versatile, fashionable options for any setting. Experience the
          ease of dressing for both comfort and style with ComfyZone.
        </p>
        <div className="btn-box">
          <button className="btn btn-full">Start Wearing Comfy</button>
          <button className="learn-more">
            <span className="circle" ariaHidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
}
