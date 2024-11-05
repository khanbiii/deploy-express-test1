import moment from "momnet";

const getCurrentTime = () => {
    const now = moment().format("YYYY-MM-DD HH:mm:ss");
    return now;
};

export { getCurrentTime };