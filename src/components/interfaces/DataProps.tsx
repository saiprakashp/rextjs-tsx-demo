
export interface Field {
    title: string;
    inputType: string;
    labelText: string;
    chipText: string;
    keyText: string;
    optionValues: string[];
    checked: boolean;
}


export interface Datafields {
    title: string;
    key: string;
    fields: Field[];    
    showAccordian: boolean
}

export type MyPartsFilterState = {
    data: Map<string, Datafields>;
}
