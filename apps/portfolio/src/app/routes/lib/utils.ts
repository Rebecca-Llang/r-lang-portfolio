// app/lib/utils.ts

// Date formatting
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// SEO helpers
export const generateMetadata = (title: string, description: string) => {
  return {
    title: `${title} | Your Portfolio`,
    description,
    openGraph: {
      title,
      description,
    },
  };
};

// // Type guards and validations
// export const isValidEmail = (email: string): boolean => {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   return regex.test(email)
// }
