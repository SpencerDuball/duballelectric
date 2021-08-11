import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BookReader, BookReaderPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BookReader",
  component: BookReader,
} as ComponentMeta<typeof BookReader>;

const Template: ComponentStory<typeof BookReader> = (
  args: BookReaderPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BookReader {...args} />
    <BookReader {...args} fill="red.500" />
    <BookReader {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
