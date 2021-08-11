import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PanoramaV, PanoramaVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PanoramaV",
  component: PanoramaV,
} as ComponentMeta<typeof PanoramaV>;

const Template: ComponentStory<typeof PanoramaV> = (args: PanoramaVPropsI) => (
  <Box display="flex" gap="20px">
    <PanoramaV {...args} />
    <PanoramaV {...args} fill="red.500" />
    <PanoramaV {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
