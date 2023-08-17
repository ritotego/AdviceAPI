import { useState } from "react";
import { AdviceInterface } from '../intercace/adviceInterface';

const API = process.env.REACT_APP_API

export const UseHook = () => {

    const [advice, setAdvice] = useState<AdviceInterface>()

    const handleAdvice = async () => {

        try {
            if (API) {
                const response = await fetch(API)
                const data = await response.json();

                const save = JSON.stringify(data.slip.advice)

                setAdvice({
                    slip: {
                        advice: save,
                        id: data.slip.id
                    }
                });

            } else {
                throw console.error('Error');

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    return {
        advice,
        handleAdvice
    }
}