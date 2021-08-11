import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Opera, OperaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Opera",
  component: Opera,
} as ComponentMeta<typeof Opera>;

const Template: ComponentStory<typeof Opera> = (args: OperaPropsI) => (
  <Box display="flex" gap="20px">
    <Opera {...args} />
    <Opera {...args} fill="red.500" />
    <Opera {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
