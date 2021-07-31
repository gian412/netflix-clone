import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

interface Content {
    docId: string;
}

const useContent = (target: string) => {
    const [content, setContent] = useState<Content[]>([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        if (!firebase) return;
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return { [target]: content };
};

export default useContent;
