import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BasketballHoop, BasketballHoopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BasketballHoop",
  component: BasketballHoop,
} as ComponentMeta<typeof BasketballHoop>;

const Template: ComponentStory<typeof BasketballHoop> = (
  args: BasketballHoopPropsI
) => (
  <Box display="flex" gap="20px">
    <BasketballHoop {...args} />
    <BasketballHoop {...args} fill="red.500" />
    <BasketballHoop {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
