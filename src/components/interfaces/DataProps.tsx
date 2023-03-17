
export interface Field {
    title: string;
    inputType: string;
    labelText: string;
    chipText: string;
    keyText: string;
    optionValues: string[];
}


export interface Datafields {
    title: string;
    key: string;
    fields: Field[];
}

type MyPartsFilterState = {
    data: Datafields[];
}
type MyPartsFilterAction = {
    data: Datafields[];
}

type DispatchType = (args: MyPartsFilterAction) => MyPartsFilterAction