import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AndroidAlt, AndroidAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AndroidAlt",
  component: AndroidAlt,
} as ComponentMeta<typeof AndroidAlt>;

const Template: ComponentStory<typeof AndroidAlt> = (
  args: AndroidAltPropsI
) => (
  <Box display="flex" gap="20px">
    <AndroidAlt {...args} />
    <AndroidAlt {...args} fill="red.500" />
    <AndroidAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
