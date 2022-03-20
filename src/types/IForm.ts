export interface IForm {
  name: string;
  email: string;
  birthday: string;
  address: string;
  city: string;
  uf: string;
  phone: string;
  maritalStatus: string;
  wantReceiveInformation: boolean;
  password: string;
  yourInterests: IInterests;
}

interface IInterests {
  technology: boolean;
  music: boolean;
  books: boolean;
  movie: boolean;
  travel: boolean;
}

export const FormData = {
  name: '',
  email: '',
  birthday: '',
  address: '',
  city: '',
  uf: 'SP',
  phone: '',
  maritalStatus: 'Solteiro(a)',
  wantReceiveInformation: false,
  yourInterests: {
    technology: false,
    music: false,
    books: false,
    movie: false,
    travel: false,
  },
  password: '',
} as IForm;
