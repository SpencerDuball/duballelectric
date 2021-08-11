import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Compass, CompassPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Compass",
  component: Compass,
} as ComponentMeta<typeof Compass>;

const Template: ComponentStory<typeof Compass> = (args: CompassPropsI) => (
  <Box display="flex" gap="20px">
    <Compass {...args} />
    <Compass {...args} fill="red.500" />
    <Compass {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
