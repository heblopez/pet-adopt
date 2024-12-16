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
  ownerId: number;
  owner: {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
  };
}

export interface NewPetForm {
  name: string;
  category: string;
  breed: string;
  age: number;
  gender: string;
  weight: number;
  location: string;
  about: string;
  imageUrl: string;
}

export interface AuthUserData {
  email: string;
  userId: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  avatarUrl?: string;
}
