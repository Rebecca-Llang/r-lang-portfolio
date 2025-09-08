export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateRequired(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim() !== '';
}

export function extractFormData(formData: FormData) {
  return {
    email: formData.get('email')?.toString(),
    message: formData.get('message')?.toString(),
    name: formData.get('name')?.toString(),
  };
}
