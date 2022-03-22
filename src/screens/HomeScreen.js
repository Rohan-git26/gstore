import { useEffect } from "react";
import { Heading, Grid, Box} from "@chakra-ui/react";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { loading, products, error } = productList;
    const loading = 1
    const error = ""

    const products = [
      {
        _id : "1",
        name : "Item ",
        price : "Price"
      },
      {
        _id : "2",
        name : "Cars",
        price : "100"

      },
      {
        name : "House",
        price : "10000"
      },
      {
        _id : "2",
        name : "Mobile",
        price : "200"

      },
      {
        name : "House",
        price : "10000"
      },
      {
        _id : "2",
        name : "Cars",
        price : "100"

      },
      {
        name : "House",
        price : "10000"
      },
      {
        _id : "2",
        name : "Mobile",
        price : "200"

      },
      {
        name : "House",
        price : "10000"
      },
      {
        _id : "2",
        name : "Mobile",
        price : "200"

      },
      {
        name : "House",
        price : "10000"
      },
      {
        _id : "2",
        name : "Cars",
        price : "100"

      },
      {
        name : "House",
        price : "10000"
      },
      {
        _id : "2",
        name : "Mobile",
        price : "200"

      },

    ]
  
  return (
    <>
      <Heading as="h2" mb="8" fontSize="3xl">
        Latest Products
      </Heading>
        <Grid
          templateColumns={{ md: "1fr 1fr", sm: "1fr", lg: "repeat(4,1fr)" }}
          gap="8"
        >
          {/* {products.map((product) => (
            <div>
              {product.name}
            </div>
          ))} */}
            <table>
            {products.map(el => {
                  return (
                    <tr>
                      <th>
                        {el.name}
                      </th>
                      <th>
                        {el.price}
                      </th>
                    </tr>
                  );
                })}
            </table>
            
        </Grid>
    </>
  );

};


export default HomeScreen;
