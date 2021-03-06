import { v4 as uuidv4 } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../styles/Home.module.css";
import {
  Box,
  Heading,
  Flex,
  Image,
  Button,
  useDisclosure,
  useMediaQuery,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";

interface Props {
  list: any;
  type: string;
}

export const Dashboard = ({ list, type }: Props) => {
  const isDesktop = useMediaQuery("(max-width: 768px)");
  const colors = useColorModeValue("#2d3436", "#bdd4e7");
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex padding="10px" flexDirection="column">
          {type === "Drinks" ? (
            <Heading color={colors} as="h2" paddingTop="10px">
              {" "}
              Find a Drink Recipe{" "}
            </Heading>
          ) : (
            <Heading
              color={colors}
              as="h2"
              paddingTop="10px"
              paddingBottom="10px"
            >
              {" "}
              Find a Food Recipe{" "}
            </Heading>
          )}
        </Flex>
        <Flex w="100%" h="100%" padding="20px" className={styles.box} >
          <Flex w={isDesktop ? "100%" : "50%"} h="50%">
            <LazyLoadImage
              effect="blur"
              src={
                type === "Drinks"
                  ? "/emily-andreeva-L4Ndz5Fx_Tk-unsplash (1).jpg"
                  : "/syd-wachs-epqNIYI6S7E-unsplash.jpg"
              }
              alt="Cover img"
              style={{ borderRadius: "10apx" }}
              />
          </Flex>
          <Flex
            w={isDesktop ? "100%" : "50%"}
            h="100%"
            alignItems="center"
            justifyContent="center"
            borderWidth="1px"
            borderRadius="10px"
            flexDirection="column"
          > 
          <Heading size='md' >Filters</Heading>
           </Flex>
        </Flex>
        <Flex flexDirection="column">
          {type === "Drinks" ? (
            <Heading as="h2" size="2xl" paddingTop="20px" paddingBottom="20px">
              {" "}
              Popular Drinks{" "}
            </Heading>
          ) : (
            <Heading as="h6" size="2xl" paddingTop="20px" paddingBottom="20px">
              {" "}
              Popular Meals{" "}
            </Heading>
          )}
        </Flex>
        <Flex
          padding="0px"
          flexWrap="wrap"
          justifyContent="center"
          objectFit="cover"
        >
          {list &&
            list?.map((element: any, i: number) => (
              <Flex key={i} flexDirection="column" padding="5px">
                <Button
                  key={uuidv4()}
                  boxSize="20rem"
                  padding="10px"
                  paddingBottom="10px"
                  paddingTop="5px"
                  variant="ghost"
                  flexDirection="column"
                >
                  <LazyLoadImage
                    effect="blur"
                    src={
                      type === "Drinks"
                        ? element.strDrinkThumb
                        : element.strMealThumb
                    }
                    alt="drink photo"
                    style={{ padding: "10px" , borderRadius: "15px" }}
                  />
               <p>{ type === "Drinks"
                        ? element.strDrink
                        : element.strMeal}</p> </Button>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </>
  );
};
