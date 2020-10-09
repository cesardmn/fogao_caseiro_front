interface ItemProps {
    id: number,
    title: string,
    name: string,
    active: boolean,
    hot: boolean,
    price: number,
    type: string,
    sale: number,
    amount: numbe,
}

interface ComboProps {
    acompanhamento: number,
    active: boolean,
    carne: number,
    frango: number,
    id: number,
    massa: number,
    peixe: number,
    title: string,
}


interface CardProps {
    type: string,
    title: string,
    subtitle: string,
}

interface OptionProps {
    active: boolean
    hot: boolean
    id: number
    name: string
    price: number
    sale: number
}

interface ChoiceListProps {
    title: string,
    amount: number,
    options?: [OptionProps],
    items?: [ItemProps],
}

interface ChoiceItemProps {
    item: OptionProps | ItemProps
}
