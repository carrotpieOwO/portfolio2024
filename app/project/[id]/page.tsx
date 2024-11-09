import { getData } from "@/app/utill/notion";
import Renderer from "../../components/Renderer";


const Detail = async ({ params }: { params: { id: string } }) => {
    const recordMap = await getData(params.id);

    return (
        <Renderer recordMap={recordMap} rootPageId={params.id} />
    );
};
 
export default Detail;