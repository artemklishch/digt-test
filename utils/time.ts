export const formatDate = (value: string | number): string => {
    try {
        return new Date(value).toLocaleString();
    } catch (err) {
        console.error(err)
        return "";
    }
}