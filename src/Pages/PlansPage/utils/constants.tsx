import iconUser from '../../../assets/images/IconUser.png';
import iconAddUser from '../../../assets/images/IconAddUser.png';

export const PlansInitialState = [
  {
    name: "",
    price: 0,
    description: ["","",""],
    age: 0
  }
]

export const Steps = [
  'Planes y coberturas',
  'Resumen'
]

export const typeOfPlans = [
  {
    title: 'Para mí',
    description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    icon: iconUser
  },
  {
    title: 'Para alguien más',
    description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
    icon: iconAddUser
  },
]