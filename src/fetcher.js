const base_url="http://localhost:3001";
export const fetcher =async(url) =>
{
    let responseObject={errMessage: '',data: []}
    try
    {
    const response=await fetch(base_url+url);
    if(!response.ok)
    {
        throw new Error(`HTTP Error ${response.status}`);
    }
    const responseData= await response.json();
    responseObject.errMessage='';
    responseObject.data=responseData;
    }
    catch(err)
    {
        responseObject.errMessage=err.message;
    }
    return responseObject;

}
export const getCategories =() =>{
    return fetcher("/categories");
}
export const getProducts = (id) =>{
    return fetcher("/products?catId="+id);
}
export const getProductById = id =>{
     return fetcher('/products/'+id);
}
export const getProductsByQuery= query=>{
    return fetcher('/products?q='+query);
}