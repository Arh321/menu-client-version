export interface Main {
  status: string;
  message: string;
  result: Result;
  errors: null;
}

export interface Result {
  id: number;
  phone_number: string;
  first_name: string;
  last_name: string;
  national_code: string;
  birth_date: Date;
  is_registered: number;
}
