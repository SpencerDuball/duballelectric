import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Constructor, ConstructorPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Constructor",
  component: Constructor,
} as ComponentMeta<typeof Constructor>;

const Template: ComponentStory<typeof Constructor> = (
  args: ConstructorPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Constructor {...args} />
    <Constructor {...args} fill="red.500" />
    <Constructor {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
