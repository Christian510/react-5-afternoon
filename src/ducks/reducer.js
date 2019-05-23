
const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE";
const UPDATE_ADDRESS_TWO = "UPDATE_ADDRESS_TWO";
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "EMAIL";

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, { loanType: action.payload });
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, { propertyType: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });
        case UPDATE_PROP:
            return Object.assign({}, state, { updateProp: action.payload });
        case UPDATE_FOUND:
            return Object.assign({}, state, { updateFound: action.payload });
        case UPDATE_REAL_ESTATE_AGENT:
            return Object.assign({}, state, { updateRealStateAgent: action.payload });
        case UPDATE_COST:
            return Object.assign({}, state, { updateCost: action.payload });
        case UPDATE_DOWNPAYMENT:
            return Object.assign({}, state, { downPayment: action.payload });
        case UPDATE_CREDIT:
            return Object.assign({}, state, { updateCredit: action.payload });
        case UPDATE_HISTORY:
            return Object.assign({}, state, { updateHistory: action.payload });
        case UPDATE_ADDRESS_ONE:
            return Object.assign({}, state, { updateAddressOne: action.payload });
        case UPDATE_ADDRESS_TWO:
            return Object.assign({}, state, { updateAddressTwo: action.payload });
        case UPDATE_ADDRESS_THREE:
            return Object.assign({}, state, { updateAddressThree: action.payload });
        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, { updateFirstName: action.payload });
        case UPDATE_LAST_NAME:
            return Object.assign({}, state, { updateLastName: action.payload });
        case UPDATE_EMAIL:
            return Object.assign({}, state, { updateEmail: action.payload });

        default: return state;
    }
}
export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop,
    }
}
export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateRealStateAgent(agent) {
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: agent
    }
}

export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}
export function UPDATE_DOWNPAYMENT(downPayment) {
    return {
        type: UPDATE_DOWNPAYMENT,
        payload: downPayment
    }
}
export function UPDATE_CREDIT(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}
export function UPDATE_HISTORY(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}
export function UPDATE_ADDRESS_ONE(addressOne) {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: addressOne
    }
}
export function UPDATE_ADDRESS_TWO(addressTwo) {
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: addressTwo
    }
}
export function UPDATE_ADDRESS_THREE(addressThree) {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: addressThree
    }
}
export function UPDATE_FIRST_NAME(firstName) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}

export function UPDATE_LAST_NAME(lastName) {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}

export function UPDATE_EMAIL(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export default reducer;