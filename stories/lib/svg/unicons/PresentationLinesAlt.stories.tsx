import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  PresentationLinesAlt,
  PresentationLinesAltPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationLinesAlt",
  component: PresentationLinesAlt,
} as ComponentMeta<typeof PresentationLinesAlt>;

const Template: ComponentStory<typeof PresentationLinesAlt> = (
  args: PresentationLinesAltPropsI
) => (
  <Box display="flex" gap="20px">
    <PresentationLinesAlt {...args} />
    <PresentationLinesAlt {...args} fill="red.500" />
    <PresentationLinesAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
