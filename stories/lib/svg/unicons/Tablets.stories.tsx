import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Tablets, TabletsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Tablets",
  component: Tablets,
} as ComponentMeta<typeof Tablets>;

const Template: ComponentStory<typeof Tablets> = (args: TabletsPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Tablets {...args} />
    <Tablets {...args} fill="red.500" />
    <Tablets {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
