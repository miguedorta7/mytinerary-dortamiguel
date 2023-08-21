export default function SearchCities() {
  return (
          <div className="form-check form-check-inline">
            <form
              id="buscador-opciones"
              className="d-flex justify-content-end "
              role="search"
            >
              <div
                id="formCategorias"
                className="d-flex flex-wrap formCategories"
              ></div>
              <input
                id="inputBuscador"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                id="buttonAccess"
                className="btn btn-outline-primary"
                type="submit"
              >
                Search
                <i
                  className="bi
                bi-search"
                ></i>
              </button>
            </form>
          </div>
  )
}
