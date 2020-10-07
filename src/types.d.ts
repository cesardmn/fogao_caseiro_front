interface ItemProps {
  item: {
    id: number,
    title: string,
    name: string,
    active: boolean,
    hot: boolean,
    price: number,
    type: string,
    sale: number,
    amount: number
  }
}


interface ComboProps {
  item: {
    acompanhamento: number,
    active: boolean,
    carne: number,
    frango: number,
    id: number,
    massa: number,
    peixe: number,
    title: string,
  }
}
