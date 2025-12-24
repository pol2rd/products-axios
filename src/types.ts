export interface Rating {
    rate: number,
    count: number
}

export interface Product {
  id: number,
  title: string,
  price: number,
  desctiption: string,
  category: string,
  image: string,
  rating: Rating
}

export interface Category {
    id: string, 
    name: string
}

