import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TachometerFastAlt, TachometerFastAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TachometerFastAlt",
  component: TachometerFastAlt,
} as ComponentMeta<typeof TachometerFastAlt>;

const Template: ComponentStory<typeof TachometerFastAlt> = (
  args: TachometerFastAltPropsI
) => (
  <Box display="flex" gap="20px">
    <TachometerFastAlt {...args} />
    <TachometerFastAlt {...args} fill="red.500" />
    <TachometerFastAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
