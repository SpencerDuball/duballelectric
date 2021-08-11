import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WebSectionAlt, WebSectionAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WebSectionAlt",
  component: WebSectionAlt,
} as ComponentMeta<typeof WebSectionAlt>;

const Template: ComponentStory<typeof WebSectionAlt> = (
  args: WebSectionAltPropsI
) => (
  <Box display="flex" gap="20px">
    <WebSectionAlt {...args} />
    <WebSectionAlt {...args} fill="red.500" />
    <WebSectionAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
