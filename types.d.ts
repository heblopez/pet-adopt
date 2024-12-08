export interface Pet {
  petId: number;
  name: string;
  imageUrl: string;
  category: string;
  breed: string;
  age: number;
  location: string;
  sex: string;
  weight: number;
  about: string;
  owner: User;
}

export interface User {
  userId: number;
  fullName: string;
  email: string;
  imageUrl: string;
}
