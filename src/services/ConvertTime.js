const ConvertTime = (valueInSeconds) => {
    const hours = parseInt(valueInSeconds / 3600);
    const minutes = parseInt((parseInt(valueInSeconds) % 3600) / 60);
    const seconds = (parseInt(valueInSeconds) % 3600) % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
};

export default ConvertTime;
