export async function getDeliveryMethod(){
    const response = await fetch('');
    const json = await response.json()

    return json;
}


