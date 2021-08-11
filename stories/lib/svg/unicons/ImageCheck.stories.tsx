import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageCheck, ImageCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageCheck",
  component: ImageCheck,
} as ComponentMeta<typeof ImageCheck>;

const Template: ComponentStory<typeof ImageCheck> = (
  args: ImageCheckPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageCheck {...args} />
    <ImageCheck {...args} fill="red.500" />
    <ImageCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
