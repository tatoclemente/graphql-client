import { CREATE_PERSON } from "./graphql-mutations";
import { ALL_PERSONS, FIND_PERSON } from "./graphql-queries";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";

export const usePersons = () => {
  const result = useQuery(ALL_PERSONS);
  return result;
}

export const useFindPerson = () => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  return [getPerson, result];
}

export const useCreatePerson = (notifyError) => {
  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.message)
    }
  });
  return createPerson;
}