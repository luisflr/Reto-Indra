export interface PlansInterface {
  name: string
  price: number
  description: string []
  age: number
}

export interface DataOfPlansInterface {
  list: PlansInterface[]
}

export interface PlansComponentsList {
  plans: PlansInterface[], 
  handleSelectPlan: (plan: PlansInterface) => void
  isDiscounted: boolean,
  className: string
}