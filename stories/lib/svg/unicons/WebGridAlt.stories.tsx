import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WebGridAlt, WebGridAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WebGridAlt",
  component: WebGridAlt,
} as ComponentMeta<typeof WebGridAlt>;

const Template: ComponentStory<typeof WebGridAlt> = (
  args: WebGridAltPropsI
) => (
  <Box display="flex" gap="20px">
    <WebGridAlt {...args} />
    <WebGridAlt {...args} fill="red.500" />
    <WebGridAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
