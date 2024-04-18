'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import styles from './pagination.module.css'

const Pagination = () => {

    const searchParams = useSearchParams(); 
    const pathname = usePathname();
    const { replace } = useRouter();
    let currentPage = Number(searchParams.get('page')) || 1;

    if(currentPage > 500) {
        currentPage = 500
        const params = new URLSearchParams(searchParams);
        params.set('page', currentPage.toString());
        replace(`${pathname}?${params.toString()}`);
    }

    if(currentPage < 1 || isNaN(currentPage)) {
        currentPage = 1
        const params = new URLSearchParams(searchParams);
        params.set('page', currentPage.toString());
        replace(`${pathname}?${params.toString()}`);
    }

    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        replace(`${pathname}?${params.toString()}`);  
    }

    let paginationBtns; 
    if (currentPage ===1 ) {
        paginationBtns = [1,2,3]
    } else if(currentPage > 1 && currentPage < 500) {
        paginationBtns = [(currentPage-1), currentPage, currentPage+1]
    } else if  (currentPage === 500) {
        paginationBtns = [(currentPage-2), currentPage-1, currentPage]
    } 
    return (
            <div class={`flex items-center gap-4 ${styles.pagination}`}>
                <button class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-full select-none hover:bg-bgSecondary active:bg-soft disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" disabled={currentPage === 1} type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                    Previous
                </button>
                <div className="flex items-center gap-2">
                        {paginationBtns.map(pageNumber => (
                            <PaginationButton
                            key={pageNumber}
                            pageNumber={pageNumber}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                            />
                        )) }
    
                </div>
                <button class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-full select-none hover:bg-bgSecondary active:bg-soft disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" disabled={currentPage === 500} onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>
            </div>

    )
}

export default Pagination



const PaginationButton = ({ pageNumber, currentPage, handlePageChange }) => {
    // Define the button classes based on the pageNumber and currentPage
    const buttonClasses = `relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white stroke-current ${
      pageNumber === currentPage ? 'bg-bgSoft' : 'hover:bg-bgSecondary'
    } active:bg-soft disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none shadow-md shadow-gray-900/10 ${
      pageNumber === currentPage ? 'focus:opacity-[0.85]' : 'focus:shadow-none'
    } ${
      pageNumber === currentPage ? 'active:opacity-[0.85]' : 'active:shadow-none'
    }`;
  
    return (
      <button className={buttonClasses} type="button" onClick={()=>{handlePageChange(pageNumber)}}>
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {pageNumber}
        </span>
      </button>
    );
  };