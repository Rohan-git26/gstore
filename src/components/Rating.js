import { Flex, Icon, Text, Box } from "@chakra-ui/react";

const Rating = ({ value, text, color = "red.500" }) => {
  return (
    <Flex alignItems="flex-start" direction="column">
      <Box>
        
      </Box>
      <Text>{text && text}</Text>
    </Flex>
  );
};

export default Rating;
