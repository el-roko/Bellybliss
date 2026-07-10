

const Hero = () => {
  return (
    <section className="hero">
  &nbsp;&nbsp;
  <div className="container">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div className="row align-items-center">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="col-lg-7">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="eyebrow">14 categories, one kitchen</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1>
          What's <em>cooking</em> today?
        </h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p className="lead">
          Every dish starts as a category on a card. Browse beef, pasta, vegan,
          dessert and more — pulled straight from TheMealDB — and find what
          you're making tonight.
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#categories" className="btn-menu">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Browse the
          menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>→</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="col-lg-5 d-none d-lg-flex justify-content-center">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <svg
          className="hero-mark"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <circle
            cx={150}
            cy={150}
            r={120}
            stroke="#E4A825"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.5"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <circle
            cx={150}
            cy={150}
            r={90}
            stroke="#7C9070"
            strokeWidth="1.5"
            opacity="0.4"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <path
            d="M100 90 L100 210 M100 90 C110 90 112 100 108 110 L104 120 L104 210"
            stroke="#F3EFE6"
            strokeWidth={3}
            strokeLinecap="round"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <path
            d="M180 90 L180 210 M180 90 C165 95 165 130 180 140 L180 210"
            stroke="#F3EFE6"
            strokeWidth={3}
            strokeLinecap="round"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <circle cx={150} cy={150} r={4} fill="#C1432A" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </svg>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    &nbsp;&nbsp;
  </div>
</section>

  )
}

export default Hero