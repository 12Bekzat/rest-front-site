export function setLocalStorageWithExpiry(key, value, dateTime) {
    const item = {
        value: value,
        expiry: dateTime 
    };
    localStorage.setItem(key, JSON.stringify(item));
}