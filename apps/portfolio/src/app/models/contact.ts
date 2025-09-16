export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormState {
  data: ContactFormData;
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export interface ContactFormResult {
  success?: string;
  error?: string;
  data?: Partial<ContactFormData>;
}

export const initialContactFormState: ContactFormState = {
  data: {
    name: '',
    email: '',
    message: '',
  },
  status: 'idle',
};
