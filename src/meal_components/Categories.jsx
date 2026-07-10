import Loader from "./Loader.jsx"

const Categories = ({ categories, loading, error }) => {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-head">
          <h2>Pick a category</h2>
          <span className="count" id="category-count">
            {categories?.length ? `${categories.length} categories` : '0 categories'}
          </span>
        </div>

        <div className="row" id="category-grid">
          {loading && <Loader />}

          {error && (
            <div className="col-12">
              <p className="alert alert-warning">
                Our API seems to be down at the moment.
              </p>
            </div>
          )}

          {!loading && !error && categories && categories.length > 0 && categories.map((cat) => (
            <div className="col-12 col-sm-6 col-lg-4 card-col" key={cat.idCategory}>
              <article className="recipe-card">
                <span className="pin" aria-hidden="true" />
                <div className="recipe-thumb-wrap">
                  <img
                    className="recipe-thumb"
                    src={cat.strCategoryThumb}
                    alt={cat.strCategory}
                    loading="lazy"
                  />
                </div>
                <div className="recipe-body">
                  <div className="recipe-id">CAT. {String(cat.idCategory).padStart(2, '0')}</div>
                  <h3 className="recipe-title">{cat.strCategory}</h3>
                  <p className="recipe-desc">{cat.strCategoryDescription}</p>
                  <a href="#" className="recipe-link" data-category={cat.strCategory}>
                    View recipes <span className="arrow">→</span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories