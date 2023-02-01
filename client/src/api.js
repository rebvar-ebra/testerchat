export const fetchResponse = async (chat) => {
    try {
        const response = await fetch("http://localhost:3000", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message) => message.message).join(" \n ")
            }),
        });
        console.log(`Response from server:`, response);

        const data = await response.json();
        console.log(`Parsed response data:`, data);
        return data;
    } catch (e) {
        console.error(`Error while fetching response:`, e);
    }
};
