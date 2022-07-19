//calling api
//use redux thunk (middleware) to extend redux stores capabilities 
export const getProducts = ()=> async(dispatch)=>{
    try {

        //call api
        //
        const data = await fetch("/getproducts",{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
            })
        // const data = await fetch("/getproducts",{
        //         method:"GET",
        //         headers:{
        //             "Content-Type":"application/json"
        //         }
        // });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res});
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response});
    }
}