'use client';

const ErrorMessage = ({ message }: { message: string }) => {
  return <p>Could not fetch the list of notes. {message}</p>;
};
export default ErrorMessage;
