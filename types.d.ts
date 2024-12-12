export interface Pet {
  petId: number;
  name: string;
  imageUrl: string;
  category: string;
  breed: string;
  age: number;
  location: string;
  gender: string;
  weight: number;
  about: string;
  userId: number;
  userFullName: string;
  userEmail: string;
  userImageUrl: string;
}

export interface newPetForm {
  name: string;
  category: string;
  breed: string;
  age: number;
  gender: string;
  weight: number;
  location: string;
  about: string;
}
