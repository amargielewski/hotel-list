export type Hotels = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: Facility[];
  telephone: string;
  email: string;
  images: Image[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position?: Position;
};

export type Facility = {
  code: string;
};

export type Image = {
  url: string;
  alt?: string;
};

export type Position = {
  latitude: string;
  longitude: string;
  timezone: string;
};
