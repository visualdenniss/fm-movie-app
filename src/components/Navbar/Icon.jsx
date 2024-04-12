const Icon = ({ icon, alt }) => {
    switch (icon) {
      case 'home':
        return <HomeIcon alt={alt} />;
      case 'bookmarked':
        return <BookmarkIcon alt={alt} />;
      case 'movies':
        return <MoviesIcon alt={alt} />;
      case 'tv-series':
        return <TVIcon alt={alt} />;
      case 'anime':
        return <AnimeIcon alt={alt} />;
      case 'tmdb':
        return <TmdbIcon alt={alt} />;
      default:
        return null;
    }
  };
  
  export default Icon;

  // SVG icons
const HomeIcon = () => (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        fill="currentColor"
      />
    </svg>
  );
  
  const MoviesIcon = () => (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
        fill="currentColor"
      />
    </svg>
  );
  
  const TVIcon = () => (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
        fill="currentColor"
      />
    </svg>
  );
  
  const BookmarkIcon = () => (
    <svg width={17} height={20} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
        fill="currentColor"
      />
    </svg>
  );


 const AnimeIcon = () => (
    <svg className='rotateOnHover' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" id="cursedSeal">
        <g id="tomoe1">
          <circle cx="50" cy="25" r="17.5" fill='currentColor' id="tomoe1a"/>
          <path d="M 32.5,24.3 C 32,7.9 56.9,-6.8 71.7,7.7 65.8,4.9 57,6 54.9,8.9 Z" fill='currentColor' id="tomoe1b"/>
        </g>
        <use href="#tomoe1" transform="rotate(120 50 50)" fill='currentColor' id="tomoe2"/>
        <use href="#tomoe1" transform="rotate(-120 50 50)" fill='currentColor' id="tomoe3"/>
    </svg>
  )



  export const AnimeEpisodesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8095 15.7143V10C13.8095 9.49483 13.6089 9.01035 13.2516 8.65314C12.8944 8.29593 12.41 8.09525 11.9048 8.09525H3.33335C2.82818 8.09525 2.34369 8.29593 1.98648 8.65314C1.62927 9.01035 1.42859 9.49483 1.42859 10V15.7143C1.42859 16.2195 1.62927 16.704 1.98648 17.0612C2.34369 17.4184 2.82818 17.6191 3.33335 17.6191H11.9048C12.41 17.6191 12.8944 17.4184 13.2516 17.0612C13.6089 16.704 13.8095 16.2195 13.8095 15.7143Z" stroke="url(#paint0_linear_1678_1571)" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.7143 15.7143V9.05239C15.7143 8.29463 15.4133 7.56791 14.8774 7.03209C14.3416 6.49627 13.6149 6.19525 12.8571 6.19525H12.8524L4.28571 6.21049" stroke="url(#paint1_linear_1678_1571)" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.6191 13.8095V8.10191C17.6191 7.09156 17.2177 6.1226 16.5033 5.40817C15.7889 4.69375 14.8199 4.29239 13.8095 4.29239H13.8029L6.19049 4.30477" stroke="url(#paint2_linear_1678_1571)" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_1678_1571" x1="1.59096" y1="12.0462" x2="13.5773" y2="12.6763" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF5956"/>
          <stop offset="1" stop-color="#EE1E38"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1678_1571" x1="4.43559" y1="10.1443" x2="15.5044" y2="10.6816" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF5956"/>
          <stop offset="1" stop-color="#EE1E38"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1678_1571" x1="6.34037" y1="8.24062" x2="17.4092" y2="8.77805" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF5956"/>
          <stop offset="1" stop-color="#EE1E38"/>
        </linearGradient>
      </defs>
    </svg>
      )

    
    export const Star = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.00917 2.04751L9.03584 4.10084C9.17584 4.38668 9.54917 4.66084 9.86417 4.71334L11.725 5.02251C12.915 5.22084 13.195 6.08418 12.3375 6.93584L10.8908 8.38251C10.6458 8.62751 10.5117 9.10001 10.5875 9.43834L11.0017 11.2292C11.3283 12.6467 10.5758 13.195 9.32167 12.4542L7.57751 11.4217C7.26251 11.235 6.74334 11.235 6.42251 11.4217L4.67834 12.4542C3.43001 13.195 2.67167 12.6408 2.99834 11.2292L3.41251 9.43834C3.48834 9.10001 3.35417 8.62751 3.10917 8.38251L1.66251 6.93584C0.810841 6.08418 1.08501 5.22084 2.27501 5.02251L4.13584 4.71334C4.44501 4.66084 4.81834 4.38668 4.95834 4.10084L5.98501 2.04751C6.54501 0.933342 7.45501 0.933342 8.00917 2.04751Z" stroke="#FFAD49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    }

    const TmdbIcon = () => (
      <svg width={20} height={20} className='rotate-90' xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
          fill="currentColor"
        />
      </svg>
    );
    