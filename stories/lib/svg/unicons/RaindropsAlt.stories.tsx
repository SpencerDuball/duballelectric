import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RaindropsAlt, RaindropsAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RaindropsAlt",
  component: RaindropsAlt,
} as ComponentMeta<typeof RaindropsAlt>;

const Template: ComponentStory<typeof RaindropsAlt> = (
  args: RaindropsAltPropsI
) => (
  <Box display="flex" gap="20px">
    <RaindropsAlt {...args} />
    <RaindropsAlt {...args} fill="red.500" />
    <RaindropsAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
