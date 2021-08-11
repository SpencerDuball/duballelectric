import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { KeyholeSquare, KeyholeSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeyholeSquare",
  component: KeyholeSquare,
} as ComponentMeta<typeof KeyholeSquare>;

const Template: ComponentStory<typeof KeyholeSquare> = (
  args: KeyholeSquarePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <KeyholeSquare {...args} />
    <KeyholeSquare {...args} fill="red.500" />
    <KeyholeSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
