import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EuroCircle, EuroCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EuroCircle",
  component: EuroCircle,
} as ComponentMeta<typeof EuroCircle>;

const Template: ComponentStory<typeof EuroCircle> = (
  args: EuroCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <EuroCircle {...args} />
    <EuroCircle {...args} fill="red.500" />
    <EuroCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
