import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Presentation, PresentationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Presentation",
  component: Presentation,
} as ComponentMeta<typeof Presentation>;

const Template: ComponentStory<typeof Presentation> = (
  args: PresentationPropsI
) => (
  <Box display="flex" gap="20px">
    <Presentation {...args} />
    <Presentation {...args} fill="red.500" />
    <Presentation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
