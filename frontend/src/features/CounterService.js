import Api from "../app/axiosConfig";

const incCounter = async () => {
    const response = await Api.get(
       '/increment',
    );

    return response.data
}

const viewCounter = async () => {
    const response = await Api.get(
       '/view',
    );

    return response.data
}

export default {viewCounter , incCounter}