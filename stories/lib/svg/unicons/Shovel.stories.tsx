import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Shovel, ShovelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Shovel",
  component: Shovel,
} as ComponentMeta<typeof Shovel>;

const Template: ComponentStory<typeof Shovel> = (args: ShovelPropsI) => (
  <Box display="flex" gap="20px">
    <Shovel {...args} />
    <Shovel {...args} fill="red.500" />
    <Shovel {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
