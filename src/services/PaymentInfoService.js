//GET all the USER data from the server
export async function getPaymentInfo() {
    const response = await fetch(`/server/payment_info`);
    return await response.json();
}

//POST USER
export async function postPaymentInfo(data) {
    const response = await fetch(`/server/payment_info`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            payment: data
        })
    })
    return await response.json();
}

//PUT USER 
export async function updatePaymentInfo(data) {
    const reponse = await fetch(`/server/payment_info`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            payment: data
        })
    })
    return await reponse.json();
}

//DELETE USER
export async function removePaymentInfo(data) {
    const reponse = await fetch(`/server/payment_info`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            payment: data
        })
    })
    return await reponse.json();
}