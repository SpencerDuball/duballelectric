import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SmileSquintWinkAlt, SmileSquintWinkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SmileSquintWinkAlt",
  component: SmileSquintWinkAlt,
} as ComponentMeta<typeof SmileSquintWinkAlt>;

const Template: ComponentStory<typeof SmileSquintWinkAlt> = (
  args: SmileSquintWinkAltPropsI
) => (
  <Box display="flex" gap="20px">
    <SmileSquintWinkAlt {...args} />
    <SmileSquintWinkAlt {...args} fill="red.500" />
    <SmileSquintWinkAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
