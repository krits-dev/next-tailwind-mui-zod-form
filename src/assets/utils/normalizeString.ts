export const normalizeString = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

export const isEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};
