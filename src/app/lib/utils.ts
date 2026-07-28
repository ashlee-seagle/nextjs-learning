export function getQueryParams(searchParams:{
  search?:string,
  sortBy?:string,
  page?:string
}){
  const search = searchParams.search?.toLowerCase() || ''
  const sortBy = searchParams.sortBy?.toLowerCase() || ''
  const page = Number(searchParams.page) || 1 

  return {search, sortBy, page}
}