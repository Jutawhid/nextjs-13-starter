"use client";
import { Text as ChakraText} from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { TextProps } from "./text.types";
import { TEXT_TEST_ID } from "./text.constants";

const Text: FC<PropsWithChildren<TextProps>> = ({ children, ...props }) => {
  return (
    <ChakraText data-testid={TEXT_TEST_ID} {...props}>
      {children}
    </ChakraText>
  );
};

export default Text;
