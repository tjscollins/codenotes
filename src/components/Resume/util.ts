const addressFormat = require('address-format');

export function emailLink(email: string): string {
    return `mailto:${email}`;
}

export function removeProtocol(url: string): string {
    return url.replace(/.*?:\/\//g, '');
}

export function notEmail(url: string): boolean {
    return url.slice(0,6) !== "mailto";
}

export function formatAddress(location): string {
    let { address, city, region, postalCode, countryCode }  = location;
    let addressList = addressFormat({
        address: address,
        city: city,
        subdivision: region,
        postalCode: postalCode,
        countryCode: countryCode
    });
    return addressList.join('<br/>');
}

export function concat() {
    let res = '';

    for(let arg in arguments){
        if (typeof arguments[arg] !== 'object') {
            res += arguments[arg];
        }
    }

    return res;
};