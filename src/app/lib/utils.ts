export function getQueryParams(searchParams:{
  search?:string,
  sortBy?:string,
  page?:string
}){
    const search = searchParams.search?.toLowerCase() || '';

    const rawSortBy = searchParams.sortBy?.toLowerCase();
    let sortBy;
    if (rawSortBy === undefined){
        sortBy = '';
    } else {
        sortBy = ['alpha', 'popular', 'recent'].includes(rawSortBy) ? rawSortBy : null;
    } 
    
    const rawPage = searchParams.page;

    let page;
    if (rawPage === undefined){
    page = 1;
    } else {
    const parsedPage = Number(rawPage);
    page = Number.isNaN(parsedPage) ? 0 : parsedPage;
    }

  return {search, sortBy, page}
}