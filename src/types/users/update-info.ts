export interface UpdateUserPayload {
  phone_number: string;
  first_name: string;
  last_name: string;
  national_code?: string;
  birth_date: string;
  is_registered?: boolean;
}

export interface UpdateUserResponse {
  id: number;
  phone_number: string;
  first_name: string;
  last_name: string;
  national_code: string;
  birth_date: string;
  is_registered: boolean;
  updated_at: string;
}
