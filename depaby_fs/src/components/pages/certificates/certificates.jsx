import { useEffect, useState } from "react";
import FetchReadDocuments from "../../../scripts/AbstractFetchRead/FetchReadDocuments";
import DocumentCard from "../../DocumentCard/DocumentCard";

function Certificates() {
    const [documentsArray, setDocumentsArray] = useState([{}]);

    useEffect(() => {
        documents_read();
    }, []);

    async function documents_read() {
        const class_instance = new FetchReadDocuments();
        const repsonse = await class_instance.read({
            category: 'certificates',
        });

        setDocumentsArray(repsonse);
    }

    return (
        <div className="container">
            <h1>Сертификаты</h1>
            <div className="depaby_documents">
                {
                    documentsArray.map(function (value, index) {
                        return (
                            <DocumentCard
                                key={index}
                                data={value}
                            />
                        )
                    }) 
                }
            </div>
        </div>
    );
}

export default Certificates;
