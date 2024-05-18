export const validateEmail = (email: string) => {
  const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasAtSymbol = email.includes("@");
  const domainParts = email.split("@");
  const domain = domainParts[1];
  const hasSpaces = /\s/.test(email);
  const isValidDomain = /^([a-zA-Z0-9.-]+\.)*[a-zA-Z]{2,}$/.test(domain);

  return {
    isValid: isValidFormat && hasAtSymbol && isValidDomain && !hasSpaces,
    errors: {
      formatError: !isValidFormat ? "Email address format is invalid. " : "",
      atSymbolError: !hasAtSymbol ? 'Email address must contain an "@".' : "",
      domainError: !isValidDomain ? "Invalid domain name in email address." : "",
      spaceError: hasSpaces ? "Email address must not contain spaces." : "",
    },
  };
};
