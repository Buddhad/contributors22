import { useEffect , useState} from "react";

const Preloader =()=> {


    const [ loader , setLoader ] = useState();

    useEffect( () => {
        setTimeout( setLoader('none') , 1000)
    },[])

    return (
        <>

            <div className="preloader" style={{display: loader }}>
                <div className="loader-child">
                     <span class="loader"></span>        
                </div>  
            </div>
        
        </>
    )
}

export default Preloader;