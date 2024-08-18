import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProducts = () => {

     const axiosPublic = useAxiosPublic()
     const { data: products = [], isPending: loading, refetch } =useQuery({
          queryKey: ['products'],
          queryFn: async () => {
               const res = await axiosPublic('/products')
               return res.data;
          }
     })
     return products;
};

export default useProducts;