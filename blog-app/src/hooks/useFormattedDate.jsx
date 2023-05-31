import { useEffect, useState } from "react"
import { format} from 'date-fns'
const useFormattedDate = (str,outputFormat = 'yyyy-mm-dd HH:mm:ss') =>{
    const [date, setDate] = useState();
    useEffect(()=>{
        if(str){
            let formatDate = format(new Date(str), outputFormat)
            setDate(formatDate);
        }
    },[str,outputFormat])

    return date
}
export default useFormattedDate