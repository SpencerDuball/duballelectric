import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { KeyholeSquareFull, KeyholeSquareFullPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeyholeSquareFull",
  component: KeyholeSquareFull,
} as ComponentMeta<typeof KeyholeSquareFull>;

const Template: ComponentStory<typeof KeyholeSquareFull> = (
  args: KeyholeSquareFullPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <KeyholeSquareFull {...args} />
    <KeyholeSquareFull {...args} fill="red.500" />
    <KeyholeSquareFull {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
