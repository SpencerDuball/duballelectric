import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UploadAlt, UploadAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UploadAlt",
  component: UploadAlt,
} as ComponentMeta<typeof UploadAlt>;

const Template: ComponentStory<typeof UploadAlt> = (args: UploadAltPropsI) => (
  <Box display="flex" gap="20px">
    <UploadAlt {...args} />
    <UploadAlt {...args} fill="red.500" />
    <UploadAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
