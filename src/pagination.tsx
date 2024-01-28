import "./styles/Pagination.css"
export const Pagination = ({moviesPerPage, totalMovies, currentPage, setCurrentPage
}: {moviesPerPage: number; 
    totalMovies: number; 
    currentPage: number; 
    setCurrentPage: any;}) => {

    const pageNumber = []

    console.log();
    
    for (let i = 1; i <= (totalMovies / moviesPerPage); i++){
        pageNumber.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (act: any) => {
        setCurrentPage(act)
    }

    return (
        <nav 
            className="pagination is-centered" 
            role="navigation" 
            aria-label="pagination"
        >
        <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousPage}>Previous</button> 
        {/* //Etiqueta de enlace como proporcionó nuestro Framewrok Bulma */}
        <button className={`pagination-next ${currentPage >= pageNumber.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Next page</button>
        <ul className="pagination-list">
          
          {pageNumber.map(noPage => (
            <li key={noPage}>
              <button className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
                onClick={() => onSpecificPage(noPage)}
              >{noPage}</button>
            </li>
            ))
          }
        </ul>
      </nav>  
    )
}