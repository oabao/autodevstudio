import useUserStore from "../stores/userStore";
import config from "../../config";

const API_URL = `${config.userBillingServiceUrl}/api`;

export const getInvoices = async () => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/billing/invoices`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch invoices');
    return response.json();
};

export const createSubscription = async (data: { userId: number, plan: string }) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/subscriptions/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create subscription');
    return response.json();
};

export const getUsage = async () => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/billing/usage`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch usage');
    return response.json();
};
