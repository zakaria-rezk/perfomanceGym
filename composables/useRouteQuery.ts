export function useRouteQuery() {
  const route = useRoute();
  const router = useRouter();
  const addQuery = (key: string,val:string|number) => {
    router.push({
      query: {
        ...route.query,
        [key]: val.toString(),
      },
    });
  };
  const deleteQuery = (val: string) => {
    const query = { ...route.query };
    delete query[val];
    router.replace({ query: query });
  };
  return { addQuery, deleteQuery };
}
