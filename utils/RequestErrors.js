import { toast } from "react-toastify";

export const notify = (error) => {
  const { message } = error;

  if (typeof message === Object) {
    return false;
  }

  toast.error(message);
};
