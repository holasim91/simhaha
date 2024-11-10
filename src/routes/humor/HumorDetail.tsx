import {useParams} from "react-router-dom";



export default function HumorDetail() {
    const {humorId} = useParams()
    return(
        <div>
            {humorId}번째 글
        </div>
    )
}